# Median documentation: agent instructions

> For general Mintlify product knowledge (components, configuration), install the Mintlify skill: `npx skills add https://mintlify.com/docs`

## About this project

- This is the documentation for [Median](https://median.co), published at `docs.median.co` and built on [Mintlify](https://mintlify.com).
- Pages are MDX files with YAML frontmatter in `docs/`. Each page's URL is its path, for example `docs/status-bar.mdx` is served at `/docs/status-bar`.
- Navigation, navbar, footer, colors, fonts, and redirects live in `docs.json`.
- Reusable components live in `snippets/`. Images live in `images/`.
- The docs were migrated from ReadMe. Page paths were kept the same so existing links keep working. Don't rename a page without adding a redirect.
- This repository is **public**. Anything committed here, including hidden pages and Git history, is readable on GitHub.
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP.
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to look up how Mintlify works.
- The writing and visual rules below follow the Median Brand Guidelines (version 1.0, December 2023). When this file and the brand guidelines disagree, ask the user instead of guessing.

## Files you must not edit by hand

- `docs/changelog.mdx` and `docs/changelog-archive.mdx` are generated daily from a Google Sheet by a GitHub Action in a separate private repository. Manual edits are overwritten on the next sync. Change the sync script's template instead.
- `changelog-tags.js` and `changelog-tags.css` style the changelog tags. Keep the tag list in `changelog-tags.js` in sync with the release types and products in the sync script.

## Voice

Median's brand voice has five principles. This is how each one applies to documentation.

1. **We're the experts.** State facts clearly and confidently, then back them up with evidence: working code, exact settings, and links to official platform docs. Don't hedge ("should probably work") and don't make claims you can't show.
2. **We get to the point.** Lead with what the reader can do and what they need. Keep word count low. Use short paragraphs, bullets, tables, and bold UI labels so readers can scan.
3. **We're refreshingly honest.** Say up front when something costs money, needs a specific plan or plugin, works on only one platform, or has a known limitation. Put it in the introduction or a callout, not at the bottom. If Median isn't the right tool for a use case, say so.
4. **We're human.** Be friendly, calm, and professional. Use contractions ("you'll", "don't") and address the reader as "you". An occasional rhetorical question or exclamation point is fine. Never use one in a warning or error message.
5. **We don't just speak in `</code>`.** Explain the concept in plain language before the technical detail, and define jargon on first use. Then go as deep as advanced readers need.

## Terminology

Use **Median** for the company and product in prose. `Median.co` is the domain and an alternate logo, so use it only in URLs, legal text, or where the brand guidelines' `median.co` lockup is shown.

| Use                                                                                       | Not                                             |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Median                                                                                    | Median.co (in prose), GoNative, gonative        |
| Median App Studio on first mention, then App Studio                                       | dashboard, Median dashboard, app builder        |
| Median JavaScript Bridge on first mention, then JavaScript Bridge                         | JS Bridge, JS bridge, Javascript Bridge         |
| native plugins (in prose), Native Plugins (the App Studio section), plugin (a single one) | add-on, extension                               |
| Median's Publishing Service on first mention, then Publishing Service                     | App Publishing Service, publishing team service |
| Median's Mobile Device Simulators on first mention, then simulator                        | emulator (for Median's browser simulators)      |
| Support & Updates Plan                                                                    | support plan, maintenance plan                  |
| Median for Enterprise                                                                     | enterprise plan                                 |
| Apple App Store on first mention, then App Store; Google Play Store, then Google Play     | iTunes, Play Market                             |
| instance (native navigation)                                                              | navigation profile                              |
| Global Theme                                                                              | theme settings                                  |
| URL pattern                                                                               | regex (for App Studio rules)                    |
| sign in, sign out                                                                         | log in, login (as a verb)                       |
| demo page (the prebuilt pages on `median.dev`)                                            | demo site, test page, Developer Demo (in prose) |

