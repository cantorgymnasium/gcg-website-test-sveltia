import {
  DataObject,
  DateFormat,
  MarkdownProps,
  PatternEmail,
  ImageProps
} from "../props.js";
import { DescriptionText, EnableBoolean, Title } from "./widgets.js";

const IndexPagesCollection = {
  name: "index-pages",
  label: "Hauptseiten",
  label_singular: "Hauptseite",
  description:
    "Hauptseiten können nur manuell durch den Administrator angelegt und in die Website eingebunden werden. Über diesen Bereich ist die Änderung der Inhalte möglich.",
  icon: "page",
  editor: {
    preview: true,
    frame: true,
    size: "half",
  },
  summary_fields: ["title", "description"],
  files: [
    {
      name: "blog-index",
      label: "Aktuelles",
      file: "content/blog/_index.md",
      fields: [Title(false), DescriptionText],
    },
    {
      name: "about-index",
      label: "Über die Schule",
      file: "content/about/_index.md",
      fields: [
        Title(false),
        DescriptionText,
        {
          name: "image",
          label: "Bild",
          ...ImageProps,
        },
        {
          name: "stats",
          label: "Statistik",
          ...DataObject,
          fields: [
            EnableBoolean,
            {
              name: "zahlen",
              label: "Elemente",
              label_singular: "Element",
              widget: "list",
              required: false,
              collapsed: false,
              fields: [
                {
                  name: "name",
                  label: "Bezeichnung",
                  widget: "string",
                  required: true,
                },
                {
                  name: "count",
                  label: "Zahl",
                  widget: "number",
                  value_type: "int",
                  min: 0,
                  step: 1,
                  required: true,
                },
              ],
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
    },
    {
      name: "anmeldung-index",
      label: "Aufnahmeverfahren",
      file: "content/anmeldung/_index.md",
      fields: [
        Title(false),
        DescriptionText,
        {
          name: "body",
          label: "Inhalt",
          required: false,
          ...MarkdownProps,
        },
        {
          name: "elements",
          label: "Abschnitte",
          label_singular: "Abschnitt",
          widget: "list",
          required: false,
          collapsed: true,
          fields: [
            Title(false),
            {
              name: "content",
              label: "Inhalt",
              required: true,
              ...MarkdownProps,
            },
          ],
        },
      ],
    },
    {
      name: "author-index",
      label: "Autoren",
      file: "content/author/_index.md",
      fields: [Title(false), DescriptionText],
    },
    {
      name: "anmeldeformular",
      label: "Anmeldeformular",
      file: "content/anmeldeformular/_index.md",
      fields: [
        Title(false),
        DescriptionText,
        {
          name: "body",
          label: "Inhalt",
          required: false,
          ...MarkdownProps,
        },
      ],
    },
    {
      name: "cantorpreis-index",
      label: "Cantorpreis",
      file: "content/cantorpreis/_index.md",
      fields: [Title(false), DescriptionText],
    },
    {
      name: "kontakt",
      label: "Kontakt",
      file: "content/kontakt/_index.md",
      fields: [
        Title(false),
        DescriptionText,
        {
          name: "kontaktdaten",
          label: "Kontaktdaten",
          widget: "list",
          required: true,
          collapsed: true,
          fields: [
            {
              name: "name",
              label: "Name",
              widget: "string",
              required: true,
            },
            {
              name: "position",
              label: "Berufsbezeichnung",
              widget: "string",
              required: true,
            },
            {
              name: "email",
              label: "E-Mail-Adresse",
              widget: "string",
              required: true,
              ...PatternEmail,
            },
          ],
        },
      ],
    },
    {
      name: "termine",
      label: "Termine",
      file: "content/termine/_index.md",
      fields: [
        Title(false),
        DescriptionText,
        {
          name: "events",
          label: "Termine",
          label_singular: "Termin",
          widget: "list",
          required: true,
          collapsed: true,
          fields: [
            {
              name: "title",
              label: "Bezeichnung",
              widget: "string",
              required: true,
            },
            {
              name: "date",
              label: "Datum/Startdatum",
              widget: "datetime",
              required: true,
              ...DateFormat,
            },
            {
              name: "enddate",
              label: "Enddatum",
              hint: "Für mehrtägige Veanstaltungen, nur sichtbar wenn eingestellt",
              widget: "datetime",
              required: false,
              default: "",
              ...DateFormat,
            },
            {
              name: "location",
              label: "Ort",
              widget: "string",
              required: false,
            },
            {
              name: "hidden",
              label: "Versteckt",
              hint: "Termin taucht nicht in der Liste auf",
              widget: "boolean",
              required: false,
              default: false,
            },
          ],
        },
      ],
    },
    {
      name: "forms-index",
      label: "Dokumente und Formulare",
      file: "content/forms/_index.md",
      fields: [Title(false), DescriptionText],
    },
    {
      name: "ganztagsangebote-index",
      label: "Unser Ganztagsbereich",
      file: "content/ganztagsangebote/_index.md",
      fields: [
        Title(false),
        DescriptionText,
        {
          name: "tiles",
          label: "Ganztagsangebote",
          hint: "Die Vorschau zeigt nur die Karten, NICHT die Inhalte.",
          widget: "list",
          required: false,
          collapsed: true,
          fields: [
            Title(false),
            {
              name: "image",
              label: "Titelbild",
              default: "/media/ganztagsangebote/image.webp",
              ...ImageProps,
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
              name: "content",
              label: "Inhalt",
              required: false,
              ...MarkdownProps,
            },
          ],
        },
      ],
    },
    {
      name: "projektwoche-index",
      label: "Projektwoche",
      file: "content/projektwoche/_index.md",
      fields: [Title(false), DescriptionText],
    },
    {
      name: "wettbewerbe-index",
      label: "Wettbewerbe",
      file: "content/wettbewerbe/_index.md",
      fields: [Title(false), DescriptionText],
    },
    {
      name: "begabte-index",
      label: "Begabtenförderung",
      file: "content/begabte/_index.md",
      fields: [Title(false), DescriptionText],
    },
    {
      name: "abiturienten-index",
      label: "Abiturienten",
      file: "content/abiturienten/_index.md",
      fields: [Title(false), DescriptionText],
    },
    {
      name: "cantorfora-index",
      label: "Cantorfora",
      file: "content/cantorfora/_index.md",
      fields: [
        Title(false),
        DescriptionText,
        {
          name: "body",
          label: "Inhalt",
          required: false,
          ...MarkdownProps,
        },
      ],
    },
    {
      name: "schulchronik-index",
      label: "Schulchronik",
      file: "content/schulchronik/_index.md",
      fields: [
        Title(false),
        DescriptionText,
        {
          name: "body",
          label: "Inhalt",
          required: false,
          ...MarkdownProps,
        },
        {
          name: "infocard",
          label: "Zitatkarte",
          ...DataObject,
          fields: [
            EnableBoolean,
            {
              name: "image",
              label: "Bild",
              ...ImageProps,
            },
            {
              name: "quote",
              label: "Zitat",
              widget: "text",
              required: false,
            },
            {
              name: "author",
              label: "Autor",
              widget: "string",
              required: false,
            },
          ],
        },
        {
          name: "links",
          label: "Informationsseiten",
          widget: "list",
          required: false,
          collapsed: true,
          fields: [
            {
              name: "title",
              label: "Bezeichnung",
              widget: "string",
              required: true,
            },
            {
              name: "link",
              label: "Link",
              widget: "string",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default IndexPagesCollection;
