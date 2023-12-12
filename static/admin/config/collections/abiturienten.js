import { MarkdownProps } from "../props.js";
import { DraftBoolean, Title } from "./widgets.js";

const AbiturientenCollection = {
  name: "abiturienten",
  label: "Abiturienten",
  label_singular: "Abiturjahrgang",
  description:
    "Hier kann die Übersicht der Abiturjahrgänge bearbeitet werden. Dieser Bereich wird von der Schulchronik verwaltet.",
  icon: "graduation-cap",
  folder: "content/abiturienten",
  filter: {
    field: "type",
    value: "abiturienten",
  },
  create: true,
  editor: {
    preview: true,
    frame: true,
    size: "half",
  },
  summary_fields: ["title", "draft"],
  sortable_fields: {
    fields: ["title"],
    default: {
      field: "title",
      direction: "Descending",
    },
  },
  fields: [
    Title(false),
    DraftBoolean,
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
      default: "abiturienten",
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

export default AbiturientenCollection;
