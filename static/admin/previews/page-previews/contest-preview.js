import { Container, PageHeader, Row, Section } from "./components/index.js";

const ContestPreview = ({ widgetFor, entry, fields, collection }) => {
	const imageField = useMemo(() => {
		return fields.find((field) => field.name === "image");
	}, [fields]);

	const imageUrl = useMediaAsset(
		entry.data.image,
		collection,
		imageField,
		entry
	);
	return [
		PageHeader(entry),
		Section(
			Container([
				entry.data.image &&
				!["/media/contests/image.webp", "/media/begabte/image.webp"].includes(
					entry.data.image
				)
					? Row(
							h(
								"div",
								{ className: "col-12 mb-4" },
								h("img", { className: "img-fluid w-100", src: imageUrl })
							)
					  )
					: null,
				h(
					"div",
					{ className: "row mb-4" },
					h(
						"div",
						{ className: "col-7" },
						h(
							"div",
							{ className: "d-flex align-items-center" },
							h("i", { className: "mdi mdi-crowd text-primary icon-md me-2" }),
							h(
								"div",
								{ className: "text-start" },
								h("h6", { className: "mb-0" }, "KLASSE(N)"),
								h("p", { className: "mb-0" }, entry.data.class)
							)
						)
					),
					entry.data.web_url
						? h(
								"div",
								{ className: "col-5 text-end mb-4 mb-xl-0" },
								h("a", { className: "btn btn-primary" }, "Website")
						  )
						: null,
					h(
						"div",
						{ className: "col-12 mt-4" },
						h("div", { className: "border-bottom border-primary" })
					)
				),
				Row(h("div", { className: "col-12 content" }, widgetFor("body"))),
			])
		),
	];
};

export default ContestPreview;
