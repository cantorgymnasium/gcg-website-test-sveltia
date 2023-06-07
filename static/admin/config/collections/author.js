import { MarkdownProps, PatternEmail } from "../props.js";
import { DescriptionText } from "./widgets.js";

const AuthorCollection = {
  name: "author",
  label: "Autoren",
  label_singular: "Autor",
  description:
    "Autoren können einem Blogartikel zugewiesen werden. Wir unterscheiden in aktive und inaktive sowie vereinfachte Autoren, welche nur mit dem Namen angezeigt werden, und erweiterte Autoren, für die eine Übersichtsseite angelegt wird.Autoren können einem Blogartikel zugewiesen werden.",
  icon: "user",
  folder: "content/german/author",
  create: true,
  editor: {
    preview: true,
    frame: true,
    size: "half",
  },
  filter: {
    field: "type",
    value: "author",
  },
  view_filters: [
    {
      label: "aktiv",
      field: "active",
      pattern: true,
    },
    {
      label: "inaktiv",
      field: "active",
      pattern: false,
    },
    {
      label: "einfach",
      field: "simplified",
      pattern: true,
    },
    {
      label: "erweitert",
      field: "simplified",
      pattern: false,
    },
  ],
  view_groups: [
    {
      label: "vereinfacht",
      field: "simplified",
    },
    {
      label: "aktiv",
      field: "active",
    },
  ],
  summary_fields: ["title", "active", "simplified", "body"],
  fields: [
    {
      name: "title",
      label: "Name",
      widget: "string",
      required: true,
    },
    DescriptionText,
    {
      name: "email",
      label: "E-Mail-Adresse",
      widget: "string",
      required: false,
      ...PatternEmail,
    },
    {
      name: "image",
      label: "Bild",
      widget: "image",
      required: false,
      default: "/media/people/gcg.webp",
    },
    {
      name: "simplified",
      label: "vereinfacht",
      widget: "boolean",
      required: false,
    },
    {
      name: "active",
      label: "aktiv",
      widget: "boolean",
      required: false,
      default: true,
    },
    {
      name: "body",
      label: "Beschreibung",
      widget: "markdown",
      required: false,
      ...MarkdownProps,
    },
  ],
};

export default AuthorCollection;
