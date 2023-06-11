import { PageHeader } from "./components/index.js";

const AboutPreview = ({ widgetFor, widgetsFor, entry, fields, collection }) => {
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
    h(
      "section",
      { className: "section" },
      h(
        "div",
        { className: "container" },
        h(
          "div",
          { className: "row" },
          h(
            "div",
            { className: "col-12" },
            h("img", { className: "img-fluid w-100 mb-4", src: imageUrl }),
            widgetFor("body")
          )
        )
      )
    ),
    entry.data.stats.enable
      ? h(
          "section",
          { className: "section bg-primary" },
          h(
            "div",
            { className: "container" },
            h(
              "div",
              { className: "row" },
              widgetsFor("stats").data.zahlen.map((element) => {
                return h(
                  "div",
                  { className: "col-md-4 col-sm-6 mb-4 mb-md-0" },
                  h(
                    "div",
                    { className: "text-center" },
                    h("h2", { className: "count text-white" }, element.count),
                    h("h5", { className: "text-white" }, element.name)
                  )
                );
              })
            )
          )
        )
      : null,
  ];
};

export default AboutPreview;
