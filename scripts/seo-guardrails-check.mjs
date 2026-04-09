import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function read(relPath) {
  const fullPath = path.join(root, relPath);
  try {
    return fs.readFileSync(fullPath, "utf8");
  } catch {
    return null;
  }
}

const failures = [];
const notes = [];

const layoutSource = read("app/layout.jsx");
if (!layoutSource) {
  failures.push("Missing app/layout.jsx.");
} else {
  if (!/export\s+const\s+metadata\s*=/.test(layoutSource)) {
    failures.push("app/layout.jsx must export metadata.");
  }
  if (!/\btitle\s*:/.test(layoutSource)) {
    failures.push("app/layout.jsx metadata should include title.");
  }
  if (!/\bdescription\s*:/.test(layoutSource)) {
    failures.push("app/layout.jsx metadata should include description.");
  }
  if (!/(openGraph|twitter)\s*:/.test(layoutSource)) {
    notes.push("Consider adding openGraph and twitter metadata for richer previews.");
  }
}

const pageSource = read("app/page.jsx");
if (!pageSource) {
  failures.push("Missing app/page.jsx.");
} else if (!/<main[\s>]/.test(pageSource)) {
  failures.push("app/page.jsx should include a main landmark.");
}

const sectionsDir = path.join(root, "components", "sections");
if (fs.existsSync(sectionsDir)) {
  const sectionFiles = fs
    .readdirSync(sectionsDir)
    .filter((name) => name.endsWith(".jsx"));

  let h1Count = 0;
  for (const fileName of sectionFiles) {
    const relPath = path.join("components", "sections", fileName);
    const source = read(relPath);
    if (!source) {
      continue;
    }
    const matches = source.match(/<h1[\s>]/g);
    h1Count += matches ? matches.length : 0;
  }

  if (h1Count === 0) {
    failures.push("Exactly one h1 should exist across landing sections, but none were found.");
  }
  if (h1Count > 1) {
    failures.push(`Exactly one h1 should exist across landing sections, but found ${h1Count}.`);
  }
} else {
  notes.push("components/sections directory not found; skipped heading checks.");
}

if (failures.length > 0) {
  const output = {
    continue: false,
    stopReason: `SEO guardrails failed:\n- ${failures.join("\n- ")}`,
  };

  if (notes.length > 0) {
    output.systemMessage = `Notes:\n- ${notes.join("\n- ")}`;
  }

  process.stdout.write(JSON.stringify(output));
  process.exit(2);
}

const successOutput = {
  continue: true,
  systemMessage:
    notes.length > 0
      ? `SEO guardrails passed with notes:\n- ${notes.join("\n- ")}`
      : "SEO guardrails passed.",
};

process.stdout.write(JSON.stringify(successOutput));
process.exit(0);
