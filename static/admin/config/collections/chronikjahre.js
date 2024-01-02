import { MarkdownProps, EditorProps } from "../props.js";
import { DraftBoolean, EnableBoolean } from "./widgets.js";

const ChronikjahreCollection = {
  name: "chronikjahre",
  description:
    "Hier können die Chronikjahre bearbeitet werden. Dieser Bereich wird von der Schulchronik verwaltet.",
  icon: "schulchronik",
  label: "Chronikjahre",
  label_singular: "Chronikjahr",
  folder: "content/schulchronik",
  filter: {
    field: "type",
    value: "schulchronik",
  },
  ...EditorProps,
  summary_fields: ["title", "draft", "cantorpreisträger", "topics"],
  sortable_fields: {
    fields: ["title"],
    default: {
      field: "title",
      direction: "Descending",
    },
  },
  fields: [
    {
      name: "title",
      label: "Jahr",
      widget: "string",
    },
    DraftBoolean,
    {
      name: "type",
      label: "Typ",
      widget: "hidden",
      default: "schulchronik",
    },
    {
      name: "pretext",
      label: "Einleitung",
      hint: "Text für die Jahreszahl",
      required: false,
      widget: "object",
      fields: [
        EnableBoolean,
        {
          name: "content",
          label: "Text",
          condition: {
            field: "pretext.enable",
            value: true,
          },
          required: false,
          ...MarkdownProps,     
        }
      ]
    },
    {
      name: "topics",
      label: "Kreative Haufen",
      label_singular: "Haufen",
      widget: "list",
      required: false,
      collapsed: true,
      max: 4,
      fields: [
        {
          name: "title",
          label: "Titel",
          widget: "string",
          required: true,
        },
        {
          name: "content",
          label: "Inhalt",
          condition: {
            field: "superhaufen.enable",
            value: false,
          },
          required: false,
          ...MarkdownProps,
        },
        {
          name: "superhaufen",
          label: "Superhaufen",
          widget: "object",
          required: false,
          fields: [
            EnableBoolean,
            {
              name: "link",
              label: "Superhaufen",
              widget: "relation",
              collection: "superhaufen",
              search_fields: ["title"],
              value_field: "title",
              condition: {
                field: "superhaufen.enable",
                value: true,
              },
              required: false,
              collapsed: true,
            },
          ],
        },
      ],
    },
    {
      name: "cantorpreisträger",
      label: "Cantorpreisträger",
      widget: "relation",
      collection: "cantorpreis",
      search_fields: ["jahr", "name"],
      value_field: "name",
      required: false,
    },
  ],
};

export default ChronikjahreCollection;
