import { PageHeader } from "./components/index.js";

const ChronikIndexPreview = ({
  widgetFor,
  widgetsFor,
  entry,
  fields,
  collection,
}) => {
  const imageField = useMemo(
    () => fields.find((field) => field.name === "image"),
    [fields]
  );

  const imageUrl = useMediaAsset(
    widgetsFor("infocard").data.image,
    collection,
    imageField,
    entry
  );
  return [
    PageHeader(entry),
    h(
      "section",
      { className: "section-sm" },
      h("div", { className: "container" }, widgetFor("body")),
      widgetsFor("infocard").data.enable
        ? h(
            "div",
            { className: "container" },
            h(
              "div",
              { className: "card mb-3" },
              h(
                "div",
                { className: "row g-0" },
                h(
                  "div",
                  { className: "col-md-3" },
                  h("img", {
                    className: "img-fluid rounded w-100",
                    src: imageUrl,
                  })
                ),
                h(
                  "div",
                  { className: "col-md-9 d-flex align-items-center" },
                  h(
                    "div",
                    { className: "card-body" },
                    h(
                      "p",
                      { className: "h2 card-title" },
                      widgetsFor("infocard").data.quote
                    ),
                    h(
                      "p",
                      { className: "card-text" },
                      h(
                        "small",
                        { className: "text-muted" },
                        widgetsFor("infocard").data.author
                      )
                    )
                  )
                )
              )
            )
          )
        : null,
      h(
        "div",
        { className: "container" },
        h("h2", { className: "section-title" }, "Informationsseiten"),
        h(
          "div",
          { className: "row" },
          widgetsFor("links").map((element) =>
            h(
              "div",
              { className: "col-lg-4 col-sm-6" },
              h(
                "div",
                {
                  className: "card border-primary rounded-0 hover-shadow mb-4",
                },
                h(
                  "div",
                  { className: "card-body" },
                  h(
                    "h4",
                    { className: "card-title text-truncate" },
                    h("a", { href: element.data.link }, element.data.title)
                  ),
                  h(
                    "a",
                    {
                      className: "btn btn-primary btn-sm",
                      href: element.data.link,
                    },
                    "Mehr anzeigen"
                  )
                )
              )
            )
          )
        )
      )
    ),
  ];
};

export default ChronikIndexPreview;
