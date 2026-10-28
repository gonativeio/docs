export const PublishingGuide = () => {
  const ACCENT = "#3F3EDF";
  const STORAGE_KEY = "median-publishing-wizard";
  const MEDIAN_LOGO = "https://static.median.co/img/median-co-light.181cafc2b3.svg";
  const SHOW_GOOGLE = true;

  const readStore = () => {
    try {
      return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
    } catch (err) {
      return {};
    }
  };

  const stored = readStore();
  const [platform, setPlatform] = useState(
    SHOW_GOOGLE && stored.platform === "google" ? "google" : "apple"
  );
  const [step, setStep] = useState(typeof stored.step === "number" ? stored.step : 0);
  const [lightbox, setLightbox] = useState(null);

  const ExtLink = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: ACCENT, fontWeight: 600, textDecoration: "underline" }}
    >
      {children}
      <i
        className="fa fa-external-link"
        aria-hidden="true"
        style={{ paddingLeft: "5px" }}
      />
    </a>
  );

  const FileCode = ({ children }) => (
    <code
      style={{
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        fontSize: "0.92em",
        background: "#f3f4f6",
        border: "1px solid #e5e7eb",
        borderRadius: "4px",
        padding: "1px 5px",
      }}
    >
      {children}
    </code>
  );

  const ZoomImage = ({ src, alt, caption }) => (
    <div style={{ marginTop: caption ? "12px" : "12px", marginBottom: "8px" }}>
      <button
        type="button"
        onClick={() => setLightbox({ src, alt, caption })}
        aria-label={"View larger image: " + (alt || "screenshot")}
        style={{
          display: "block",
          width: "100%",
          maxWidth: "720px",
          padding: 0,
          border: "none",
          background: "transparent",
          cursor: "zoom-in",
        }}
      >
        <img
          src={src}
          alt={alt || ""}
          style={{
            display: "block",
            width: "100%",
            maxWidth: "720px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
          }}
        />
      </button>
      {caption ? (
        <div
          style={{
            marginTop: "8px",
            fontSize: "13px",
            color: "#6b7280",
            fontWeight: 600,
          }}
        >
          {caption}
        </div>
      ) : null}
    </div>
  );

  const appleSelf = [
    {
      nav: "Getting started",
      title: "Getting started",
      intro: "Before you begin, make sure you have the following:",
      bullets: [
        <span key="gs1">
          An{" "}
          <ExtLink href="https://developer.apple.com/programs/enroll">
            Apple Developer Program
          </ExtLink>{" "}
          account ($99/year). If you already have one, you can continue.
        </span>,
        <span key="gs2">
          Access to{" "}
          <ExtLink href="https://appstoreconnect.apple.com/">App Store Connect</ExtLink>
          {" "}with permission to create API keys (Users and Access).
        </span>,
        <span key="gs3">
          Access to the{" "}
          <ExtLink href="https://median.co/organization">Median App Studio</ExtLink>.
        </span>,
      ],
      tip: "You do not need a Mac, Xcode, or Apple Transporter.",
    },
    {
      nav: "Create API Key",
      title: "Create API Key",
      bullets: [
        <span key="c1">
          In{" "}
          <ExtLink href="https://appstoreconnect.apple.com/">App Store Connect</ExtLink>
          , click Users and Access.
        </span>,
        "Click the Integrations tab.",
        "Click + to create a new API key, then enter a key name and choose an access role.",
        <span key="c6">
          Click Download to save the <FileCode>.p8</FileCode> file.
        </span>,
        "Copy and note your Issuer ID.",
        "Copy and note your Key ID.",
      ],
      image:
        "https://files.readme.io/e7d5dd9f26d2c716bc2e480fd7ceb585ddb3cd7b5c9fe77912dd585eed110500-image.png",
      imageCaption:
        "App Store Connect Dashboard - Generate App Store Connect API Key",
      tip: "Make sure you save a backup of your key in a secure place. API keys can be downloaded only once.",
    },
    {
      nav: "Connect App Store Integration",
      title: "Connect App Store Integration",
      bullets: [
        <span key="u1">
          Go to{" "}
          <ExtLink href="https://median.co/organization">Organization</ExtLink>
          {" "}and then open the App Store Connect page.
        </span>,
        "Enter your Issuer ID and Key ID from Step 2.",
        <span key="u3">
          Upload your Private Key (<FileCode>.p8</FileCode>) file from Step 2 and click
          Connect.
        </span>,
      ],
      imagesAfterBullet: {
        0: {
          image:
            "https://files.readme.io/f42f815a4109ed71fa54f3d451b9c5f6451a01dcc39625da3be95ea3947a22f2-image.png",
          caption: "App Studi - Connect App Store Connect Integration",
        },
      },
    },
    {
      nav: "Register your Bundle ID",
      title: "Register your Bundle ID",
      bullets: [
        <span key="bid1">
          Open your app in the{" "}
          <ExtLink href="https://median.co/organization">App Studio</ExtLink> and head
          to the Build &amp; Deploy page.
        </span>,
        "Click Configure on the iOS IPA row.",
        "The Apple Developer API Connection row should show a Connected status. Review Steps 2 and 3 if it doesn't.",
        "Under Bundle ID & App Store Connect App, click Register Bundle ID Automatically. Note your bundle id, you need it in the next step.",
      ],
      imagesAfterBullet: {
        3: {
          image:
            "https://files.readme.io/9c6df70fc1b38fcb42402f52b81cacbea0f35c74101228dcf43bc1370b4c9640-image.png",
          caption: "App Studio - Register Bundle ID",
        },
      },
    },
    {
      nav: "Create App in App Store Connect",
      title: "Create App in App Store Connect",
      bullets: [
        <span key="a4">
          In your{" "}
          <ExtLink href="https://appstoreconnect.apple.com/">
            App Store Connect Dashboard
          </ExtLink>
          , click + next to Apps and choose New App.
        </span>,
        "Fill the form: Choose iOS, enter the app name and primary language, and use the same Bundle ID in the App Studio.",
        <span key="a7">
          Confirm the new app appears in{" "}
          <ExtLink href="https://appstoreconnect.apple.com/">App Store Connect</ExtLink>.
        </span>,
      ],
      imagesAfterBullet: {
        2: {
          image:
            "https://files.readme.io/de427a494654ca82f1b886d894c3ab8409949fae5e59ffcf0a08b2f38738ce12-image.png",
          caption: "App Store Connect - Create a new app",
        },
      },
    },
    {
      nav: "Configure signing and upload",
      title: "Configure signing and upload",
      bullets: [
        <span key="s1">
          Return to the Build &amp; Deploy section in the{" "}
          <ExtLink href="https://median.co/organization">App Studio</ExtLink>.
        </span>,
        "Click Configure on the iOS IPA row.",
        "Under the Automatic (API) tab, confirm Create App Record has a Connected label. If it doesn't, click Verify Bundle ID and App Record.",
        "Set Signing & Upload settings to Distribution Profile.",
        "Configure Upload to App Store Connect to Automatic or Manual. On Automatic, App Studio automatically uploads successful iOS Distribution builds to App Store Connect after build completion.",
        <span key="s6">
          Click the Rebuild button on the iOS IPA row to start an iOS IPA build. Wait
          for Apple to process the build in{" "}
          <ExtLink href="https://appstoreconnect.apple.com/">App Store Connect</ExtLink>{" "}
          (often 15 to 30 minutes).
        </span>,
        <span key="s7">
          Open your app in{" "}
          <ExtLink href="https://appstoreconnect.apple.com/">App Store Connect</ExtLink>
          , check the TestFlight tab for the build.
        </span>,
      ],
      imagesAfterBullet: {
        5: {
          image:
            "https://files.readme.io/d3fd655d762724258ce15e2eacb620211c3de42df890fc10551454c4fb05368b-image.png",
          caption: "App Studio - Configure signing and upload",
        },
      },
      tip: "Use Development Profile in the Signing & Upload settings to test your app on devices outside of App Store Connect and TestFlight.",
    },
    {
      nav: "Register your iOS test device",
      title: "Register your iOS test device",
      bullets: [
        <span key="t1">
          In the{" "}
          <ExtLink href="https://median.co/organization">App Studio</ExtLink>, open
          the iOS Testers page.
        </span>,
        "Click Add iOS Tester.",
        <span key="t3">
          A device UDID is required for enrollment. You can either:
          <ul
            style={{
              margin: "8px 0 0",
              paddingLeft: "22px",
              listStyleType: "disc",
            }}
          >
            <li style={{ marginBottom: "4px" }}>
              Send an email invite and complete the steps in the email.
            </li>
            <li style={{ marginBottom: "4px" }}>Enter the UDID manually.</li>
          </ul>
          For more information on how the iOS Testers feature works, reference this{" "}
          <ExtLink href="https://docs.median.co/docs/registering-testing-devices">
            article
          </ExtLink>
          .
        </span>,
      ],
      imagesAfterBullet: {
        1: {
          image:
            "https://files.readme.io/f2ae61d0d97315f8a758d49c0ce6c8abe9ebec6258951db744a954e363d5e601-image.png",
          caption: "App Studio - Add iOS Testers",
        },
      },
      tip: (
        <span>
          After you add your device, rebuild the app in the Build &amp; Deploy
          section of the{" "}
          <ExtLink href="https://median.co/organization">App Studio</ExtLink>.
          Existing builds do not include newly registered devices.
        </span>
      ),
    },
    {
      nav: "Test your build",
      title: "Test your build",
      bullets: [
        <span key="tf1">
          Choose how you want to test your iOS build:
          <ul
            style={{
              margin: "8px 0 0",
              paddingLeft: "22px",
              listStyleType: "disc",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>TestFlight (recommended):</strong> In{" "}
              <ExtLink href="https://appstoreconnect.apple.com/">
                App Store Connect
              </ExtLink>
              , go to your app and go to the TestFlight tab, create an Internal Testing
              group and add testers. Each tester receives an email invite and installs
              the build with the TestFlight app on a physical iPhone. Full walkthrough:{" "}
              <ExtLink href="https://docs.median.co/docs/upload-ios-to-testflight">
                Upload iOS to TestFlight
              </ExtLink>
              .
            </li>
            <li style={{ marginBottom: "4px" }}>
              <strong>Local Xcode build (optional):</strong> If you have a Mac and want
              to run or archive the app locally, follow{" "}
              <ExtLink href="https://docs.median.co/docs/build-ios-from-source">
                Build iOS from Source
              </ExtLink>
              .
            </li>
          </ul>
        </span>,
        "Test your native navigation, native features like face id/touch id and haptic feedback, and core user flows such as user onboarding.",
      ],
      tip: "TestFlight builds expire after 90 days. Upload a new build to keep testing.",
    },
    {
      nav: "Complete the App Store listing",
      title: "Complete the App Store listing",
      bullets: [
        <span key="list1">
          Complete the App listing form in the Distribution Tab of your app in{" "}
          <ExtLink href="https://appstoreconnect.apple.com/">App Store Connect</ExtLink>
          . Prepare this information:
          <ul
            style={{
              margin: "8px 0 0",
              paddingLeft: "22px",
              listStyleType: "disc",
            }}
          >
            <li style={{ marginBottom: "4px" }}>
              App name, subtitle (up to 30 characters), description, and keywords
              (100 characters total)
            </li>
            <li style={{ marginBottom: "4px" }}>Primary category (secondary optional)</li>
            <li style={{ marginBottom: "4px" }}>
              Support URL (required) and Marketing URL (optional)
            </li>
            <li style={{ marginBottom: "4px" }}>
              Privacy Policy URL and App Privacy declarations that match your app
            </li>
            <li style={{ marginBottom: "4px" }}>
              Age rating questionnaire and content rights answers
            </li>
            <li style={{ marginBottom: "4px" }}>
              App Review contact info; if the app has login, include working demo
              username and password
            </li>
            <li style={{ marginBottom: "4px" }}>
              Compliance answers (cryptography, advertising identifier, third-party
              content)
            </li>
            <li style={{ marginBottom: "4px" }}>
              Screenshots for required sizes. Include
              6.9-inch iPhone and 13-inch iPad screenshots (JPEG or PNG)
            </li>
          </ul>
        </span>,
        <span key="list2">
          For listing and screenshot requirements, see{" "}
          <ExtLink href="https://docs.median.co/docs/apple-app-store">
            Apple App Store
          </ExtLink>
          . For name, subtitle, keywords, description, and screenshot best practices,
          see{" "}
          <ExtLink href="https://docs.median.co/docs/app-marketing-growth">
            App Marketing &amp; Growth
          </ExtLink>
          .
        </span>,
      ],
      tip: "Lead the description with benefits in the first 3 lines, and use 5-8 screenshots that show core native flows, not only a dense website homepage.",
    },
    {
      nav: "Submit for App Review",
      title: "Submit for App Review",
      bullets: [
        "Double-check every section for accuracy and completeness.",
        "Click Submit for Review.",
      ],
    },
  ];

  const googleSelf = [
    {
      nav: "Getting started",
      title: "Getting started",
      intro: "Before you begin, make sure you have the following:",
      bullets: [
        <span key="gs1">
          Access to the{" "}
          <ExtLink href="https://median.co/organization">Median App Studio</ExtLink>.
        </span>,
        <span key="gs2">
          A Google Play Developer account:
          <ol
            style={{
              margin: "8px 0 0",
              paddingLeft: "22px",
              listStyleType: "lower-alpha",
            }}
          >
            <li style={{ marginBottom: "4px" }}>
              Sign up at the{" "}
              <ExtLink href="https://play.google.com/apps/publish/signup">
                Google Play Developer signup
              </ExtLink>{" "}
              ($25 one-time).
            </li>
            <li style={{ marginBottom: "4px" }}>
              Complete identity verification if Google requests it.
            </li>
            <li style={{ marginBottom: "4px" }}>
              Confirm you can open{" "}
              <ExtLink href="https://play.google.com/console">Play Console</ExtLink>{" "}
              and see the Create app button.
            </li>
          </ol>
        </span>,
      ],
    },
    {
      nav: "Copy Package name and download AAB",
      title: "Copy Package name and download AAB",
      bullets: [
        <span key="p1">
          In the{" "}
          <ExtLink href="https://median.co/organization">App Studio</ExtLink>
          , open the Build &amp; Deploy page.
        </span>,
        "In the App Identifiers section, set an Android Package Name or copy the existing one.",
        <span key="p3">
          Download your Android <FileCode>.aab</FileCode> file. You’ll need it for the
          next step.
        </span>,
      ],
      imagesAfterBullet: {
        2: {
          image:
            "https://files.readme.io/8abd451378263b4903ee3edf364973bcae17aa79378659ca787c7e24491dc5fc-image.png",
          caption: "App Studio - Copy package name and download AAB file",
        },
      },
      tip: "This value appears in the Play Store URL and cannot be changed after you publish.",
    },
    {
      nav: "Create an app in Play Console",
      title: "Create an app in Play Console",
      bullets: [
        <span key="c1">
          In{" "}
          <ExtLink href="https://play.google.com/console">Play Console</ExtLink>
          , click Create app.
        </span>,
        "Enter the app name, default language, App or Game, and Free or Paid.",
        "Accept the declarations, and click the Create app button.",
      ],
      imagesAfterBullet: {
        0: {
          image:
            "https://files.readme.io/98c3b510268525fb8cc364700dfee886988e340559c99675ee7123f5c80db535-image.png",
          caption: "Play Console - Create an app",
        },
      },
    },
    {
      nav: "Finish Setting Up Your App",
      title: "Finish Setting Up Your App",
      intro:
        "In your app’s dashboard under Set up your app, click View tasks and complete the following tasks.",
      introImage:
        "https://files.readme.io/caa8819fefe73998ccc1f987f6dc1ef16065d6969e33f641d3eaaafaf255d635-image.png",
      introImageCaption: "Play Console - Set up your app",
      sections: [
        {
          title: "Let us know about the content of your app",
          bullets: [
            "Set Privacy Policy: paste your valid privacy-policy URL.",
            "App access (if applicable): If your app requires login or special access (e.g. paid subscription, sign-in), provide test login credentials for reviewers and clear login instructions.",
            "Ads: Declare whether your app contains ads or in-app purchases.",
            "Content Rating: Fill out the content-rating questionnaire; this determines how your app is rated globally (by the IARC) and ensures you are not listed as “Unrated” (which can cause removal).",
            "Target Audience / Age Rating: Specify the age group (e.g. 13+, children, adults, etc.). If your app targets children, comply with families/child-safe policies.",
            "Data Safety Form: Declare what data the app collects, uses or shares; ensure this matches your privacy policy and actual behavior.",
            "Government App: Answer whether your app is operated by or for a government entity.",
            "Financial Features: Declare if your app provides banking, payments, trading, or other financial services. If not, select “No.”",
            "Health: Indicate whether your app handles health or medical data. If not, select “No.”",
          ],
        },
        {
          title: "App Categorization & Presentation",
          bullets: [
            "Choose your app’s category (e.g. “Productivity”, “Lifestyle”, “Games” etc.).",
            "Add up to 5 keywords / tags describing your app’s main features/functions (helps discoverability).",
            "Enter a valid contact/support email for users (and for Google, if needed).",
          ],
        },
        {
          title: "Description & Visuals",
          bullets: [
            "Enter a short and full description of your app.",
            "Upload your app icon (512 × 512 px, PNG or JPEG, under 1024 KB).",
            "Upload your Feature Graphic (1024 × 500 px, no transparency, under 1 MB).",
            <span key="dv4">
              Upload your screenshots - at least 2 per major device type (e.g. phone,
              tablet). Screenshot requirements:
              <ul
                style={{
                  margin: "8px 0 0",
                  paddingLeft: "22px",
                  listStyleType: "disc",
                }}
              >
                <li style={{ marginBottom: "4px" }}>
                  JPEG or PNG without transparency
                </li>
                <li style={{ marginBottom: "4px" }}>Minimum size of 320 px</li>
                <li style={{ marginBottom: "4px" }}>Maximum size of 3840 px</li>
                <li style={{ marginBottom: "4px" }}>
                  Maximum size should be no more than two times the minimum size
                </li>
              </ul>
            </span>,
          ],
        },
      ],
      tip: (
        <span>
          Median provides a collection of over 500 free screenshot templates designed
          for both Android and iOS applications. To browse and download the templates,
          visit{" "}
          <ExtLink href="https://www.figma.com/community/file/1471925742378558731/500-app-store-screenshot-templates-for-android-and-ios-apps">
            App store screenshot templates
          </ExtLink>
          .
        </span>
      ),
    },
    {
      nav: "Testing your app",
      title: "Testing your app",
      intro:
        "To test your app, head over to the Test and release section in the app’s dashboard and choose a testing phase.",
      introImage:
        "https://files.readme.io/8c16914f34ac5fb56c32db57a0707b10cd1eaa46d560eee7187d0dd22f09eac4-image.png",
      introImageCaption: "Play Console - Test your app",
      sections: [
        {
          title: "Internal Testing",
          bullets: [
            "Go to Play Console → Testing → Internal testing.",
            "Create a new internal test track (give it a descriptive name).",
            "Select testers: Add individual emails, a Google Group, or a CSV list.",
            <span key="it4">
              Create a new release: Upload your <FileCode>.aab</FileCode> (Android App
              Bundle) file.
            </span>,
            "Review & Save: Confirm the release details, testers, and uploaded files.",
            "Start Rollout: Click “Review release” → “Start rollout to internal testers”.",
            "Testers receive an email: They can install the app via the Play Store internal testing link.",
            "Collect feedback & crash reports.",
          ],
        },
        {
          title: "Closed testing",
          bullets: [
            "Go to Play Console → Testing → Closed testing.",
            "Create a closed test track: give it a descriptive name.",
            "Add testers: Use emails, Google Groups, or a link that testers can join. For new developer accounts, at least 12-20 testers may be required for 14 days before production release.",
            <span key="ct4">
              Create a release: Upload your <FileCode>.aab</FileCode> file with the
              bundle name from App Studio and add release notes for testers.
            </span>,
            "Review & start rollout: Click “Review release → Start rollout to closed testers”.",
          ],
        },
      ],
      tip: (
        <span>
          For testing locally outside of Play Console, please reference{" "}
          <ExtLink href="https://docs.median.co/docs/android-build-deployment">
            Android Build &amp; Deployment
          </ExtLink>
          .
        </span>
      ),
    },
    {
      nav: "Promote to Production (Public Launch)",
      title: "Promote to Production (Public Launch)",
      bullets: [
        "Once testing is done (or skipped if acceptable), head over to the Test & Release section.",
        "Click Production.",
        "Head over to the Releases tab.",
        "Click Create new Release.",
        <span key="pr5">
          Upload the <FileCode>.aab</FileCode> file downloaded in Step 2.
        </span>,
        "Confirm all store listing, privacy, and compliance information.",
        "Select countries/regions for distribution.",
        "Add release notes for public users.",
        "Submit for Google review. Once approved, your app goes live on Google Play.",
      ],
      imagesAfterBullet: {
        3: {
          image:
            "https://files.readme.io/2ae6f101cf9e3cfcc4793da7590ea430ca1454a9da709d2cd64091569f5d91e1-image.png",
          caption: "Play Console - Create new release",
        },
      },
    },
  ];

  const steps = platform === "google" ? googleSelf : appleSelf;

  const safeStep = Math.min(step, steps.length - 1);
  const current = steps[safeStep];
  const progress = Math.round(((safeStep + 1) / steps.length) * 100);
  const isFirst = safeStep === 0;
  const isLast = safeStep === steps.length - 1;

  useEffect(() => {
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ platform, step: safeStep })
      );
    } catch (err) {
      return;
    }
  }, [platform, safeStep]);

  useEffect(() => {
    if (step !== safeStep) setStep(safeStep);
  }, [step, safeStep]);

  useEffect(() => {
    const onJump = (event) => {
      const detail = (event && event.detail) || {};
      if (detail.platform) {
        if (detail.platform === "google" && !SHOW_GOOGLE) setPlatform("apple");
        else setPlatform(detail.platform);
      }
      if (typeof detail.step === "number") setStep(detail.step);
    };
    window.addEventListener("median-publishing-jump", onJump);
    return () => window.removeEventListener("median-publishing-jump", onJump);
  }, []);

  useEffect(() => {
    setLightbox(null);
  }, [safeStep, platform]);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const resetTo = (nextPlatform) => {
    setPlatform(nextPlatform);
    setStep(0);
  };

  const goBack = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setStep((currentStep) => Math.max(currentStep - 1, 0));
  };

  const goNext = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setStep((currentStep) => Math.min(currentStep + 1, steps.length - 1));
  };

  const withFullStop = (text) => {
    if (typeof text !== "string") return text;
    const trimmed = text.trim();
    if (!trimmed) return text;
    if (/[.!?]$/.test(trimmed)) return trimmed;
    return trimmed + ".";
  };

  const platformBtn = (active) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 14px",
    borderRadius: "999px",
    border: active ? "1px solid " + ACCENT : "1px solid #d1d5db",
    background: active ? "#111827" : "#ffffff",
    color: active ? "#ffffff" : "#374151",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
  });

  const navItem = (active) => ({
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: "10px 12px",
    marginBottom: "6px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    background: active ? ACCENT : "transparent",
    color: active ? "#ffffff" : "#374151",
    fontSize: "13px",
    fontWeight: active ? 700 : 500,
    lineHeight: 1.35,
  });

  return (
    <>
    <div
      id="publishing-wizard"
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        overflow: "hidden",
        margin: "24px 0",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          padding: "16px 20px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href="https://median.co"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Median"
            style={{
              display: "block",
              width: "32px",
              height: "32px",
              overflow: "hidden",
              flex: "0 0 32px",
            }}
          >
            <img
              src={MEDIAN_LOGO}
              alt=""
              style={{
                display: "block",
                height: "32px",
                width: "auto",
                maxWidth: "none",
                objectFit: "cover",
                objectPosition: "left center",
              }}
            />
          </a>
          <div>
            <p
              style={{
                margin: 0,
                fontSize: "12px",
                fontWeight: 700,
                color: ACCENT,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              Interactive publishing guide
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <button
            type="button"
            style={platformBtn(platform === "apple")}
            onClick={() => resetTo("apple")}
          >
            <i className="fa-brands fa-apple" style={{ fontSize: "16px" }} />
            Apple
          </button>
          {SHOW_GOOGLE ? (
            <button
              type="button"
              style={platformBtn(platform === "google")}
              onClick={() => resetTo("google")}
            >
              <i className="fa-brands fa-google-play" style={{ fontSize: "16px" }} />
              Google
            </button>
          ) : null}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch",
          minHeight: "520px",
        }}
      >
        <div
          style={{
            width: "260px",
            maxWidth: "100%",
            flex: "0 0 260px",
            borderRight: "1px solid #e5e7eb",
            background: "#fafafa",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <h3
            style={{
              margin: "0 0 12px",
              fontSize: "14px",
              color: "#111827",
            }}
          >
            Guide Steps
          </h3>
          <div>
            {steps.map((item, index) => (
              <button
                key={item.nav + index}
                type="button"
                style={navItem(index === safeStep)}
                onClick={() => setStep(index)}
              >
                <span style={{ opacity: 0.8, fontSize: "11px", display: "block" }}>
                  Step {index + 1}
                </span>
                {item.nav}
              </button>
            ))}
          </div>
        </div>

        <div style={{ flex: "1 1 320px", padding: "20px", boxSizing: "border-box" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              alignItems: "center",
              marginBottom: "10px",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "12px", color: "#6b7280", fontWeight: 600 }}>
              Step {safeStep + 1} of {steps.length}
            </span>
            <span style={{ fontSize: "12px", color: ACCENT, fontWeight: 700 }}>
              {progress}%
            </span>
          </div>

          <div
            style={{
              height: "8px",
              background: "#f3f4f6",
              borderRadius: "999px",
              overflow: "hidden",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: progress + "%",
                height: "100%",
                background: ACCENT,
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <button
              type="button"
              onClick={goBack}
              disabled={isFirst}
              aria-label="Previous step"
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                background: isFirst ? "#f3f4f6" : "#ffffff",
                color: "#111827",
                opacity: isFirst ? 0.55 : 1,
                cursor: isFirst ? "not-allowed" : "pointer",
                pointerEvents: isFirst ? "none" : "auto",
              }}
            >
              Previous
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={isLast}
              aria-label="Next step"
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                border: "none",
                background: ACCENT,
                color: "#ffffff",
                fontWeight: 600,
                opacity: isLast ? 0.5 : 1,
                cursor: isLast ? "not-allowed" : "pointer",
                pointerEvents: isLast ? "none" : "auto",
              }}
            >
              Next
            </button>
          </div>

          <p
            style={{
              margin: "0 0 8px",
              fontSize: "13px",
              color: ACCENT,
              fontWeight: 700,
            }}
          >
            {platform === "apple" ? "Apple App Store" : "Google Play Store"}
          </p>

          <h3 style={{ margin: "0 0 12px", fontSize: "28px", color: "#111827", lineHeight: 1.2 }}>
            {current.title}
          </h3>

          {current.intro ? (
            <p style={{ margin: "0 0 12px", color: "#374151", lineHeight: 1.6 }}>
              {current.intro}
            </p>
          ) : null}

          {current.introImage ? (
            <div style={{ margin: "0 0 16px" }}>
              <ZoomImage
                src={current.introImage}
                alt={current.introImageCaption || current.title}
                caption={current.introImageCaption}
              />
            </div>
          ) : null}

          {(current.sections || [{ bullets: current.bullets || [], imagesAfterBullet: current.imagesAfterBullet }]).map(
            (section, sectionIndex, sectionList) => (
              <div
                key={"sec-" + sectionIndex}
                style={{ marginBottom: sectionIndex === sectionList.length - 1 ? 0 : "24px" }}
              >
                {section.title ? (
                  <h4
                    style={{
                      margin: "0 0 10px",
                      fontSize: "18px",
                      color: "#111827",
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    {section.title}
                  </h4>
                ) : null}
                <ol
                  style={{
                    margin: 0,
                    paddingLeft: "22px",
                    color: "#374151",
                    lineHeight: 1.6,
                    listStyleType: "lower-alpha",
                  }}
                >
                  {(section.bullets || []).map((bullet, index) => {
                    const imagesMap = section.imagesAfterBullet || current.imagesAfterBullet;
                    const inlineImage =
                      (imagesMap && imagesMap[index]) ||
                      (!current.sections &&
                      current.image &&
                      current.imageAfterBullet === index
                        ? { image: current.image, caption: current.imageCaption }
                        : null);
                    return (
                      <li key={"b-" + sectionIndex + "-" + index} style={{ marginBottom: "8px" }}>
                        {withFullStop(bullet)}
                        {inlineImage ? (
                          <ZoomImage
                            src={inlineImage.image}
                            alt={inlineImage.caption || section.title || current.title}
                            caption={inlineImage.caption}
                          />
                        ) : null}
                      </li>
                    );
                  })}
                </ol>
              </div>
            )
          )}

          {current.image && current.imageAfterBullet == null && !current.imagesAfterBullet && !current.sections ? (
            <div style={{ margin: "16px 0 0" }}>
              <ZoomImage
                src={current.image}
                alt={current.imageCaption || current.title}
                caption={current.imageCaption}
              />
            </div>
          ) : null}

          {current.tip ? (
            <div
              style={{
                marginTop: "16px",
                padding: "12px 14px",
                borderRadius: "10px",
                background: "rgba(63, 62, 223, 0.08)",
                border: "1px solid rgba(63, 62, 223, 0.25)",
                color: "#1f2937",
                fontSize: "14px",
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: ACCENT }}>Tip: </strong>
              {withFullStop(current.tip)}
            </div>
          ) : null}
        </div>
      </div>
    </div>
    {lightbox ? (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={lightbox.alt || "Enlarged screenshot"}
        onClick={() => setLightbox(null)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2147483647,
          background: "rgba(255, 255, 255, 0.965)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          cursor: "zoom-out",
        }}
      >
        <button
          type="button"
          onClick={() => setLightbox(null)}
          aria-label="Close enlarged image"
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "40px",
            height: "40px",
            border: "none",
            borderRadius: "999px",
            background: "transparent",
            color: "#30353a",
            fontSize: "28px",
            lineHeight: 1,
            cursor: "pointer",
          }}
        >
          ×
        </button>
        <img
          src={lightbox.src}
          alt={lightbox.alt || ""}
          onClick={(event) => event.stopPropagation()}
          onLoad={(event) => {
            const img = event.currentTarget;
            const maxW = Math.max(window.innerWidth - 48, 160);
            const maxH = Math.max(window.innerHeight - 48, 160);
            const scale = Math.min(
              1,
              maxW / img.naturalWidth,
              maxH / img.naturalHeight
            );
            img.style.width = Math.round(img.naturalWidth * scale) + "px";
            img.style.height = Math.round(img.naturalHeight * scale) + "px";
          }}
          style={{
            display: "block",
            flex: "0 0 auto",
            width: "auto",
            height: "auto",
            maxWidth: "calc(100vw - 48px)",
            maxHeight: "calc(100vh - 48px)",
            borderRadius: "8px",
            boxShadow: "0 16px 48px rgba(0, 0, 0, 0.35)",
            cursor: "default",
            background: "transparent",
          }}
        />
      </div>
    ) : null}
    </>
  );
};
