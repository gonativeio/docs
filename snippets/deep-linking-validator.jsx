export const DeepLinkingValidator = () => {
  const ENDPOINT = "https://median.dev/deep-linking-validator?html=true";

  const [domain, setDomain] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [result, setResult] = useState("");
  const [dots, setDots] = useState(0);
  const resultsRef = useRef(null);

  // Animated "Validating domain..." ellipsis
  useEffect(() => {
    if (status !== "loading") return;
    const interval = setInterval(() => setDots((d) => (d + 1) % 4), 500);
    return () => clearInterval(interval);
  }, [status]);

  // Scroll results into view whenever they change
  useEffect(() => {
    if (status !== "idle" && resultsRef.current) {
      resultsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [status, result]);

  // Accept "https://Example.com/path" and reduce it to "example.com"
  const normalizeDomain = (value) =>
    value
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, "")
      .split(/[/?#]/)[0];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const domainValue = normalizeDomain(domain);

    if (!domainValue) {
      setStatus("error");
      setResult("Please enter a domain.");
      return;
    }

    setDomain(domainValue);
    setDots(0);
    setResult(domainValue);
    setStatus("loading");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: domainValue }),
      });
      const text = await response.text();
      if (!response.ok) throw new Error(text || String(response.status));
      setResult(text);
      setStatus("success");
    } catch (error) {
      setResult(error.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="not-prose my-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row sm:items-center gap-3"
      >
        <label
          htmlFor="domainField"
          className="font-semibold whitespace-nowrap text-gray-900 dark:text-gray-100"
        >
          Domain to validate:
        </label>
        <input
          type="text"
          id="domainField"
          name="domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="e.g. median.co"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
          inputMode="url"
          disabled={status === "loading"}
          className="w-full sm:w-72 h-10 px-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-10 px-5 self-start sm:self-auto rounded-lg font-semibold text-white bg-primary hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === "loading" ? "Validating…" : "Validate"}
        </button>
      </form>

      <div ref={resultsRef} aria-live="polite" className="mt-4">
        {status === "loading" && (
          <p className="text-gray-600 dark:text-gray-400">
            Validating domain {result}
            {".".repeat(dots)}
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 dark:text-red-400">Error: {result}</p>
        )}

        {status === "success" && (
          <div
            className="deep-linking-results rounded-lg border border-gray-200 dark:border-gray-800 p-4 overflow-x-auto text-gray-900 dark:text-gray-100"
            dangerouslySetInnerHTML={{ __html: result }}
          />
        )}
      </div>
    </div>
  );
};
