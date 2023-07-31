import {
  Container,
  ContentJustify,
  PageHeader,
  Row,
  Section,
} from "./components/index.js";

const AnmeldungPreview = ({ widgetsFor, widgetFor, entry }) => {
  return [
    PageHeader(entry),
    Section(
      Container([
        ContentJustify(widgetFor("body")),
        Row(
          widgetsFor("elements").map(function (element, index) {
            return h(
              "div",
              {
                className: "col-lg-6 col-sm-6 mb-4 d-flex align-items-stretch",
              },
              h(
                "div",
                { className: "card rounded-0 hover-shadow border-primary" },
                h(
                  "div",
                  { className: "card-body" },
                  h("h4", { className: "card-title mb-3" }, element.data.title),
                  h("div", { className: "content" }, element.widgets.content)
                )
              )
            );
          })
        ),
      ])
    ),
  ];
};

export default AnmeldungPreview;
