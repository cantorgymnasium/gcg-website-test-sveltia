import { Container, PageHeader, Section, Row } from "./components/index.js";

const AbiturientenPreview = ({ widgetFor, entry, collection, fields }) => {
	const imageField = useMemo(
		() => fields.find((field) => field.name === "image"),
		[fields]
	);

	const imageUrl = useMediaAsset(
		entry.data.image,
		collection,
		imageField,
		entry
	);
	return [
		PageHeader(entry),
		Section(
			Container(
				Row([
					h(
						"div",
						{ className: "col-12 mb-4" },
						h("img", { className: "img-fluid w-100", src: imageUrl })
					),
					h("div", { className: "col-12 content" }, widgetFor("body")),
				])
			)
		),
	];
};

export default AbiturientenPreview;
