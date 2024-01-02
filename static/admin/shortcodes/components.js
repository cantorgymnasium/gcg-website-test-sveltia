const Card = (children, opts = { vertical: false }) =>
  h(
    "span",
    {
      className:
        "CMS_Card_root CMS_Field_root CMS_WidgetString_root CMS_WidgetString_required CMS_Field_cursor-text CMS_WidgetMarkdown_Paragraph_root" +
        (opts.vertical ? " flex-col" : ""),
    },
    h("span", { className: "CMS_Field_wrapper" }, children)
  );

const Image = ({ assetSource, handleOpenMediaLibrary }) =>
  h(
    "span",
    { className: "CMS_WidgetFileImage_content" },
    h(
      "span",
      {},
      h("img", {
        role: "presentation",
        src: assetSource,
        className: "CMS_Image_root",
      })
    ),
    h(
      "span",
      { className: "CMS_WidgetFileImage_actions" },
      h(
        "button",
        {
          type: "button",
          onClick: handleOpenMediaLibrary,
          className: "CMS_Button_root CMS_Button_outlined-primary",
        },
        "Bild auswählen"
      )
    )
  );

const TextField = ({ value, onChange }) =>
  h("input", {
    className:
      "MuiInput-input CMS_TextField_input CMS_WidgetString_input CMS_TextField_borderless CMS_Label_cursor-text",
    type: "text",
    value,
    onChange,
  });

const Label = (label) =>
  h(
    "label",
    {
      className: "CMS_Label_root CMS_Label_cursor-pointer",
    },
    label
  );

export { Card, Image, TextField, Label };
