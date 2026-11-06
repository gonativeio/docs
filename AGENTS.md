# Median documentation: agent instructions

> For general Mintlify product knowledge (components, configuration), install the Mintlify skill: `npx skills add https://mintlify.com/docs`

## About this project

- This is the documentation for [Median.co](https://median.co), published at `docs.median.co` and built on [Mintlify](https://mintlify.com).
- Pages are MDX files with YAML frontmatter in `docs/`. Each page's URL is its path, for example `docs/status-bar.mdx` is served at `/docs/status-bar`.
- Navigation, navbar, footer, and redirects live in `docs.json`.
- Reusable components live in `snippets/`. Images live in `images/`.
- The docs were migrated from ReadMe. Page paths were kept the same so existing links keep working. Don't rename a page without adding a redirect.
- This repository is **public**. Anything committed here, including hidden pages and Git history, is readable on GitHub.
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP.
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to look up how Mintlify works.

## Files you must not edit by hand

- `docs/changelog.mdx` and `docs/changelog-archive.mdx` are generated daily from a Google Sheet by a GitHub Action in a separate private repository. Manual edits are overwritten on the next sync. Change the sync script's template instead.
- `changelog-tags.js` and `changelog-tags.css` style the changelog tags. Keep the tag list in `changelog-tags.js` in sync with the release types and products in the sync script.

## Terminology

| Use                                                            | Not                                      |
| -------------------------------------------------------------- | ---------------------------------------- |
| Median, Median.co                                              | GoNative, gonative                       |
| App Studio                                                     | dashboard, Median dashboard, app builder |
| JavaScript Bridge, or Median JavaScript Bridge                 | JS bridge, Javascript Bridge             |
| Native Plugins (the App Studio section), plugin (a single one) | add-on, extension                        |
| App Publishing Service                                         | publishing team service                  |
| Median for Enterprise                                          | enterprise plan                          |
| instance (native navigation)                                   | navigation profile                       |
| Global Theme                                                   | theme settings                           |
| URL pattern                                                    | regex (for App Studio rules)             |
| sign in, sign out                                              | log in, login (as a verb)                |

- `median.*` methods come from the library injected into the app. `Median.*` methods come from the `median-js-bridge` npm package. Don't mix them in one example.
- Keep official third-party names as written: Firebase Cloud Messaging, OneSignal, App Store Connect, Google Play Console, Microsoft Entra ID, Microsoft Dynamics 365.

## Style

- US English: "behavior", "color", "practices".
- Active voice and second person ("you").
- Short sentences, one idea per sentence. No em dashes. Split the sentence or use a colon instead.
- Serial comma: "iOS, Android, and the web".
- Sentence case for headings and card titles. Product and feature names keep their capitalization.
- Use imperative headings for tasks: "Create an instance", "Send to a topic".
- Bold for UI elements, with arrows for paths: **Native Plugins → OneSignal**.
- Code formatting for file names, paths, method names, parameters, and values.
- No marketing language: avoid "powerful", "seamlessly", "leading", "at precisely the right moment".
- Use descriptive link text. Never "here" or "click here".
- Don't repeat the same explanation in several sections. Explain once and link to it.

## Frontmatter

Every page needs a `title` and a `description`:

````mdx
---
title: "Status Bar"
description: "Control the color and style of the device status bar in your app."
---
````

- The description is a full sentence ending with a period, about 150 to 160 characters at most. It's used as the subtitle and as the meta description for search engines.
- Don't repeat the title as an H1 in the page body. Mintlify renders the title as the H1, so the page starts at H2.
- Hidden pages (not in `docs.json` navigation) get `noindex: true`.
- Deprecated pages get `deprecated: true` and a `<Warning>` at the top that links to the replacement page.

## Page structure

Plugin and feature pages follow this order. Leave out sections that don't apply.

1. Introduction: what the feature does and when to use it, in one or two short paragraphs.
2. Developer Demo callout (see below), if a demo page exists.
3. Prerequisites.
4. Configuration: App Studio settings as a table with **Setting**, **Description**, and, where helpful, **Recommendation** columns.
5. JavaScript Bridge methods: one H3 per method or feature.
6. Testing checklist, for complex integrations.
7. Troubleshooting: one H3 per problem, phrased as the symptom ("Push notifications aren't arriving"), so support replies can link to it.
8. Related documentation: a `CardGroup`.

When combining several old articles into one page, keep the most-linked slug and add redirects from the others to the matching section anchors.

## Components and patterns

- Start a callout with a bold line, not a heading. Headings inside callouts appear in the table of contents.
- Developer Demo callouts use this exact format:

```mdx
<Check>
  **Developer Demo**

Display our demo page in your app to test during development [https://median.dev/status-bar/ <Icon icon="arrow-up-right-from-square" size={12} />](https://median.dev/status-bar/)

</Check>
```

### JavaScript Bridge code

Import the Median logo and show Bridge code in a `CodeGroup`:

````mdx
import { MedianLogo } from "/snippets/median-logo.jsx";

<MedianLogo />

<CodeGroup>

```javascript JavaScript
median.statusbar.set({ style: "dark", color: "80ff0000" });
```

</CodeGroup>
````

- Use lowercase language tags (`javascript`, `json`, `bash`) with a title after them.
- Put related variants (for example Set / Get, or Subscribe / Unsubscribe) as tabs in one `CodeGroup`.
- Examples must be valid code readers can copy. Don't use pseudo-syntax like `stop(true | false)`. Show real values and explain the options in a table.
- Guard calls that only work in the app: `if (typeof median !== 'undefined')` for the injected library, or `Median.isNativeApp()` for the npm package. Prefer `median_library_ready()` for code that runs on page load.
- Use `console.log` in example handlers, not `window.alert()`.

### Cards

- Use `CardGroup` and `Card`. Icons are Font Awesome names without the `fa-` prefix (`icon="puzzle-piece"`), or an image path for partner logos.
- Columns: `cols={1}` for workflow lists, `cols={2}` for related documentation, `cols={3}` for landing pages with short descriptions.
- A card links once, through `href`. Don't add "Learn more" links inside cards.
- Card descriptions are one sentence and don't repeat the title.

### Other components

- `<Steps>` for procedures where readers follow an order.
- `<Tabs>` for platform- or client-specific instructions (iOS / Android, Claude / Cursor / VS Code).
- `<AccordionGroup>` for long reference content and FAQs.
- `<Frame>` around every image, with a `caption` where helpful.
- `<Prompt description="...">` for AI prompts readers should copy. The description says what the prompt does. Don't repeat the prompt text elsewhere.
- `<AppetizeEmbed iosEmbedCode="..." androidEmbedCode="..." />` from `/snippets/appetize-embed.jsx` for live simulators. Pass only the platforms you have.
- `<InstantPreviewCTAInline articleType="lovable" />` from `/snippets/instant-preview-cta-inline.jsx` on website builder pages. Always set `articleType` (`replit`, `lovable`, `base44`, `salesforce`, `bolt`).

### Diagrams

- Use Mermaid in a ` ```mermaid ` code block.
- Prefer `flowchart LR` to keep diagrams short. Use short node labels.
- Keep code and JSON out of diagram nodes. Show them in a code block below the diagram.
- Don't hide a diagram that explains core behavior inside an accordion.

### Tables

- Use Markdown tables, not HTML. Use an HTML table only when cells need vertical alignment.
- Split very wide tables. Prefer languages or items as rows and a few columns over many columns.

## Links

- Internal links are relative and include `/docs/`: `[Status Bar](/docs/status-bar)`. Never use `https://docs.median.co/...`.
- Never link to `median.readme.io`, `gonative.readme.io`, or `docs.median.co/discuss`.
- External links are regular Markdown links. Link to official docs (Apple, Google, Firebase) instead of copying details that change often, such as fees, regional rules, or device lists.

## Images

- Store images under `images/docs/docs/<feature>/`, for example `images/docs/docs/system-nav-bar/3button.png`, and reference them as `/images/docs/docs/<feature>/<file>`.
- Never reference `files.readme.io` or other ReadMe-hosted images. Download them into the repo.
- Every image needs descriptive `alt` text.
- Check that logos and screenshots are readable in both light and dark mode.

## `docs.json` navigation

- Top-level groups in a tab are section headings. **Never add `root` to a top-level group.** It makes the section collapse.
- Nested groups set `root` to their overview page, so clicking the group name opens it. **Don't also list the root page in `pages`**, or it appears twice.
- Each page appears in the navigation once.
- Hidden pages are left out of `navigation` (or placed in a group with `"hidden": true`). They're still built and reachable by URL.
- When renaming, merging, or removing a page, add a redirect to the `redirects` array.
- Use relative paths for internal links in `docs.json` (navbar, logo, redirects).

## MDX pitfalls that break the build

These have broken builds in this repo before. Check for them in every change.

- **Indented closing tags after a list.** A closing tag like `</Warning>` or `</Info>` indented directly under a list item is parsed as part of the list. Closing tags of callouts always start at column 1.
- **Curly braces in text.** `{` and `}` outside code are parsed as JavaScript. Escape them (`\{ style: "x" \}`) or put the text in backticks. This applies inside `<Prompt>` too.
- **Code fences on one line.** Opening and closing ` ``` ` must each be on their own line.
- **Blank lines inside JSX** (for example inside `<video>` or between `<source>` tags) can turn content into Markdown paragraphs.
- **Unpaired backticks** and spaces inside code spans (`` `foo `bar ``) render incorrectly.
- **Duplicate headings** on a page create duplicate anchors. Make each heading unique.

## Validation

Before committing:

```bash
npx mint validate      # MDX parse errors and content checks
npx mint broken-links  # internal links
grep -rnE '^\s+</(Warning|Info|Note|Tip|Check)>' docs/  # indented closing tags
```

## Content boundaries

- Don't commit secrets, API keys, customer names or data, discount codes, or review incentives. The repository and its history are public, even for hidden pages.
- Don't invent App Studio menu paths, setting names, default values, or plugin behavior. If something isn't confirmed by an existing page or the user, add it as an open question for the user instead of guessing.
- Don't document internal tools or the private release notes sync repository.
- When a change affects behavior described on other pages (for example a parameter like `persist`), find and update those pages in the same change.
