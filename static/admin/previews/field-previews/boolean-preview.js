const BooleanPreview = ({ value }) =>
  h("i", {
    className: value ? "mdi mdi-check" : "mdi mdi-close",
    style: { color: value ? "#00ff99" : "#ff0000", "font-size": "1.5rem" },
  });

export default BooleanPreview;
