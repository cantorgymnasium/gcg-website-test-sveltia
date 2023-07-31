import {
  Container,
  ContentJustify,
  PageHeader,
  Section,
} from "./components/index.js";

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
        entry.data.image && entry.data.image != "/media/image.webp"
          ? h("img", { className: "img-fluid w-100 mb-4", src: imageUrl })
          : null,
        h(
          "div",
          { className: "d-flex justify-content-between mb-4" },
          h(
            "div",
            { className: "d-flex align-items-center" },
            h("i", { className: "mdi mdi-crowd text-primary icon-md me-2" }),
            h(
              "div",
              { className: "text-start" },
              h("h6", { className: "mb-0 text-uppercase" }, "Klassen"),
              h("p", { className: "mb-0" }, entry.data.class)
            )
          ),
          entry.data.web_url
            ? h("a", { className: "btn btn-primary" }, "Website")
            : null
        ),
        h("hr"),
        ContentJustify(widgetFor("body")),
      ])
    ),
  ];
};

export default ContestPreview;
