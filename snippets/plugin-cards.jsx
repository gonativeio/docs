export const PluginCardGroup = ({ children }) => {
  return (
    <div
      className="not-prose"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "20px",
        margin: "24px 0",
      }}
    >
      {children}
    </div>
  );
};

export const PluginCard = ({ title, icon, href, cta = "Learn more", children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "20px",
        borderRadius: "16px",
        background: "rgba(127, 127, 127, 0.08)",
        border: "1px solid rgba(127, 127, 127, 0.16)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <img
          src={icon}
          alt=""
          style={{
            width: "64px",
            height: "64px",
            flex: "0 0 64px",
            borderRadius: "12px",
            margin: 0,
          }}
        />
        <span style={{ fontSize: "17px", fontWeight: 600, lineHeight: 1.3 }}>{title}</span>
      </div>
      <div style={{ fontSize: "15px", lineHeight: 1.6, opacity: 0.85, flex: "1 1 auto" }}>
        {children}
      </div>
      <a
        href={href}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 16px",
          borderRadius: "10px",
          background: "rgba(127, 127, 127, 0.14)",
          color: "inherit",
          fontSize: "15px",
          fontWeight: 500,
          textDecoration: "none",
        }}
      >
        {cta}
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
};
