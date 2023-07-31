import {
  DateFormat,
  PageHeader,
  Section,
  Container,
} from "./components/index.js";

const BlogPreview = ({ widgetFor, entry, fields, collection }) => {
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
        h("img", { className: "img-fluid w-100 mb-4", src: imageUrl }),
        h(
          "div",
          { className: "d-flex flex-wrap gap-2 justify-content-between" },
          h(
            "div",
            { className: "text-body-secondary" },
            h("span", { className: "fw-bold me-1" }, "Geschrieben von:"),
            widgetFor("author")
          ),
          h(
            "div",
            { className: "text-body-secondary" },
            h("span", { className: "fw-bold me-1" }, "Datum:"),
            entry.data.date
              ? DateFormat({
                  date: entry.data.date,
                  format: {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  },
                })
              : ""
          ),
          h(
            "div",
            { className: "text-body-secondary" },
            h("span", { className: "fw-bold me-1" }, "Kategorien:"),
            entry.data.categories
              ? entry.data.categories.map(
                  (category, index) => (index != 0 ? ", " : "") + category
                )
              : ""
          )
        ),
        h("div", { className: "border-bottom my-4" }),
        h(
          "div",
          {
            className: "content text-justify mb-4",
          },
          widgetFor("body")
        ),
      ])
    ),
  ];
};

export default BlogPreview;
