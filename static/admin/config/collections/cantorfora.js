import { EditorProps, MarkdownProps, ImageProps } from "../props.js";
import { DescriptionText, DraftBoolean, Title } from "./widgets.js";

const CantorforaCollection = {
  name: "cantorfora",
  label: "Cantorfora",
  label_singular: "Cantorforum",
  description:
    "Hier kann die Übersicht der Cantorfora bearbeitet werden. Dieser Bereich wird von der Schulchronik verwaltet.",
  icon: "presentation",
  folder: "content/cantorfora",
  filter: {
    field: "type",
    value: "cantorfora",
  },
  create: true,
  ...EditorProps,
  summary_fields: ["title", "draft", "description"],
  sortable_fields: {
    fields: ["index", "title"],
    default: {
      field: "index",
      direction: "Descending",
    },
  },
  fields: [
    Title(false),
    {
      name: "index",
      label: "Laufindex",
      hint: "Nummer des Cantorforums",
      widget: "number",
      value_type: "int",
      min: 1,
      step: 1,
      required: true,
    },
    DraftBoolean,
    DescriptionText,
    {
      name: "image",
      label: "Titelbild",
      default: "/media/image.webp",
      ...ImageProps,
      required: true,
    },
    {
      name: "type",
      label: "Typ",
      widget: "hidden",
      default: "cantorfora",
    },
    {
      name: "body",
      label: "Text",
      required: true,
      ...MarkdownProps,
    },
  ],
};

export default CantorforaCollection;
