const Card = (child, opts = { vertical: false }) =>
  h(
    "span",
    {
      className:
        "CMS_Card_root CMS_Field_root CMS_WidgetString_root CMS_WidgetString_required CMS_Field_cursor-text CMS_WidgetMarkdown_Paragraph_root" +
        (opts.vertical ? " flex-col" : ""),
    },
    child
  );

export default Card;
