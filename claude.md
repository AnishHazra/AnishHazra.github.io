## Project Rules

### 1. Comments — keep them minimal (most important)

- Do NOT write long comment blocks, essays, or multi-paragraph doc comments.
- Add a comment only when the _why_ is not obvious from the code. One short line, max two.
- No comments that just restate what the code does (`// set the title`, `// call API`).
- No change-history comments (`// changed X to Y`, `// used to be…`, `// fixed bug`, `// new`). That belongs in the commit message.
- No commented-out code. Delete it.
- Follow the comment style of the file you are editing; if it has few comments, add few.

```Dart
// ❌ Don't
/// The shadow under the coin. Cast onto the screen rather than turning with the coin: it
/// slides away from the light and spreads as the coin comes side-on, which is most of
/// what sells the near edge as nearer, and it used to be applied before the rotation…
// ✅ Do
// Stays on screen instead of rotating with the coin
```

### 2. Git

- Do not commit or push unless asked. Branch off `develop`, never commit to it directly.
- Commit message is a single subject line only: `type(Scope): summary` (e.g. `feat(Badge): add sponsored badges`). No description body.
- Never add `Co-Authored-By: Claude …` or any other Claude attribution to commits or PRs.
