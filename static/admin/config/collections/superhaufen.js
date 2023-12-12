import { MarkdownProps } from "../props.js";
import { DraftBoolean, EnableBoolean, Title } from "./widgets.js";

const SuperhaufenCollection = {
  name: "superhaufen",
  label: "Superhaufen",
  description:
    '"Superhaufen" sind ein besonderer Bereich der Schulchronik, um besonders ausführliche Ereignisse darzustellen. Dieser Bereich wird von der Schulchronik verwaltet.',
  icon: "superhaufen",
  folder: "content/superhaufen",
  filter: {
    field: "type",
    value: "superhaufen",
  },
  create: true,
  editor: {
    preview: true,
    frame: true,
    size: "half",
  },
  summary_fields: ["title", "draft", "tiles"],
  fields: [
    Title(false),
    DraftBoolean,
    {
      name: "type",
      label: "Typ",
      widget: "hidden",
      default: "superhaufen",
    },
    {
      name: "previous",
      label: "Rückverlinkung",
      widget: "object",
      collapsed: true,
      fields: [
        EnableBoolean,
        Title(false),
        {
          name: "link",
          label: "Link",
          widget: "string",
          required: true,
        },
      ],
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
        {
          name: "icon",
          label: "Symbol",
          widget: "string",
          required: true,
        },
        {
          name: "font_color",
          label: "Symbolfarbe",
          widget: "color",
          required: true,
        },
        {
          name: "content",
          label: "Inhalt",
          widget: "markdown",
          required: true,
          ...MarkdownProps,
        },
        {
          name: "unterhaufen",
          label: "Unterhaufen",
          widget: "list",
          required: false,
          collapsed: true,
          fields: [
            Title(false),
            {
              name: "content",
              label: "Inhalt",
              widget: "markdown",
              required: true,
              ...MarkdownProps,
            },
          ],
        },
      ],
    },
  ],
};

export default SuperhaufenCollection;
