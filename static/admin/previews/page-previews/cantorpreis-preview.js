import {
  PageHeader,
  Section,
  Container,
  Row,
  ContentJustify,
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
            { className: "col-md-5 mb-4" },
            h("img", {
              className: "img-fluid w-100",
              src: imageUrl,
            })
          ),
          h(
            "div",
            { className: "col-md-7" },
            h("h3", {}, entry.data.name),
            h("h6", { className: "text-body-secondary" }, entry.data.title),
            ContentJustify(widgetFor("body"))
          ),
        ])
      )
    ),
  ];
};

export default CantorpreisPreview;
