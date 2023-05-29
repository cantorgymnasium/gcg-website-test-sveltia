import { MarkdownProps } from "../props.js";
import { DescriptionText, DraftBoolean } from "./widgets.js";

const CantorpreisCollection = {
  name: "cantorpreis",
  label: "Cantorpreisträger",
  description:
    "Hier sind alle Cantorpreisträger aufgelistet. Dieser Bereich wird von der Schulchronik verwaltet.",
  icon: "award",
  folder: "content/german/cantorpreis",
  filter: {
    field: "type",
    value: "cantorpreis",
  },
  sortable_fields: {
    fields: ["title", "name"],
    default: {
      field: "title",
      direction: "Descending",
    },
  },
  summary: "{{title}} - {{name}}",
  create: true,
  editor: {
    preview: true,
    frame: true,
    size: "half",
  },
  summary_fields: ["title", "name", "draft", "body"],
  fields: [
    {
      name: "title",
      label: "Jahr",
      widget: "string",
      required: true,
    },
    {
      name: "name",
      label: "Name",
      widget: "string",
      required: true,
    },
    DraftBoolean,
    DescriptionText,
    {
      name: "image",
      label: "Bild",
      widget: "image",
      default: "/media/image.webp",
      required: false,
    },
    {
      name: "type",
      label: "Typ",
      widget: "hidden",
      default: "cantorpreis",
    },
    {
      name: "body",
      label: "Text",
      widget: "markdown",
      required: false,
      ...MarkdownProps,
    },
  ],
};

export default CantorpreisCollection;
