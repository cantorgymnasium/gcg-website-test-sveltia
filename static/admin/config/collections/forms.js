import { MarkdownProps } from "../props.js";
import { DescriptionText, DraftBoolean, Title } from "./widgets.js";

const FormsCollection = {
  name: "forms",
  label: "Dokumente",
  label_singular: "Dokument",
  description:
    "Hier sind Formulare, Vorlagen und andere Dokumente zu hinterlegen.",
  icon: "document",
  folder: "content/german/forms",
  create: true,
  editor: {
    preview: true,
    frame: true,
    size: "half",
  },
  filter: {
    field: "type",
    value: "forms",
  },
  summary_fields: ["title", "draft"],
  fields: [
    Title(false),
    DraftBoolean,
    DescriptionText,
    {
      name: "files",
      label: "Dateien",
      label_singular: "Datei",
      widget: "list",
      required: false,
      collapsed: true,
      fields: [
        {
          name: "title",
          label: "Bezeichnung",
          widget: "string",
          required: true,
        },
        {
          name: "link",
          label: "Datei",
          widget: "file",
          required: true,
        },
      ],
    },
    {
      name: "type",
      label: "Typ",
      widget: "hidden",
      default: "forms",
    },
    {
      name: "body",
      label: "Inhalt",
      widget: "markdown",
      required: false,
      ...MarkdownProps,
    },
  ],
};

export default FormsCollection;
