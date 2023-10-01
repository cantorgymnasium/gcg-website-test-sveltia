const DraftPreview = ({ value }) =>
  h(
    "div",
    {
      style: {
        backgroundColor: value === true ? "rgb(37 99 235)" : "rgb(22 163 74)",
        color: "white",
        border: "none",
        padding: "0 5px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        cursor: "pointer",
        borderRadius: "4px",
        fontSize: "14px",
      },
    },
    value ? "Entwurf" : "Veröffentlicht"
  );

export default DraftPreview;
