const StatsCollection = {
  name: "statistik",
  label: "Statistik",
  description:
    "Hier können statistische Daten bearbeitet werden. Dieser Bereich wird von der Schulchronik verwaltet.",
  icon: "stats",
  editor: {
    preview: false,
    size: "half",
  },
  files: [
    {
      name: "abiturdurchschnitte",
      label: "Abiturdurchschnitte",
      file: "assets/charts/abiturdurchschnitte.json",
      fields: [
        {
          name: "abiturdurchschnitte",
          label: "Abiturdurchschnitte",
          label_singular: "Jahr",
          widget: "list",
          required: false,
          fields: [
            {
              name: "jahr",
              label: "Jahr",
              widget: "number",
              value_type: "int",
              required: true,
            },
            {
              name: "schnitt",
              label: "Schnitt",
              widget: "number",
              value_type: "float",
              step: 0.01,
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "schuelerzahlen",
      label: "Schülerzahlen",
      file: "assets/charts/schuelerzahlen.json",
      fields: [
        {
          name: "schuelerzahlen",
          label: "Schülerzahlen",
          label_singular: "Jahr",
          widget: "list",
          required: false,
          fields: [
            {
              name: "year",
              label: "Jahr",
              widget: "number",
              value_type: "int",
              required: true,
            },
            {
              name: "all",
              label: "Gesamtzahl",
              widget: "number",
              value_type: "int",
              required: true,
            },
            {
              name: "girls",
              label: "davon Mädchen",
              widget: "number",
              value_type: "int",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default StatsCollection;
