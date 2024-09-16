import { Container, ContentJustify, PageHeader, Row } from "./components/index.js";

const ProjektwochePreview = ({ widgetsFor, widgetFor, entry, collection, fields }) => {
  const imageField = useMemo(() => fields.find((field) => field.name === "image"), [fields]);
  return [
    PageHeader(entry),
    h(
      "section",
      { className: "section superhaufen" },
      Container(ContentJustify(widgetFor("body"))),
      Container(
        Row([
          widgetsFor("tiles").map((tile) =>
            h(
              "div",
              { className: "col-lg-4 col-sm-6" },
              h(
                "div",
                {
                  className: "card border-primary rounded-0 hover-shadow mb-4",
                },
                tile.data.image && tile.data.image != "" && tile.data.image != "/media/image.webp"
                  ? h("img", {
                      className: "card-img-top rounded-0",
                      src: useMediaAsset(tile.data.image, collection, imageField, entry),
                    })
                  : h(
                      "div",
                      {
                        className: "container fb-tile-color",
                        style: { backgroundColor: tile.data.bg_color },
                      },
                      h("i", {
                        className: (tile.data.icon ?? "") + " fb-tile-icon",
                        style: { color: tile.data.font_color },
                      })
                    ),
                h(
                  "div",
                  { className: "card-body" },
                  h("h4", { className: "card-title text-truncate" }, tile.data.title),
                  h("button", { type: "button", className: "btn btn-primary btn-sm" }, "Mehr anzeigen")
                )
              )
            )
          ),
        ])
      )
    ),
  ];
};

export default ProjektwochePreview;
