import {
  PageHeader,
  Section,
  Container,
  Row,
  Content,
} from "./components/index.js";

const CantorpreisPreview = ({ widgetFor, entry, fields, collection }) => {
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
            { className: "col-md-5 mb-5" },
            h("img", {
              className: "img-fluid w-75",
              src: imageUrl,
              alt: entry.data.name,
            })
          ),
          h(
            "div",
            { className: "col-md-7 mb-5" },
            h("h3", {}, entry.data.name),
            h("h6", { className: "text-body-secondary" }, entry.data.title),
            Content(widgetFor("body"))
          ),
        ])
      )
    ),
  ];
};

export default CantorpreisPreview;
