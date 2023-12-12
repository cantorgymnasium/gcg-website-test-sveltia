import { MarkdownProps } from "../props.js";
import { DescriptionText, DraftBoolean, Title } from "./widgets.js";

const WettbewerbeCollection = {
  name: "wettbewerbe",
  label: "Wettbewerbe",
  label_singular: "Wettbewerb",
  description: "Hier kann die Übersicht der Wettbewerbe bearbeitet werden.",
  icon: "trophy",
  folder: "content/wettbewerbe",
  create: true,
  editor: {
    preview: true,
    frame: true,
    size: "half",
  },
  filter: {
    field: "type",
    value: "wettbewerbe",
  },
  summary_fields: ["title", "draft", "category"],
  fields: [
    Title(false),
    DraftBoolean,
    DescriptionText,
    {
      name: "image",
      label: "Titelbild",
      widget: "image",
      required: true,
      default: "/media/image.webp",
    },
    {
      name: "category",
      label: "Fach",
      hint: "Verwaltet in den Einstellungen",
      widget: "relation",
      collection: "settings",
      file: "data-categories",
      value_field: "contests.*",
      search_fields: ["contests.*"],
      display_fields: ["contests.*"],
      required: true,
    },
    {
      name: "class",
      label: "Klassenstufe(n)",
      widget: "string",
      required: true,
    },
    {
      name: "web_url",
      label: "Website",
      widget: "string",
      required: false,
    },
    {
      name: "type",
      label: "Typ",
      widget: "hidden",
      default: "wettbewerbe",
    },
    {
      name: "body",
      label: "Inhalt",
      widget: "markdown",
      required: true,
      ...MarkdownProps,
    },
  ],
};

export default WettbewerbeCollection;
