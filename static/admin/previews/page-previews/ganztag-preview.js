import {
  Container,
  ContentJustify,
  PageHeader,
  Section,
} from "./components/index.js";

const GanztagPreview = ({
  widgetFor,
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
        h("img", { className: "img-fluid w-100 mb-4", src: imageUrl }),
        h("h2", {}, entry.data.title),
        h(
          "div",
          { className: "row mb-4" },
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
                h("h6", { className: "mb-0 text-uppercase" }, "Zeit"),
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
                h("h6", { className: "mb-0 text-uppercase" }, "Dauer"),
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
                h("h6", { className: "mb-0 text-uppercase" }, "Klassen"),
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
                h("h6", { className: "mb-0 text-uppercase" }, "Raum"),
                h("p", { className: "mb-0" }, entry.data.room)
              )
            )
          )
        ),
        h("hr", { className: "mb-4" }),
        ContentJustify(widgetFor("body")),
      ])
    ),
  ];
};

export default GanztagPreview;
