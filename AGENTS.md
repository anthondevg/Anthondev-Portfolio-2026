# Development guidelines

- Prefer Tailwind CSS utility classes for styling whenever practical. Use custom CSS only for global tokens, complex pseudo-elements, animations, or styles that cannot be expressed cleanly with Tailwind utilities.

# Commit message guidelines

Generate commit messages from the actual staged diff and follow Conventional Commits:

```text
<type>(<scope>): <summary>

[optional body]

[optional footer]
```

## Types

- `feat`: add or materially improve user-facing functionality.
- `fix`: correct broken behavior, visuals, accessibility, or metadata.
- `content`: update portfolio copy, case studies, work history, links, or media.
- `style`: change presentation without changing behavior.
- `refactor`: reorganize code without changing behavior.
- `perf`: improve loading, rendering, animation, or asset performance.
- `test`: add or update tests.
- `docs`: update developer-facing documentation.
- `build`: change dependencies or the build toolchain.
- `ci`: change deployment or automation workflows.
- `chore`: perform repository maintenance not covered above.
- `revert`: revert an earlier commit.

## Preferred scopes

Use the narrowest relevant scope and omit it when a change spans unrelated areas:

- `home`, `work`, `navigation`, `contact`: portfolio pages or sections.
- `components`: shared React components.
- `content`: MDX case studies and portfolio data.
- `styles`: global styles, design tokens, and responsive presentation.
- `motion`, `3d`: animation and React Three Fiber experiences.
- `seo`: metadata, Open Graph, robots, sitemap, and structured data.
- `a11y`: accessibility-specific changes.
- `assets`: images, icons, fonts, and other static files.
- `deps`, `config`: dependencies and project configuration.

## Writing rules

- Write the summary in English to match the codebase and project content.
- Use lowercase imperative language: `add`, `update`, `fix`, `remove`.
- Keep the summary specific, at most 72 characters, with no trailing period.
- Describe the outcome, not the implementation process.
- Keep each commit focused on one coherent change.
- Add a body only when context or reasoning is useful; wrap it at 72 characters.
- Use `BREAKING CHANGE: <description>` in the footer for incompatible changes.
- Do not claim tests, fixes, or outcomes that are not supported by the diff.

## Examples

```text
feat(work): add dynamic case study pages
content(content): replace draft AI project case study
fix(a11y): restore visible focus states in navigation
style(home): refine responsive hero spacing
perf(3d): reduce hero scene render cost
fix(seo): use canonical site URL in Open Graph metadata
build(deps): update Next.js to 16.2.12
chore(config): align TypeScript path aliases
```
