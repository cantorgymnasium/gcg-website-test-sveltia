import { DataObject } from "../props.js";

const EnableBoolean = {
  name: "enable",
  label: "Aktivieren",
  widget: "boolean",
  required: false,
};

const DisableBoolean = {
  name: "disable",
  label: "Deaktivieren",
  widget: "boolean",
  required: false,
};

const DraftBoolean = {
  name: "draft",
  label: "Entwurf",
  widget: "boolean",
  default: false,
  required: false,
};

const Title = (optional = false) => ({
  name: "title",
  label: "Titel",
  widget: "string",
  required: !optional,
});

const DescriptionText = {
  name: "description",
  label: "Beschreibung",
  widget: "text",
  required: false,
};

const IconList = {
  name: "icon",
  label: "Symbol",
  widget: "string",
  required: false,
  hint: "Liste unter https://assets.cantorgymnasium.de/fonts/mdi/v7/preview.html",
};

const PreviewNumber = {
  name: "number",
  label: "Anzahl",
  hint: "Anzahl der Elemente, die auf der Startseite angezeigt werden sollen.",
  widget: "number",
  value_type: "int",
  min: 0,
  step: 1,
  required: true,
};

const ButtonObject = {
  name: "button",
  label: "Button",
  ...DataObject,
  fields: [
    EnableBoolean,
    {
      name: "label",
      label: "Aufschrift",
      widget: "string",
      required: false,
    },
    {
      name: "link",
      label: "Link",
      widget: "string",
      required: false,
    },
  ],
};

const AuthorRelation = {
  name: "author",
  label: "Autor(en)",
  hint: "Verwaltet im Autoren-Bereich. Mehrere Autoren werden in alphabetischer Reihenfolge aufgelistet.",
  widget: "relation",
  collection: "author",
  value_field: "{{slug}}",
  search_fields: ["title"],
  display_fields: ["{{title}}"],
  multiple: true,
  required: true,
  options_length: 10000,
};

export {
  EnableBoolean,
  DisableBoolean,
  DraftBoolean,
  Title,
  DescriptionText,
  IconList,
  PreviewNumber,
  ButtonObject,
  AuthorRelation,
};
