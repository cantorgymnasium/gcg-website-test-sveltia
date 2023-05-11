const EnableBoolean = {
    name: "enable",
    label: "Aktivieren",
    widget: "boolean",
    required: false
};

const DraftBoolean = {
    name: "draft",
    label: "Entwurf",
    widget: "boolean",
    default: false,
    required: false
}

const Title = (optional = false) => ({
    name: "title",
    label: "Titel",
    widget: "string",
    required: !optional
});

const DescriptionText = {
    name: "description",
    label: "Beschreibung",
    widget: "text",
    required: false
};

export { EnableBoolean, DraftBoolean, Title, DescriptionText };