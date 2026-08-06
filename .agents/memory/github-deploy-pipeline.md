---
name: GitHub deploy pipeline to Hostinger
description: How production (agilityphysio.net) actually deploys and how to force a deploy when push-triggered Actions don't fire
---

# Production deploy path

- Production site `agilityphysio.net` is hosted on **Hostinger**, deployed by GitHub Actions (`.github/workflows/deploy.yml`) which builds and rsyncs `dist/public/` over SSH. The Replit deployment (`agility-redesign-1.replit.app`) is separate.
- **Why:** Pushing to GitHub is the deploy mechanism; Replit's Publish button does NOT update agilityphysio.net.

# Push-triggered runs stopped firing (Aug 2026)

- Pushes reach GitHub fine (verified via API), workflow state is "active", but `push`-event runs stopped triggering after 2026-08-03.
- **How to apply:** Force a deploy via manual dispatch — `POST /repos/agilityphysio056/agilityphysio-site/actions/workflows/255987540/dispatches` with `{"ref":"main"}` using `$GITHUB_PERSONAL_ACCESS_TOKEN_UPDATED`. Returns 204 and the run completes successfully.
- Git remote `origin` previously had a stale hardcoded PAT; it now uses `$GITHUB_PERSONAL_ACCESS_TOKEN_UPDATED`.
- Local `refs/remotes/origin/main.lock` error after every push is harmless (agent cannot delete it); the push itself succeeds.
