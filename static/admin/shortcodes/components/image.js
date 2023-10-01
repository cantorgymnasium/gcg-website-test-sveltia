const Image = ({ label, assetSource, handleOpenMediaLibrary }) =>
  h(
    "span",
    { className: "CMS_Field_wrapper" },
    h(
      "label",
      {
        className: "CMS_Label_root CMS_Label_cursor-pointer",
      },
      label
    ),
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
    )
  );

export default Image;
