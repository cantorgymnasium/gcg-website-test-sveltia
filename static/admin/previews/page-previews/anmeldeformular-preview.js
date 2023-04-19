import { PageHeader } from "./components/index.js";

const AnmeldeformularPreview = ({ widgetFor, entry }) => {
	return [
		PageHeader(entry),
		h(
			"section",
			{ className: "section-sm bg-gray" },
			h(
				"div",
				{ className: "container" },
				h(
					"div",
					{ className: "row" },
					h(
						"div",
						{ className: "col-lg-8 mb-4 mb-lg-0" },
						h(
							"form",
							{},
							h(
								"div",
								{ className: "input-group" },
								h("input", {
									className: "form-control mb-3",
									type: "text",
									placeholder: "Name (Schüler/in)",
								}),
								h("input", {
									className: "form-control mb-3",
									type: "text",
									placeholder: "Vorname",
								})
							),
							h(
								"div",
								{ className: "input-group mb-3" },
								h("span", { className: "input-group-text" }, "Geburtsdatum"),
								h("input", { className: "form-control", type: "date" })
							),
							h("input", {
								className: "form-control mb-3",
								type: "text",
								placeholder: "Straße",
							}),
							h(
								"div",
								{ className: "input-group" },
								h("input", {
									className: "form-control mb-3",
									type: "text",
									placeholder: "Hausnummer",
								}),
								h("input", {
									className: "form-control mb-3",
									type: "text",
									placeholder: "Adresszusatz",
								})
							),
							h(
								"div",
								{ className: "input-group" },
								h("input", {
									className: "form-control mb-3",
									type: "text",
									placeholder: "PLZ",
								}),
								h("input", {
									className: "form-control mb-3",
									type: "text",
									placeholder: "Stadt",
								})
							),
							h("input", {
								className: "form-control mb-3",
								type: "text",
								placeholder: "Landkreis",
							}),
							h(
								"div",
								{ className: "input-group" },
								h("input", {
									className: "form-control mb-3",
									type: "text",
									placeholder: "Telefon privat",
								}),
								h("input", {
									className: "form-control mb-3",
									type: "text",
									placeholder: "Telefon dienstl.",
								})
							),
							h("input", {
								className: "form-control mb-3",
								type: "text",
								placeholder: "Abweichender Elternname",
							}),
							h("input", {
								className: "form-control mb-3",
								type: "text",
								placeholder: "Grundschule",
							}),
							h("input", {
								className: "form-control mb-3",
								type: "text",
								placeholder: "Ihre E-Mail-Adresse",
							}),
							h("textarea", {
								className: "form-control mb-3",
								placeholder: "Bemerkungen",
							}),
							h(
								"div",
								{ className: "input-group mb-3" },
								h("input", { className: "form-control", type: "file" }),
								h(
									"span",
									{ className: "input-group-text" },
									"Zeugnis (Vorderseite)"
								)
							),
							h(
								"div",
								{ className: "input-group mb-3" },
								h("input", { className: "form-control", type: "file" }),
								h(
									"span",
									{ className: "input-group-text" },
									"Zeugnis (Rückseite)"
								)
							),
							h(
								"div",
								{ className: "input-group mb-3" },
								h(
									"div",
									{ className: "input-group-text" },
									h("input", {
										className: "form-check-input",
										type: "checkbox",
									})
								),
								h(
									"p",
									{ className: "form-control mb-0" },
									"Hiermit melden wir unser Kind verbindlich zur Aufnahmeprüfung an."
								)
							),
							h("button", { className: "btn btn-primary" }, "Senden")
						)
					),
					h("div", { className: "col-lg-4" }, widgetFor("body"))
				)
			)
		),
	];
};

export default AnmeldeformularPreview;
