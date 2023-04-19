const DatePreview = ({ value }) =>
	h(
		"p",
		{},
		new Intl.DateTimeFormat("de-DE", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour12: false,
		}).format(new Date(value))
	);
