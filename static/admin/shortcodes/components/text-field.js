const TextField = ({ label, value, onChange }) =>
  h(
    "span",
    { key: "text-" + label, className: "CMS_Field_wrapper" },
    h(
      "label",
      {
        className: "CMS_Label_root CMS_TextField_cursor-default",
      },
      label
    ),
    h("input", {
      className:
        "MuiInput-input CMS_TextField_input CMS_WidgetString_input CMS_TextField_borderless CMS_Label_cursor-text",
      type: "text",
      value,
      onChange,
    })
  );

export default TextField;
