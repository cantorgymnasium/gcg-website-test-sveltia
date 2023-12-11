import { MarkdownProps, PatternEmail, ImageProps } from "../props.js";
import { DescriptionText } from "./widgets.js";

const AuthorCollection = {
  name: "author",
  label: "Autoren",
  label_singular: "Autor",
  description:
    "Autoren können einem Blogartikel zugewiesen werden. Wir unterscheiden in aktive und inaktive sowie vereinfachte Autoren, welche nur mit dem Namen angezeigt werden, und erweiterte Autoren, für die eine Übersichtsseite angelegt wird.",
  icon: "user",
  folder: "content/author",
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
  view_filters: {
    filters: [
      {
        name: "active",
        label: "aktiv",
        field: "active",
        pattern: true,
      },
      {
        name: "inactive",
        label: "inaktiv",
        field: "active",
        pattern: false,
      },
      {
        name: "simplified",
        label: "einfach",
        field: "simplified",
        pattern: true,
      },
      {
        name: "extended",
        label: "erweitert",
        field: "simplified",
        pattern: false,
      },
    ],
  },
  view_groups: {
    default: "active",
    groups: [
      {
        name: "simplified",
        label: "vereinfacht",
        field: "simplified",
      },
      {
        name: "active",
        label: "aktiv",
        field: "active",
      },
    ],
  },
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
      default: "/media/people/gcg.webp",
      ...ImageProps,
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
      name: "type",
      label: "Typ",
      widget: "hidden",
      default: "author",
    },
    {
      name: "body",
      label: "Beschreibung",
      required: false,
      ...MarkdownProps,
    },
  ],
};

export default AuthorCollection;
