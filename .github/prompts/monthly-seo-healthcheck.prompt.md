---
description: "Run a monthly SEO health check for this Next.js marketing site and implement prioritized fixes."
name: "Monthly SEO Health Check"
argument-hint: "Focus keyword cluster, campaign, or market (optional)"
agent: "SEO & Keyword Ranking Expert"
tools: [read, search, edit, execute, web]
---
Perform a monthly SEO health check for this repository.

If an argument is provided, treat it as the monthly focus area. If not provided, default to Battle League early-testing acquisition.

Workflow:
1. Audit current metadata, heading hierarchy, internal links, and copy intent match.
2. Define primary, secondary, and long-tail keyword targets for this month.
3. Implement the top 3-5 high-impact on-page fixes directly in the codebase.
4. Run validation commands: npm run lint and npm run build.
5. Return a prioritized summary of what changed, validation results, and next monthly actions.

Output sections:
1. Objective and monthly focus
2. Keyword map
3. Implemented file changes
4. Validation results
5. Next priorities
