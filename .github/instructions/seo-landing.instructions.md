---
description: "Use when editing landing-page SEO copy, metadata, headings, or internal links for Battle League. Covers keyword placement, heading hierarchy, and AI-answer-friendly structure."
name: "Landing SEO Rules"
applyTo:
  - "app/layout.jsx"
  - "app/page.jsx"
  - "components/sections/**/*.jsx"
  - "data/content.js"
---
# Landing SEO Rules

- Keep exactly one page-level intent: players joining Battle League early testing.
- Keep exactly one h1 across landing sections. Use h2 for section titles and avoid skipping heading levels.
- Place the primary keyword naturally in page title, meta description, intro copy, and one section heading.
- Use secondary keywords only where context is genuinely relevant. Avoid repetitive phrasing.
- Keep title length around 50-60 characters and description around 140-160 characters.
- Preserve semantic landmarks: header, main, section, footer.
- Prefer clear internal anchor text over generic text like "click here".
- Add concise FAQ-style phrasing when useful to improve AI answer extraction.
- When metadata is modified, ensure social metadata (openGraph and twitter) remains aligned with page intent.
- Never add hidden text, doorway pages, or manipulative keyword stuffing.
