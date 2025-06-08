import en from '../../locales/en.js'
function CopyRight() {
  return (
    <p
      className="mb-0 text-start"
      style={{
        color: "var(--label-primary-color)",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "21px",
      }}
    >
        {en.dashboard.copyright}{" "}
    </p>
  );
}

export default CopyRight