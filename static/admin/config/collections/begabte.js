import { MarkdownProps } from "../props.js";
import { DescriptionText, DraftBoolean, Title } from "./widgets.js";

const BegabteCollection = {
  name: "begabte",
  label: "Begabtenförderung",
  label_singular: "Begabtenförderungsangebot",
  description:
    "Hier kann die Übersicht der Begabtenförderungsangebote bearbeitet werden.",
  icon: "pi",
  folder: "content/german/begabte",
  create: true,
  editor: {
    preview: true,
    frame: true,
    size: "half",
  },
  filter: {
    field: "type",
    value: "begabte",
  },
  summary_fields: ["title", "draft", "body"],
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
      default: "begabte",
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

export default BegabteCollection;
