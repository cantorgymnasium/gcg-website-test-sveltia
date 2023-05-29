import {
  Col12,
  Container,
  PageHeader,
  Row,
  Section,
} from "./components/index.js";

const GanztagPreview = ({
  widgetFor,
  widgetsFor,
  entry,
  fields,
  collection,
}) => {
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
        Row(
          h(
            "div",
            { className: "col-12 mb-4" },
            h("img", { className: "img-fluid w-100", src: imageUrl })
          )
        ),
        h("h2", {}, entry.data.title),
        h(
          "div",
          { className: "row align-items-center mb-4" },
          Col12(
            Row([
              h(
                "div",
                { className: "col-lg-3 col-sm-6 mb-3 mb-sm-0" },
                h(
                  "div",
                  { className: "d-flex align-items-center" },
                  h("i", {
                    className:
                      "mdi mdi-calendar-today-outline text-primary icon-md me-2",
                  }),
                  h(
                    "div",
                    { className: "text-start" },
                    h("h6", { className: "mb-0" }, "ZEIT"),
                    h("p", { className: "mb-0" }, entry.data.schedule)
                  )
                )
              ),
              h(
                "div",
                { className: "col-lg-3 col-sm-6 mb-3 mb-sm-0" },
                h(
                  "div",
                  { className: "d-flex align-items-center" },
                  h("i", {
                    className: "mdi mdi-timer-sand text-primary icon-md me-2",
                  }),
                  h(
                    "div",
                    { className: "text-start" },
                    h("h6", { className: "mb-0" }, "DAUER"),
                    h("p", { className: "mb-0" }, entry.data.duration)
                  )
                )
              ),
              h(
                "div",
                { className: "col-lg-3 col-sm-6 mb-3 mb-sm-0" },
                h(
                  "div",
                  { className: "d-flex align-items-center" },
                  h("i", {
                    className: "mdi mdi-crowd text-primary icon-md me-2",
                  }),
                  h(
                    "div",
                    { className: "text-start" },
                    h("h6", { className: "mb-0" }, "KLASSE(N)"),
                    h("p", { className: "mb-0" }, entry.data.class)
                  )
                )
              ),
              h(
                "div",
                { className: "col-lg-3 col-sm-6 mb-3 mb-sm-0" },
                h(
                  "div",
                  { className: "d-flex align-items-center" },
                  h("i", {
                    className:
                      "mdi mdi-map-marker-radius-outline text-primary icon-md me-2",
                  }),
                  h(
                    "div",
                    { className: "text-start" },
                    h("h6", { className: "mb-0" }, "RAUM"),
                    h("p", { className: "mb-0" }, entry.data.room)
                  )
                )
              ),
            ])
          ),
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

export default GanztagPreview;
