/**
 * DeveloperDemo
 * Standard callout pointing developers to a prebuilt median.dev demo page
 * they can load inside their Median app to test a native feature.
 *
 * Usage:
 *   import { DeveloperDemo } from "/snippets/developer-demo.jsx";
 *
 *   <DeveloperDemo feature="AdMob" path="admob" />
 *
 *   <DeveloperDemo feature="Deep Linking" path="deep-linking">
 *     After setup, check your configuration with the [Deep Linking Validator](/docs/deep-linking-validator).
 *   </DeveloperDemo>
 *
 * Props:
 *   feature   (required) Feature name shown in the copy, e.g. "AdMob".
 *   path      Slug on median.dev, e.g. "age-safety". Slashes are normalized.
 *   url       Full URL override, for demos hosted somewhere other than median.dev.
 *   showNote  Show the "works only inside a Median app" note. Default: true.
 *   children  Optional extra content, e.g. a follow-up validation step.
 */
export const DeveloperDemo = ({
  feature,
  path,
  url,
  showNote = true,
  children,
}) => {
  const slug = String(path || "").replace(/^\/+|\/+$/g, "");
  const href = url || `https://median.dev/${slug}/`;
  const label = href.replace(/^https?:\/\//, "");

  return (
    <Tip>
      <p>
        <strong>Test {feature} with our demo page</strong>
      </p>
      <p>
        We host a ready-made demo page at{" "}
        <a href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>{" "}
        that calls the {feature} features through the Median JavaScript Bridge.
        Load it inside your Median app during development, either by setting it
        as your app's website URL in App Studio or by navigating to it from your
        own site, and use it to confirm {feature} works on a real device before
        you add it to your own pages.
      </p>
      {showNote && (
        <p>
          The demo page only works inside a Median app with {feature} enabled.
          Opened in a regular mobile or desktop browser, the native features
          won't respond. Remember to switch your app back to your own URL before
          release.
        </p>
      )}
      {children}
    </Tip>
  );
};
