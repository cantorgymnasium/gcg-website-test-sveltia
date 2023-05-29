import { MarkdownProps } from "../props.js";
import { Title, DescriptionText, DraftBoolean } from "./widgets.js";

const GanztagCollection = {
  name: "ganztagsangebote",
  label: "Ganztag",
  label_singular: "Arbeitsgemeinschaft",
  description:
    "Hier kann die Übersicht der Ganztagsangebote bearbeitet werden.",
  icon: "group",
  folder: "content/german/ganztagsangebote",
  create: true,
  editor: {
    preview: true,
    frame: true,
    size: "half",
  },
  filter: {
    field: "type",
    value: "ganztagsangebote",
  },
  summary_fields: ["title", "draft", "category", "schedule", "room"],
  fields: [
    Title(false),
    DraftBoolean,
    DescriptionText,
    {
      name: "image",
      label: "Titelbild",
      widget: "image",
      default: "/media/ganztagsangebote/image.webp",
      required: true,
    },
    {
      name: "category",
      label: "Themebereich",
      hint: "Verwaltet in den Einstellungen",
      widget: "relation",
      collection: "settings",
      file: "data-categories",
      value_field: "ganztag.*",
      search_fields: ["ganztag.*"],
      display_fields: ["ganztag.*"],
      required: true,
    },
    {
      name: "duration",
      label: "Dauer",
      widget: "string",
      required: true,
    },
    {
      name: "schedule",
      label: "Tag/Stunden",
      widget: "string",
      required: true,
    },
    {
      name: "class",
      label: "Klassenstufen(n)",
      widget: "string",
      required: true,
    },
    {
      name: "room",
      label: "Raum",
      widget: "string",
      required: true,
    },
    {
      name: "apply_url",
      label: "Anmeldelink",
      widget: "hidden",
      default: "https://moodle.bildung-lsa.de/gcg/mod/choice/view.php?id=828",
    },
    {
      name: "type",
      label: "Typ",
      widget: "hidden",
      default: "ganztagsangebote",
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

export default GanztagCollection;
