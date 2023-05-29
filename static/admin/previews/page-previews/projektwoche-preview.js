import { Container, PageHeader, Row, Section } from "./components/index.js";

const ProjektwochePreview = ({ widgetsFor, widgetFor, entry }) => {
  return [
    PageHeader(entry),
    Section([
      Container(
        Row(h("div", { className: "col-12 mb-4 content" }, widgetFor("body")))
      ),
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
                h(
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
                  h(
                    "h4",
                    { className: "card-title text-truncate" },
                    tile.data.title
                  ),
                  h(
                    "button",
                    { type: "button", className: "btn btn-primary btn-sm" },
                    "Mehr anzeigen"
                  )
                )
              )
            )
          ),
        ])
      ),
    ]),
  ];
};

export default ProjektwochePreview;
