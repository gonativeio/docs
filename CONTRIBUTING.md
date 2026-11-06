# Median docs contributing guide

Thank you for taking the time to help improve the Median documentation!

Read the [Code of Conduct](#code-of-conduct) at the end of this guide to help keep our community welcoming and respectful.

## Contribution types

We accept:

- Technical corrections, such as wrong steps, outdated App Studio paths, or code samples that don't work
- Typo and grammar fixes
- Missing information about existing Median features and plugins
- Clearer explanations, when the current wording is confusing or incomplete
- New content that fills an important gap, such as a common integration or use case

We don't accept:

- Edits purely for tone or personal style preference
- Documentation for features that don't exist in Median, or that you'd like Median to build
- Promotional content, such as links to your own products or services
- Changes to the site's design, navigation, or configuration (`docs.json`, `snippets/`)
- Edits to `docs/changelog.mdx` or `docs/changelog-archive.mdx`. These pages are generated automatically, so changes are overwritten.

These are general guidelines. If you're not sure whether your change fits, open an issue to discuss it with us first.

## Writing style

Follow the writing standards in [`AGENTS.md`](AGENTS.md). In short:

- **Clarity and simplicity:** Our documentation must be easy to read for people and AI tools.
- **Active voice and second person:** Address the reader as "you" and use active voice wherever possible.
- **Meaning over grammar:** Clear meaning is more important than following every grammar rule.
- **Inclusive and accessible language:** Our docs are read by people around the world. Avoid slang, jargon, and idioms. Don't assume ability level or prior context.
- **Median terminology:** Use the terms in `AGENTS.md`, such as "App Studio" and "JavaScript Bridge."

## Issues

- Search [existing issues](https://github.com/gonativeio/docs/issues) before creating a new one.
- This repository is only for documentation issues. You can also report a problem with the **Raise issue** button on any docs page.
  - For help with your app, account, or builds, [contact Median support](https://median.co/contact).
  - For feature requests or product bugs, [contact Median support](https://median.co/contact).
  - To report a security vulnerability, don't open an issue. Email [solutions@median.co](mailto:solutions@median.co) instead.
- For new pages or large changes, open an issue describing your proposed change before creating a pull request. Small fixes, such as typos, can go straight to a pull request.

**This repository is public.** Don't include API keys, license keys, private app URLs, customer data, or other sensitive information in issues or pull requests.

## Pull requests

- Link your pull request to the related issue, if there is one.
- Keep each pull request focused on one change or issue.
- Preview your changes locally with `mint dev`, and run `mint validate` and `mint broken-links` before submitting. See the [README](README.md#local-development) for setup.
- Fill out the pull request template, including how you tested your change.

By submitting a contribution, you agree that it can be used and published as part of the Median documentation, as described in the [`LICENSE`](LICENSE).

## Reviews

- A member of the Median team will review your pull request and either request changes, approve and merge it, or close it with an explanation of why it won't be accepted.
- We can't commit to a specific turnaround time, but we make our best effort to respond to all contributors in a timely manner.
- Don't tag individual Median staff or other contributors for review unless they've asked you to. Tagging people inappropriately on issues or pull requests can violate our Code of Conduct.

## Using AI

You can use AI tools to help you write issues and pull requests. AI tools such as Claude Code, Cursor, and Windsurf read [`AGENTS.md`](AGENTS.md) automatically, so their output follows our writing standards.

You're responsible for everything you submit, whether or not you used AI:

- Check that steps, App Studio paths, and code samples are correct, ideally by testing them in a Median app.
- Review AI-generated text before submitting. Pull requests with obvious errors or invented features will be closed.
- Don't submit large numbers of automated changes at once. Keep the same focus as any other pull request.

## Code of Conduct

### Our pledge

We pledge to make our community welcoming, safe, and equitable for all.

We are committed to fostering an environment that respects and promotes the dignity, rights, and contributions of all individuals, regardless of characteristics including race, ethnicity, caste, color, age, physical characteristics, neurodiversity, disability, sex or gender, gender identity or expression, sexual orientation, language, philosophy or religion, national or social origin, socio-economic position, level of education, or other status. The same privileges of participation are extended to everyone who participates in good faith and in accordance with this Covenant.

### Encouraged behaviors

While acknowledging differences in social norms, we all strive to meet our community's expectations for positive behavior. We also understand that our words and actions may be interpreted differently than we intend based on culture, background, or native language.

With these considerations in mind, we agree to behave mindfully toward each other and act in ways that center our shared values, including:

1. Respecting the **purpose of our community**, our activities, and our ways of gathering.
2. Engaging **kindly and honestly** with others.
3. Respecting **different viewpoints** and experiences.
4. **Taking responsibility** for our actions and contributions.
5. Gracefully giving and accepting **constructive feedback**.
6. Committing to **repairing harm** when it occurs.
7. Behaving in other ways that promote and sustain the **well-being of our community**.

### Restricted behaviors

We agree to restrict the following behaviors in our community. Instances, threats, and promotion of these behaviors are violations of this Code of Conduct.

1. **Harassment.** Violating explicitly expressed boundaries or engaging in unnecessary personal attention after any clear request to stop.
2. **Character attacks.** Making insulting, demeaning, or pejorative comments directed at a community member or group of people.
3. **Stereotyping or discrimination.** Characterizing anyone's personality or behavior on the basis of immutable identities or traits.
4. **Sexualization.** Behaving in a way that would generally be considered inappropriately intimate in the context or purpose of the community.
5. **Violating confidentiality.** Sharing or acting on someone's personal or private information without their permission.
6. **Endangerment.** Causing, encouraging, or threatening violence or other harm toward any person or group.
7. Behaving in other ways that **threaten the well-being** of our community.

#### Other restrictions

1. **Misleading identity.** Impersonating someone else for any reason, or pretending to be someone else to evade enforcement actions.
2. **Failing to credit sources.** Not properly crediting the sources of content you contribute.
3. **Promotional materials.** Sharing marketing or other commercial content in a way that is outside the norms of the community.
4. **Irresponsible communication.** Failing to responsibly present content which includes, links, or describes any other restricted behaviors.

### Reporting an issue

Tensions can occur between community members even when they are trying their best to collaborate. Not every conflict represents a code of conduct violation, and this Code of Conduct reinforces encouraged behaviors and norms that can help avoid conflicts and minimize harm.

When an incident does occur, it is important to report it promptly. To report a possible violation, email [solutions@median.co](mailto:solutions@median.co).

We take reports of violations seriously and will make every effort to respond in a timely manner. We will investigate all reports of code of conduct violations, reviewing messages, logs, and recordings, or interviewing witnesses and other participants. We will keep investigation and enforcement actions as transparent as possible while prioritizing safety and confidentiality. In order to honor these values, enforcement actions are carried out in private with the involved parties, but communicating to the whole community may be part of a mutually agreed upon resolution.

### Addressing and repairing harm

If this Code of Conduct is violated, the following enforcement ladder may be used to determine how best to repair harm, based on the incident's impact on the individuals involved and the community as a whole. Depending on the severity of a violation, lower rungs on the ladder may be skipped.

1. **Warning**
   - Event: A violation involving a single incident or series of incidents.
   - Consequence: A private, written warning from the Median team.
   - Repair: Examples of repair include a private written apology, acknowledgement of responsibility, and seeking clarification on expectations.
2. **Temporarily limited activities**
   - Event: A repeated incidence of a violation that previously resulted in a warning, or the first incidence of a more serious violation.
   - Consequence: A private, written warning with a time-limited cooldown period designed to underscore the seriousness of the situation and give the community members involved time to process the incident. The cooldown period may be limited to particular communication channels or interactions with particular community members.
   - Repair: Examples of repair may include making an apology, using the cooldown period to reflect on actions and impact, and being thoughtful about re-entering community spaces after the period is over.
3. **Temporary suspension**
   - Event: A pattern of repeated violation which the Median team has tried to address with warnings, or a single serious violation.
   - Consequence: A private written warning with conditions for return from suspension. In general, temporary suspensions give the person being suspended time to reflect upon their behavior and possible corrective actions.
   - Repair: Examples of repair include respecting the spirit of the suspension, meeting the specified conditions for return, and being thoughtful about how to reintegrate with the community when the suspension is lifted.
4. **Permanent ban**
   - Event: A pattern of repeated code of conduct violations that other steps on the ladder have failed to resolve, or a violation so serious that the Median team determines there is no way to keep the community safe with this person as a member.
   - Consequence: Access to all community spaces, tools, and communication channels is removed. In general, permanent bans should be rarely used, should have strong reasoning behind them, and should only be resorted to if working through other remedies has failed to change the behavior.
   - Repair: There is no possible repair in cases of this severity.

This enforcement ladder is intended as a guideline. It does not limit the ability of the Median team to use their discretion and judgment, in keeping with the best interests of our community.

### Attribution

This Code of Conduct is adapted from the Contributor Covenant, version 3.0, permanently available at [https://www.contributor-covenant.org/version/3/0/](https://www.contributor-covenant.org/version/3/0/).

Contributor Covenant is stewarded by the Organization for Ethical Source and licensed under CC BY-SA 4.0. To view a copy of this license, visit [https://creativecommons.org/licenses/by-sa/4.0/](https://creativecommons.org/licenses/by-sa/4.0/).

For answers to common questions about Contributor Covenant, see the FAQ at [https://www.contributor-covenant.org/faq](https://www.contributor-covenant.org/faq). Translations are provided at [https://www.contributor-covenant.org/translations](https://www.contributor-covenant.org/translations). Additional enforcement and community guideline resources can be found at [https://www.contributor-covenant.org/resources](https://www.contributor-covenant.org/resources). The enforcement ladder was inspired by the work of [Mozilla's code of conduct team](https://github.com/mozilla/inclusion).
