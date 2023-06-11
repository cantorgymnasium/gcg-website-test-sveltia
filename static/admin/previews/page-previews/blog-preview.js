import {
  DateFormat,
  PageHeader,
  Section,
  Container,
  Col12,
  Row,
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
      Container(
        Row([
          h(
            "div",
            { key: "cover-image", className: "col-12 mb-4" },
            h("img", { className: "img-fluid w-100", src: imageUrl })
          ),
          Col12(
            h(
              "div",
              { className: "row mb-3" },
              h(
                "div",
                { className: "col-6 mb-md-0 text-body-tertiary" },
                h("span", { className: "fw-bold me-1" }, "Geschrieben von:"),
                widgetFor("author")
              ),
              h(
                "div",
                { className: "col-6 mb-3 mb-md-0 text-body-tertiary" },
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
              )
            )
          ),
          Row(
            h(
              "div",
              { className: "col-12 mb-md-0 text-body-tertiary" },
              h("span", { className: "fw-bold me-1" }, "Kategorie:"),
              entry.data.categories
                ? entry.data.categories.map(
                    (category, index) => (index != 0 ? ", " : "") + category
                  )
                : ""
            )
          ),
          h(
            "div",
            { key: "border-bottom", className: "col-12 my-4" },
            h("div", { className: "border-bottom" })
          ),
          h(
            "div",
            {
              key: "body-content",
              className: "col-12 mb-5 content text-justify",
            },
            widgetFor("body")
          ),
        ])
      )
    ),
  ];
};

export default BlogPreview;
