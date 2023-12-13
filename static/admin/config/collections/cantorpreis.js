import { EditorProps, MarkdownProps, ImageProps } from "../props.js";
import { DescriptionText, DraftBoolean } from "./widgets.js";

const CantorpreisCollection = {
  name: "cantorpreis",
  label: "Cantorpreisträger",
  description:
    "Hier sind alle Cantorpreisträger aufgelistet. Dieser Bereich wird von der Schulchronik verwaltet.",
  icon: "award",
  folder: "content/cantorpreis",
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
  ...EditorProps,
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
      default: "/media/image.webp",
      ...ImageProps,
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
      required: false,
      ...MarkdownProps,
    },
  ],
};

export default CantorpreisCollection;
