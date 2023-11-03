import { DateFormat, MarkdownProps } from "../props.js";
import {
  AuthorRelation,
  DescriptionText,
  DraftBoolean,
  Title,
} from "./widgets.js";

const BlogCollection = {
  name: "blog",
  label: "Aktuelles",
  label_singular: "Artikel",
  description:
    'Diese Artikel werden im Bereich "Aktuelles" auf der Schulhomepage angezeigt. Sie können sowohl direkt veröffentlicht, als auch als Entwurf gespeichert werden.',
  icon: "news",
  folder: "content/blog",
  create: true,
  editor: {
    preview: true,
    frame: true,
    size: "half",
  },
  filter: {
    field: "type",
    value: "post",
  },
  view_groups: {
    default: "draft",
    groups: [
      {
        name: "draft",
        label: "Entwurf",
        field: "draft",
      },
    ],
  },
  sortable_fields: {
    fields: ["date", "title"],
    default: {
      field: "date",
      direction: "Descending",
    },
  },
  summary_fields: ["date", "title", "draft", "author", "body"],
  fields: [
    Title(false),
    {
      name: "date",
      label: "Datum",
      widget: "datetime",
      required: true,
      ...DateFormat,
    },
    DraftBoolean,
    DescriptionText,
    {
      name: "image",
      label: "Titelbild",
      hint: "16:9 Seitenverhältnis beachten",
      widget: "image",
      required: true,
      default: "/media/image.webp",
    },
    AuthorRelation,
    {
      name: "categories",
      label: "Kategorien",
      hint: "Verwaltet in den Einstellungen",
      widget: "relation",
      collection: "settings",
      file: "data-categories",
      value_field: "blog.*",
      search_fields: ["blog.*"],
      display_fields: ["blog.*"],
      multiple: true,
      required: true,
      options_length: 10000,
    },
    {
      name: "subjects",
      label: "Fächer",
      hint: "Verwaltet in den Einstellungen",
      widget: "relation",
      collection: "settings",
      file: "data-categories",
      value_field: "subjects.*",
      search_fields: ["subjects.*"],
      display_fields: ["subjects.*"],
      multiple: true,
      required: false,
      options_length: 10000,
    },
    {
      name: "tags",
      label: "Tags",
      widget: "list",
      delimiter: ",",
      required: false,
    },
    {
      name: "type",
      label: "Typ",
      widget: "hidden",
      default: "post",
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

export default BlogCollection;
