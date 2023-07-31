import {
  Container,
  ContentJustify,
  PageHeader,
  Section,
} from "./components/index.js";

const FormsPreview = ({ widgetsFor, widgetFor, entry }) => {
  return [
    PageHeader(entry),
    Section(
      Container([
        h("h2", { className: "mb-4" }, entry.data.title),
        ContentJustify([
          widgetsFor("files").map((file) =>
            h(
              "div",
              {
                className: "card border-primary rounded-0 hover-shadow mb-2",
              },
              h(
                "div",
                { className: "card-body mb-0" },
                h("h4", { className: "card-title" }, file.data.title),
                h(
                  "a",
                  {
                    className:
                      "text-decoration-none btn btn-primary btn-sm mb-0",
                  },
                  h("i", {
                    className: "mdi mdi-tray-arrow-down me-2",
                  }),
                  "Download"
                )
              )
            )
          ),
          widgetFor("body"),
        ]),
      ])
    ),
  ];
};

export default FormsPreview;
