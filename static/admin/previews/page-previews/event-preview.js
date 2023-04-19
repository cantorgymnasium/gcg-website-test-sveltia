import { PageHeader, DateFormat } from "./components/index.js";

function isFuture(date, enddate) {
	let date1 = new Date(date ? date : 0);
	let date2 = new Date(enddate ? enddate : 0);
	let present = new Date();
	if (date1 >= present || date2 >= present) {
		return true;
	} else {
		return false;
	}
}

const EventPreview = ({ widgetsFor, entry }) => {
	return [
		PageHeader(entry),
		h(
			"section",
			{ className: "section-sm" },
			h(
				"div",
				{ className: "container" },
				h(
					"div",
					{ className: "row" },
					h(
						"div",
						{ className: "col-12" },
						h(
							"div",
							{ className: "row" },
							h(
								"div",
								{ className: "col-12" },
								h(
									"ul",
									{ className: "list-inline text-center filter-controls mb-5" },
									h(
										"li",
										{ className: "list-inline-item m-3 text-uppercase active" },
										"Alle"
									),
									h(
										"li",
										{ className: "list-inline-item m-3 text-uppercase" },
										"Anstehend"
									),
									h(
										"li",
										{ className: "list-inline-item m-3 text-uppercase" },
										"Vergangen"
									)
								)
							)
						),
						h(
							"div",
							{ className: "filtr-container" },
							widgetsFor("events").map((event) =>
								h(
									"div",
									{ className: "mb-2 mt-2 col-12 filtr-item" },
									h(
										"div",
										{
											className:
												"card d-md-table w-100 hover-shadow border-primary ps-0 pe-0 mb-4",
										},
										h(
											"div",
											{
												className:
													"d-md-table-cell text-center p-4 bg-primary text-white mb-4 mb-md-0 termin-tc rounded",
											},
											h(
												"span",
												{ className: "h2 d-block" },
												event.data.date != null && event.data.date != ""
													? DateFormat({
															date: event.data.date,
															format: { day: "numeric" },
													  })
													: null
											),
											h(
												"span",
												{ className: "d-block" },
												event.data.date != null && event.data.date != ""
													? DateFormat({
															date: event.data.date,
															format: { month: "short", year: "numeric" },
													  })
													: null
											),
											event.data.enddate != null && event.data.enddate != ""
												? [
														h("br"),
														"bis " +
															DateFormat({
																date: event.data.enddate,
																format: {
																	day: "numeric",
																	month: "short",
																	year: "numeric",
																},
															}),
												  ]
												: null
										),
										h(
											"div",
											{
												className:
													"d-md-table-cell px-4 vertical-align-middle mb-4 mb-md-0 p-2",
											},
											h("p", { className: "h4 mb-0 d-block" }, event.data.title)
										),
										event.data.location
											? h(
													"div",
													{
														className:
															"d-md-table-cell text-end pe-md-4 p-2 vertical-align-middle",
													},
													h(
														"p",
														{},
														h("i", {
															className:
																"mdi mdi-map-marker-radius-outline icon-s text-primary me-2",
														}),
														event.data.location
													)
											  )
											: null
									)
								)
							)
						)
					)
				)
			)
		),
	];
};

export default EventPreview;
