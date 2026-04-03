# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

No test or lint scripts are configured.

## Architecture

This is a React 18 SPA marketing website for WickedAILabs, an AI consulting firm. Built with Vite, Tailwind CSS, and React Router v6.

**Tech stack:** React 18 + React Router v6 + Tailwind CSS v3 + Vite

**Routing:** Client-side only via `BrowserRouter`. The `.htaccess` file in the project root provides Apache mod_rewrite rules to redirect all requests to `index.html` for SPA routing on Hostinger shared hosting.

**Layout pattern:** `App.jsx` wraps all routes with a persistent `Navbar` + `Footer`. Pages are rendered between them via `<Routes>`.

**Pages:** Home (`/`), About (`/about`), Services (`/services`), Contact (`/contact`), NotFound (catch-all `*`)

**UI components:** `src/components/ui/` contains simple reusable components (Button, Card, Input, Textarea) following a shadcn-like pattern — unstyled wrappers with Tailwind classes applied directly.

## Styling

Brand colors are defined in two places:
- `tailwind.config.cjs` — extends Tailwind with `brand.50`, `brand.100`, `brand.500` (#2563eb primary blue)
- `src/index.css` — CSS variables `--brand-primary` and `--brand-secondary`

The `.hero` class in `index.css` provides the gradient background used on the Home page.

## Deployment

Target: Hostinger shared hosting (Apache). Deployment steps:
1. `npm run build` — outputs to `dist/`
2. Upload contents of `dist/` to Hostinger `public_html`
3. Upload `.htaccess` to `public_html` (enables SPA routing)


## Workflow Orchestration

### 1. Plan Node Default

- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately – don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy

- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop

- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done

- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)

- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes – don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing

- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests – then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management

1. **Plan First**: Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.
