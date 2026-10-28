export const InstantPreviewCTA = ({
  overline = "Build an app for free",
  heading = "Enter your URL to build an app now",
  buttonLabel = "Build now",
  placeholder = "Enter any URL to try it out",
}) => {
  const PREFIX = "https://";
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Always produce "https://<rest>", whatever the visitor types or pastes
  // (e.g. "example.com", "http://example.com", "https://https://example.com").
  const normalize = (raw) => {
    let v = (raw || "").trim();
    if (!v) return PREFIX;
    const match = v.match(/https?:\/\//i);
    if (match) v = v.slice(match.index);
    v = v.replace(/^(https?:\/*)+/i, "");
    return PREFIX + v.replace(/^\/+/, "");
  };

  const moveCaretAfterPrefix = (input) => {
    requestAnimationFrame(() => {
      try {
        input.setSelectionRange(PREFIX.length, PREFIX.length);
      } catch {}
    });
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    if (!value) {
      setValue(PREFIX);
      moveCaretAfterPrefix(e.target);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (value === PREFIX) setValue("");
  };

  const handleChange = (e) => setValue(normalize(e.target.value));

  // Keep the caret out of the fixed "https://" prefix.
  const handleKeyDown = (e) => {
    const input = e.target;
    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;
    const inPrefix = start <= PREFIX.length && end <= PREFIX.length;

    if (
      e.key === "Home" ||
      ((e.key === "Backspace" || e.key === "ArrowLeft") && inPrefix) ||
      (e.key === "Delete" && start < PREFIX.length)
    ) {
      e.preventDefault();
      moveCaretAfterPrefix(input);
    }
  };

  const handleClick = (e) => {
    const input = e.target;
    if (
      (input.selectionStart ?? 0) < PREFIX.length &&
      input.value.startsWith(PREFIX)
    ) {
      moveCaretAfterPrefix(input);
    }
  };

  return (
    <div className="median-cta not-prose my-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
        {overline}
      </p>
      <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
        {heading}
      </p>

      <form
        action="https://median.co/app"
        method="get"
        target="_blank"
        rel="noopener"
        className="median-cta-field mt-4 flex flex-col gap-2 rounded-xl border border-gray-300 p-2 dark:border-white/15 sm:flex-row sm:items-center"
      >
        <input
          type="text"
          name="url"
          inputMode="url"
          autoComplete="url"
          aria-label="Website URL"
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          placeholder={isFocused ? "" : placeholder}
          required
          className="h-11 min-w-0 flex-1 bg-transparent px-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none dark:text-white dark:placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="median-cta-button inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold text-gray-950"
        >
          {buttonLabel}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </form>

      <style>{`
        .median-cta-field:focus-within {
          border-color: transparent;
          box-shadow: 0 0 0 2px #F7C406;
        }
        .median-cta-button {
          background-color: #F7C406;
          transition: background-color 0.2s ease;
        }
        .median-cta-button:hover {
          background-color: #EFAC00;
        }
        .median-cta-button svg {
          transition: transform 0.2s ease;
        }
        .median-cta-button:hover svg {
          transform: translateX(3px);
        }
        .median-cta-button:focus-visible {
          outline: 2px solid #F7C406;
          outline-offset: 2px;
        }
        /* Stop browser autofill from painting a solid background */
        .median-cta input:-webkit-autofill {
          -webkit-text-fill-color: inherit;
          transition: background-color 9999s ease-in-out 0s;
        }
      `}</style>
    </div>
  );
};
