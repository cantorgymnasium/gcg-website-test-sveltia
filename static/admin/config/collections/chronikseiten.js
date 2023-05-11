import { MarkdownProps } from "../props.js";
import { DescriptionText, DraftBoolean, Title } from "./widgets.js";

const ChronikseitenCollection = {
    name: "chronikseiten",
    label: "Chronikseiten",
    label_singular: "Zusatzseite (Chronik)",
    description: "Chronikseiten entsprechen von der Funktionalität herkömmlichen Zusatzseiten, sind allerdings der Schulchronik vorbehalten.",
    icon: "page-add",
    folder: "content/german/chronikseiten",
    create: true,
    editor: {
        preview: true,
        frame: true
    },
    filter: {
        field: "type",
        value: "pages"
    },
    summary_fields: ["title", "draft", "aliases", "body"],
    fields: [
        Title(false),
        DraftBoolean,
        DescriptionText,
        {
            name: "type",
            label: "Typ",
            widget: "hidden",
            default: "pages"
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
                    widget: "string"
                }
            ]
        },
        {
            name: "body",
            label: "Text",
            widget: "markdown",
            required: false,
            ...MarkdownProps
        }
    ]
}

export default ChronikseitenCollection;