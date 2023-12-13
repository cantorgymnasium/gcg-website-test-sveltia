import { EditorProps, MarkdownProps } from "../props.js";
import { DescriptionText, DraftBoolean, Title } from "./widgets.js";

const PagesCollection = {
  name: "pages",
  label: "Zusatzseiten",
  label_singular: "Zusatzseite",
  description:
    "Zusatzseiten können direkt aus der grafischen Oberfläche heraus erstellt werden und sind unter https://cantorgymnasium.de/pages/[SEITENTITEL] einsehbar. Sie bestehen immer aus einem Titel, einer Metabeschreibung (kurzer Einstiegstext) und dem eigentlichen Inhalt. Einer Zusatzseite kann auch ein Alias, also eine alternative URL zugewiesen werden.",
  icon: "page-add",
  folder: "content/pages",
  ...EditorProps,
  filter: {
    field: "type",
    value: "pages",
  },
  summary_fields: ["title", "draft", "aliases", "description"],
  fields: [
    Title(false),
    DraftBoolean,
    DescriptionText,
    {
      name: "type",
      label: "Typ",
      widget: "hidden",
      default: "pages",
    },
    {
      name: "aliases",
      label: "Aliase",
      label_singular: "Alias",
      widget: "list",
      collapsed: true,
      required: false,
      fields: [
        {
          name: "alias",
          label: "Alias",
          widget: "string",
        },
      ],
    },
    {
      name: "body",
      label: "Inhalt",
      required: false,
      ...MarkdownProps,
    },
  ],
};

export default PagesCollection;