- "Dashboard" is fine for third-party products, such as the OneSignal dashboard. Median's own interface is always App Studio.
- Service names keep the capitalization the brand uses: Self-Service, Assisted App Development, Concierge App Development, Full-Service, and Enterprise. Only mention a service if an existing page or the user confirms it's current.
- `median.*` methods come from the library injected into the app. `Median.*` methods come from the `median-js-bridge` npm package. Don't mix them in one example.
- Keep official third-party names as written: Firebase Cloud Messaging, OneSignal, App Store Connect, Google Play Console, Microsoft Entra ID, Microsoft Dynamics 365.

## Style

- US English: "behavior", "color", "practices".
- Active voice and second person ("you").
- Short sentences, one idea per sentence. Prefer a colon or a new sentence to an em dash, and use at most one em dash per sentence.
- Oxford comma, always: "iOS, Android, and the web".
- **Sentence case for page titles, sidebar titles, headings, card titles, and the bold first line of callouts.** Capitalize only proper nouns: Median product names (App Studio, JavaScript Bridge, Publishing Service), third-party brands (OneSignal, Google Sign-In), and platform names. Generic features are lowercase: "Share button", "Getting started with Replit", "Pull-to-refresh".
- Use imperative headings for tasks: "Create an instance", "Send to a topic".
- Bold for UI elements, with arrows for paths: **Native Plugins → OneSignal**. Write UI labels exactly as App Studio shows them, even when they're title case.
- Code formatting for file names, paths, method names, parameters, and values.
- No marketing language in docs: avoid "powerful", "seamlessly", "leading", "unbelievably", and "at precisely the right moment". The brand principle is "show, not tell", so show the result instead.
- No emoji in docs pages, headings, or callouts. The brand reserves emoji for social media.
- Use descriptive link text. Never "here" or "click here".
- Don't repeat the same explanation in several sections. Explain once and link to it.

## Frontmatter

Every page needs a `title` and a `description`:

```mdx
---
title: "Status bar"
description: "Control the color and style of the device status bar in your app."
---

import { DeveloperDemo } from "/snippets/developer-demo.jsx";
```

