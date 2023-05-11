import { DateFormat, MarkdownProps } from "../props.js";
import { EnableBoolean, Title } from "./widgets.js";

const SettingsCollection = {
    name: "settings",
    label: "Einstellungen",
    icon: "settings",
    description: "Hier können die Basiseinstellungen der Website geändert werden. Die meisten Bereiche müssen nur in Ausnahmefällen angepasst werden.",
    editor: {
        preview: false
    },
    files: [
        {
            name: "data-homepage",
            label: "Startseiteneinstellungen",
            file: "data/de/homepage.yml",
            fields: [
                {
                    name: "top_banner",
                    label: "Banner",
                    widget: "object",
                    collapsed: true,
                    summary: "{{fields.enable | ternary('aktiv', 'inaktiv')}}",
                    fields: [
                        EnableBoolean,
                        {
                            name: "text",
                            label: "Text",
                            widget: "markdown",
                            required: false,
                            ...MarkdownProps
                        },
                        {
                            name: "color",
                            label: "Farbe",
                            widget: "color",
                            required: false
                        },
                        {
                            name: "font_color",
                            label: "Schriftfarbe",
                            widget: "color",
                            required: false
                        },
                        {
                            name: "icon",
                            label: "Symbol",
                            widget: "string",
                            required: false,
                            hint: "Liste unter https://assets.cantorgymnasium.de/fonts/mdi/v7/preview.html"
                        },
                        {
                            name: "temporarily",
                            label: "Zeitschaltung",
                            widget: "object",
                            fields: [
                                EnableBoolean,
                                {
                                    name: "start_date",
                                    label: "Startdatum",
                                    widget: "datetime",
                                    ...DateFormat,
                                    required: false,
                                },
                                {
                                    name: "end_date",
                                    label: "Enddatum",
                                    widget: "datetime",
                                    ...DateFormat,
                                    required: false,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "slider",
                    label: "Karusell",
                    widget: "object",
                    collapsed: true,
                    summary: "{{fields.enable | ternary('aktiv', 'inaktiv')}}",
                    fields: [
                        EnableBoolean,
                        {
                            name: "bg_image",
                            label: "Hintergrundbild",
                            widget: "image",
                            required: false,
                        },
                        Title(true),
                        {
                            name: "slider_item",
                            label: "Elemente",
                            label_singular: "Element",
                            widget: "list",
                            collapsed: true,
                            fields: [
                                {
                                    name: "content",
                                    label: "Text",
                                    widget: "string",
                                    required: false
                                },
                                {
                                    name: "button",
                                    label: "Button",
                                    widget: "object",
                                    required: false,
                                    collapsed: true,
                                    fields: [
                                        EnableBoolean,
                                        {
                                            name: "label",
                                            label: "Aufschrift",
                                            widget: "string",
                                            required: false
                                        },
                                        {
                                            name: "link",
                                            label: "Link",
                                            widget: "string",
                                            required: false
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

export default SettingsCollection;