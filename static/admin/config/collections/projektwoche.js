import { MarkdownProps } from "../props.js";
import { DescriptionText, DraftBoolean, IconList, Title } from "./widgets.js";

const ProjektwocheCollection = {
  name: "projektwoche",
  label: "Projektwochen",
  label_singular: "Projektwoche",
  description: "Hier kann die Übersicht der Projektwochen bearbeitet werden.",
  icon: "projektwoche",
  folder: "content/projektwoche",
  filter: {
    field: "type",
    value: "projektwoche",
  },
  create: true,
  editor: {
    preview: true,
    frame: true,
    size: "half",
  },
  summary_fields: ["title", "draft", "tiles", "description"],
  fields: [
    Title(false),
    DraftBoolean,
    DescriptionText,
    {
      name: "type",
      label: "Typ",
      widget: "hidden",
      default: "projektwoche",
    },
    {
      name: "body",
      label: "Inhalt",
      required: false,
      ...MarkdownProps,
    },
    {
      name: "tiles",
      label: "Kacheln",
      hint: "Die Vorschau zeigt nur die generierten Symbolkarten, NICHT die Inhalte.",
      widget: "list",
      required: false,
      collapsed: true,
      fields: [
        Title(false),
        {
          name: "bg_color",
          label: "Hintergrundfarbe",
          widget: "color",
          required: true,
        },
        IconList,
        {
          name: "font_color",
          label: "Symbolfarbe",
          widget: "color",
          required: true,
        },
        {
          name: "content",
          label: "Inhalt",
          required: true,
          ...MarkdownProps,
        },
      ],
    },
  ],
};

export default ProjektwocheCollection;
