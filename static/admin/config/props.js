const EditorProps = {
  create: true,
  editor: {
    preview: true,
    frame: true,
    size: "half",
  },
};

const MarkdownProps = {
  widget: "markdown",
  toolbar_buttons: {
    main: [
      "bold",
      "italic",
      "strikethrough",
      "code",
      "font",
      "unordered-list",
      "ordered-list",
      "decrease-indent",
      "increase-indent",
      "insert-table",
      "blockquote",
      "file-link",
      "code-block",
      "shortcode",
    ],
    empty: [],
    selection: [
      "bold",
      "italic",
      "strikethrough",
      "code",
      "font",
      "file-link",
      "blockquote",
    ],
    table_empty: [
      "bold",
      "italic",
      "strikethrough",
      "code",
      "insert-row",
      "delete-row",
      "insert-column",
      "delete-column",
      "delete-table",
      "file-link",
      "shortcode",
    ],
    table_selection: [
      "bold",
      "italic",
      "strikethrough",
      "code",
      "insert-row",
      "delete-row",
      "insert-column",
      "delete-column",
      "delete-table",
      "file-link",
      "shortcode",
    ],
  },
  media_library: {
    folder_support: true,
  }
};

const DateFormat = {
  date_format: "dd.MM.yyyy",
  time_format: false,
  format: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
};

const DataObject = {
  widget: "object",
  collapsed: true,
  summary: "{{fields.enable | ternary('aktiv', 'inaktiv')}}",
};

const PatternEmail = {
  pattern: [
    "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",
    "name@domain.tld",
  ],
};

const ImageProps = {
  widget: "image",
  required: false,
  media_library: {
    folder_support: true,
  }
};

export { EditorProps, MarkdownProps, DateFormat, DataObject, PatternEmail, ImageProps };