- The title is in sentence case (see [Style](#style)). It's also the sidebar label, unless you set a shorter `sidebarTitle`.
- The description is a full sentence ending with a period, about 150 to 160 characters at most. It's used as the subtitle and as the meta description for search engines, so say what the reader can do on the page.
- Don't repeat the title as an H1 in the page body. Mintlify renders the title as the H1, so the page starts at H2.
- Hidden pages (not in `docs.json` navigation) get `noindex: true`.
- Deprecated pages get `deprecated: true` and a `<Warning>` at the top that links to the replacement page.

## Page structure

Plugin and feature pages follow this order. Leave out sections that don't apply.

1. Introduction: what the feature does and when to use it, in one or two short paragraphs. State costs, plan or plugin requirements, and platform limits here.
2. Developer demo callout, if a demo page exists on `median.dev` (see [Developer demo callouts](#developer-demo-callouts)).
3. Prerequisites.
4. Configuration: App Studio settings as a table with **Setting**, **Description**, and, where helpful, **Recommendation** columns.
5. JavaScript Bridge methods: one H3 per method or feature.
6. Testing checklist, for complex integrations.
7. Troubleshooting: one H3 per problem, phrased as the symptom ("Push notifications aren't arriving"), so support replies can link to it.
8. Related documentation: a `CardGroup`.

When combining several old articles into one page, keep the most-linked slug and add redirects from the others to the matching section anchors.

## Components and patterns

- Start a callout with a bold line, not a heading. Headings inside callouts appear in the table of contents.
- Put all `import` lines for snippets directly after the frontmatter, one per snippet, before any page content. Never place an import inside another component.
- When a snippet controls wording or layout (for example `DeveloperDemo`), change the snippet, not individual pages. Don't copy a snippet's output into a page by hand.

### Developer demo callouts

Median hosts prebuilt demo pages on `median.dev` that call a feature through the JavaScript Bridge. Developers load them inside their Median app to test the feature before they add it to their own site. Every plugin or feature page with a demo page uses the `DeveloperDemo` snippet. Don't write demo callouts by hand, and don't use `<Check>` or the old "**Developer Demo**" format.

```mdx
<DeveloperDemo path="status-bar" />
```

| Prop       | Required | Description                                                                                                                  |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `path`     | Yes      | The demo page's slug on `median.dev`, for example `age-safety`. The snippet adds the domain and a trailing slash.            |
| `feature`  | No       | The feature name in sentence case. Defaults to the slug with spaces (`deep-linking` becomes "deep linking").                 |
| `url`      | No       | A full URL, only for a demo page hosted somewhere other than `median.dev`. Replaces `path`.                                  |
| `showNote` | No       | Shows the note that the demo page only works inside a Median app. Defaults to `true`. Set `{false}` only if that isn't true. |

- Set `feature` when the name contains a brand or proper noun, or when the slug doesn't read naturally in a sentence: `<DeveloperDemo feature="AdMob" path="admob" />`.
- Put feature-specific follow-up steps between the opening and closing tags, in one or two sentences with descriptive link text. Closing tags start at column 1.

```mdx
<DeveloperDemo path="deep-linking">
  After setup, check your configuration with the [Deep Linking
  Validator](/docs/deep-linking-validator).
</DeveloperDemo>
```

- Use one demo callout per page, placed after the introduction.
- Only add a callout for a demo page that exists. Open the URL to check it before you commit. Don't invent demo pages or slugs.

### JavaScript Bridge code

Import the Median logo and show Bridge code in a `CodeGroup`:

````mdx
import { MedianLogo } from "/snippets/median-logo.jsx";

<MedianLogo />

<CodeGroup>

```javascript JavaScript
if (typeof median !== "undefined") {
  median.statusbar.set({ style: "dark", color: "80ff0000" });
}
```

</CodeGroup>
````

- Use lowercase language tags (`javascript`, `json`, `bash`) with a title after them. Use `text` for plain output and for prompts shown alongside code. Use `<Prompt>` for standalone AI prompts readers should copy (see [Other components](#other-components)).
- Put related variants (for example Set / Get, or Subscribe / Unsubscribe) as tabs in one `CodeGroup`.
- Examples must be valid code readers can copy. Don't use pseudo-syntax like `stop(true | false)`. Show real values and explain the options in a table.
- Guard calls that only work in the app: `if (typeof median !== 'undefined')` for the injected library, or `Median.isNativeApp()` for the npm package. For code that runs on page load, define a `median_library_ready()` function, which the library calls once it's ready.
- Use `console.log` in example handlers, not `window.alert()`.

### Cards

- Use `CardGroup` and `Card`. Icons are Font Awesome names without the `fa-` prefix (`icon="puzzle-piece"`), or an image path for partner logos. See [Icons](#icons) for which icons fit the brand.
- Columns: `cols={1}` for workflow lists, `cols={2}` for related documentation, `cols={3}` for landing pages with short descriptions.
- A card links once, through `href`. Don't add "Learn more" links inside cards.
- Card titles are in sentence case. Card descriptions are one sentence and don't repeat the title.

### Other components

- `<Steps>` for procedures where readers follow an order.
- `<Tabs>` for platform- or client-specific instructions (iOS / Android, Claude / Cursor / VS Code).
- `<AccordionGroup>` for long reference content and FAQs.
- `<Frame>` around every image, with a `caption` where helpful.
- `<Prompt description="...">` for AI prompts readers should copy. The description says what the prompt does. Don't repeat the prompt text elsewhere.
- `<DeveloperDemo path="..." />` from `/snippets/developer-demo.jsx` for demo pages. See [Developer demo callouts](#developer-demo-callouts).
- `<AppetizeEmbed iosEmbedCode="..." androidEmbedCode="..." />` from `/snippets/appetize-embed.jsx` for live simulators. Pass only the platforms you have.
- `<InstantPreviewCTAInline articleType="lovable" />` from `/snippets/instant-preview-cta-inline.jsx` on website builder pages. Always set `articleType` (`replit`, `lovable`, `base44`, `salesforce`, `bolt`).

### Diagrams

- Use Mermaid in a ` ```mermaid ` code block.
- Prefer `flowchart LR` to keep diagrams short. Use short node labels in sentence case.
- Keep code and JSON out of diagram nodes. Show them in a code block below the diagram.
- Don't hide a diagram that explains core behavior inside an accordion.
- To use brand colors, start the diagram with this line, and check the result in both light and dark mode in the preview:

```text
%%{init: {"theme": "base", "themeVariables": {"primaryColor": "#B5DAFF", "primaryTextColor": "#1A100B", "primaryBorderColor": "#1174D3", "secondaryColor": "#FEB9FF", "tertiaryColor": "#FFEFB4", "lineColor": "#7D7A77", "fontFamily": "DM Sans"}}}%%
```

### Tables

- Use Markdown tables, not HTML. Use an HTML table only when cells need vertical alignment.
- Split very wide tables. Prefer languages or items as rows and a few columns over many columns.

## Brand and visual identity

These rules apply to images, snippets, custom CSS, and anything else that shows the Median brand.

### Logo

- Use only the official logo files from the Median Brand Kit. Never recreate, recolor, rotate, stretch, outline, or add shadows, gradients, or other effects to the logo.
- Use the classic logo (dark text) on light backgrounds and the dark-background version (light text) on dark backgrounds. In `docs.json`, these are the `light` and `dark` logo and favicon entries.
- On a colored background or a photo, use the monochrome logo, or place the logo in a contained light or black box. Never put the full-color logo directly on a photo.
- The logo is never shorter than 24px on screen. Keep clear space around it at least as wide as one unit of the logomark grid.
- Use the logomark on its own only where space is square and small, such as the favicon or an app icon.
- For partner lockups, use the format `Median × Partner`, match the visual weight of both logos, and use each partner's official logo unchanged.

### Colors

Use only the brand palette. Don't introduce other colors, such as Tailwind's default greens, reds, or grays, in custom CSS, snippets, or inline styles. Mintlify's built-in callouts (`<Tip>`, `<Note>`, `<Warning>`, and so on) keep their default styling; don't override it.

| Name         | Base      | Darker                                                   | Lighter   |
| ------------ | --------- | -------------------------------------------------------- | --------- |
| Blue         | `#4299ED` | `#1174D3`                                                | `#B5DAFF` |
| Pink         | `#F567F0` | `#E93EE3`                                                | `#FEB9FF` |
| Yellow       | `#F7C406` | `#EFAC00`                                                | `#FFEFB4` |
| Median Black | `#1A100B` | `#0E0D08`                                                | `#181817` |
| Median White | `#F2F0EE` | Light gray `#E2DFDD`, medium `#B5B3B1`, darker `#7D7A77` |           |

Extra colors, for illustrations only: purple `#3F3EDF` and orange `#ED4F06`.

- Colored text on a white background uses **Darker Blue** (`#1174D3`). It's the only Base or Darker color that meets the WCAG AA contrast minimum for normal text on white (4.7:1). Don't use pink or yellow for text on light backgrounds.
- Colored text on a dark background uses the **Base** colors.
- For tinted backgrounds, such as badges or highlighted boxes, use the **Lighter** colors with Median Black text in light mode, and the **Base** colors with Median Black text in dark mode.
- Dark surfaces use Darker Black (`#0E0D08`) with Median White text.
- Keep at least one brand color in otherwise black-and-white compositions.

### Typography

- `docs.json` sets Questrial for headings and DM Sans for body text. Don't set fonts in MDX, snippets, or inline styles. The one exception is the Mermaid `init` line in [Diagrams](#diagrams), which sets DM Sans because Mermaid doesn't inherit the page font.
- Code uses Mintlify's monospace font.

### Icons

- The brand's icon system is IBM Carbon, which Mintlify can't load as a library. Use Font Awesome in the default `regular` (outline) style, which is closest to Carbon. Don't use the `solid`, `duotone`, or `sharp` styles for interface icons.
- Partner logos in cards are images, not icons.

### Images and screenshots

- Store images under `images/docs/docs/<feature>/`, for example `images/docs/docs/system-nav-bar/3button.png`, and reference them as `/images/docs/docs/<feature>/<file>`.
- Never reference `files.readme.io` or other ReadMe-hosted images. Download them into the repo.
- Every image needs descriptive `alt` text.
- Check that logos and screenshots are readable in both light and dark mode.

## Links

- Internal links are relative and include `/docs/`: `[Status bar](/docs/status-bar)`. Never use `https://docs.median.co/...` or `https://median.co/docs/...`.
- Never link to `median.readme.io`, `gonative.readme.io`, or `docs.median.co/discuss`.
- External links are regular Markdown links. Link to official docs (Apple, Google, Firebase) instead of copying details that change often, such as fees, regional rules, or device lists.

## `docs.json` navigation

- Top-level groups in a tab are section headings. **Never add `root` to a top-level group.** It makes the section collapse.
- Nested groups set `root` to their overview page, so clicking the group name opens it. **Don't also list the root page in `pages`**, or it appears twice.
- Each page appears in the navigation once.
- Group names are in sentence case, except for product and brand names.
- Hidden pages are left out of `navigation` (or placed in a group with `"hidden": true`). They're still built and reachable by URL.
- When renaming, merging, or removing a page, add a redirect to the `redirects` array.
- Use relative paths for internal links in `docs.json` (navbar, logo, redirects).

## MDX pitfalls that break the build

These have broken builds in this repo before. Check for them in every change.

- **Indented closing tags after a list.** A closing tag like `</Warning>` or `</Info>` indented directly under a list item is parsed as part of the list. Closing tags of callouts and snippet components (such as `</DeveloperDemo>`) always start at column 1.
- **Curly braces in text.** `{` and `}` outside code are parsed as JavaScript. Escape them (`\{ style: "x" \}`) or put the text in backticks. This applies inside `<Prompt>` and inside `<DeveloperDemo>` children too.
- **Code fences on one line.** Opening and closing ` ``` ` must each be on their own line.
- **Blank lines inside JSX** (for example inside `<video>` or between `<source>` tags) can turn content into Markdown paragraphs.
- **Unpaired backticks** and spaces inside code spans (`` `foo `bar ``) render incorrectly.
- **Duplicate headings** on a page create duplicate anchors. Make each heading unique.
- **Duplicate imports.** Importing the same snippet twice on one page fails the build. Keep one import per snippet at the top of the page.

## Validation

Before committing:

```bash
npx mint validate      # MDX parse errors and content checks
npx mint broken-links  # internal links
```

`mint validate` catches closing tags that break the build. To find closing tags indented directly under a list item, check the lines just before them rather than every indented tag, because tags indented inside components such as `<Steps>` are valid.

## Content boundaries

- Don't commit secrets, API keys, customer names or data, discount codes, or review incentives. The repository and its history are public, even for hidden pages.
- Don't invent App Studio menu paths, setting names, default values, or plugin behavior. If something isn't confirmed by an existing page or the user, add it as an open question for the user instead of guessing.
- Don't invent prices, plan names, guarantees, or service terms. Link to the pricing page instead of copying prices.
- Don't document internal tools or the private release notes sync repository.
- Don't change the logo, brand colors, or fonts. Those come from the Median Brand Kit.
- When a change affects behavior described on other pages (for example a parameter like `persist`), find and update those pages in the same change.
