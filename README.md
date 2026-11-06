# Median documentation

Source for the [Median.co documentation](https://docs.median.co), built with [Mintlify](https://mintlify.com).

Median turns websites and web apps into native iOS and Android apps. These docs cover building, configuring, and publishing apps with the Median App Studio, the JavaScript Bridge, and Native Plugins.

## Found a problem?

- **Errors in the docs:** use the **Raise issue** button on any docs page, or [open an issue](https://github.com/gonativeio/docs/issues) in this repository.
- **Help with your app:** contact [Median support](https://docs.median.co/docs/support). Issues in this repository are only for documentation.

## Repository structure

| Path        | Contents                                                                                                       |
| ----------- | -------------------------------------------------------------------------------------------------------------- |
| `docs/`     | Documentation pages (MDX). A page's path is its URL, so `docs/status-bar.mdx` is served at `/docs/status-bar`. |
| `docs.json` | Site configuration: navigation, navbar, footer, and redirects                                                  |
| `snippets/` | Reusable components, such as `MedianLogo` and `AppetizeEmbed`                                                  |
| `images/`   | Images used in the docs                                                                                        |
| `styles/`   | Vale configuration and accepted vocabulary                                                                     |
| `AGENTS.md` | Writing standards, component patterns, and rules for contributors and AI tools                                 |

`docs/changelog.mdx` and `docs/changelog-archive.mdx` are generated automatically every day. Don't edit them in this repository, because changes are overwritten on the next sync.

## Writing guidelines

Read [`AGENTS.md`](AGENTS.md) before contributing. It covers terminology, style, page structure, components, `docs.json` navigation rules, and common MDX errors that break the build.

### AI-assisted writing

AI coding tools such as Claude Code, Cursor, and Windsurf read `AGENTS.md` automatically. To also give them Mintlify's component reference and writing guidance, install the Mintlify skill:

```bash
npx skills add https://mintlify.com/docs
```

## Local development

1. Install the [Mintlify CLI](https://www.npmjs.com/package/mint):

   ```bash
   npm i -g mint
   ```

2. From the repository root, where `docs.json` is located, start the preview:

   ```bash
   mint dev
   ```

3. Open `http://localhost:3000`.

### Check your changes

Run these before opening a pull request:

```bash
mint validate       # MDX errors and content checks
mint broken-links   # broken internal links
```

Vale also checks spelling and style on pull requests. Add product names and technical terms it doesn't recognize to `styles/config/vocabularies/Mintlify/accept.txt`, one per line.

### Troubleshooting

- **The preview doesn't start:** run `mint update` to get the latest version of the CLI.
- **A page shows a 404:** make sure you're running `mint dev` from the repository root, and that the page is listed in `docs.json` or that you're opening its exact path.
- **The build fails with "Expected the closing tag":** a closing tag such as `</Warning>` is indented under a list item. Move it to the start of the line.

## Publishing

Changes merged into `main` are deployed to [docs.median.co](https://docs.median.co) by Mintlify. Open a pull request to get a preview deployment before merging.

## License

The documentation content, including text, images, and the Median name and logo, is GoNative.io LLC dba Median.co. All rights reserved. Code samples in the documentation are available under the MIT License, so you can use them in your own apps. See [`LICENSE`](LICENSE) for details.

## Resources

- [Median.co](https://median.co)
- [Mintlify documentation](https://mintlify.com/docs)
