export const SvgIcon = ({ icon, size = 16 }) => (
  <span
    aria-hidden="true"
    style={{
      display: "inline-block",
      width: size,
      height: size,
      verticalAlign: "-0.125em",
      backgroundColor: "currentColor",
      WebkitMask: `url(${icon}) center / contain no-repeat`,
      mask: `url(${icon}) center / contain no-repeat`,
    }}
  />
);
