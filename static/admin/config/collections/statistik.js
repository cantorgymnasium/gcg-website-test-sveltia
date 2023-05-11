const StatistikCollection = {
    name: "statistik",
    label: "Statistik",
    description: "Hier können statistische Daten bearbeitet werden. Dieser Bereich wird von der Schulchronik verwaltet.",
    icon: "stats",
    editor: {
        preview: false
    },
    files: [
        {
            name: "abiturdurchschnitte",
            label: "Abiturdurchschnitte",
            file: "static/data/abiturdurchschnitte.json",
            fields: [
                {
                    name: "abiturdurchschnitte",
                    label: "Abiturdurchschnitte",
                    label_singular: "Abiturdurchschnitt",
                    widget: "list",
                    required: false,
                    fields: [
                        {
                            name: "jahr",
                            label: "Jahr",
                            widget: "number",
                            value_type: "int",
                            step: 1,
                            required: true
                        },
                        {
                            name: "schnitt",
                            label: "Schnitt",
                            widget: "number",
                            value_type: "float",
                            step: 0.01,
                            required: true
                        }
                    ]
                },
                {
                    name: "schuelerzahlen",
                    label: "Schülerzahlen",
                    file: "static/data/schuelerzahlen.json",
                    fields: [
                        {
                            name: "schuelerzahlen",
                            label: "Schülerzahlen",
                            widget: "list",
                            required: false,
                            fields: [
                                {
                                    name: "year",
                                    label: "Jahr",
                                    widget: "number",
                                    required: true
                                },
                                {
                                    name: "all",
                                    label: "Gesamt",
                                    widget: "number",
                                    required: true
                                },
                                {
                                    name: "girls",
                                    label: "davon Mädchen",
                                    widget: "number",
                                    required: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

export default StatistikCollection;