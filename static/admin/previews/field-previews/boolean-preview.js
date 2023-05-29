const BooleanPreview = ({ value }) =>
  h("i", {
    className: value ? "mdi mdi-check" : "mdi mdi-close",
  });

export default BooleanPreview;
