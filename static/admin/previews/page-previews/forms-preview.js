import { PageHeader } from "./components/index.js";

const FormsPreview = ({ widgetsFor, widgetFor, entry }) => {
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
            h("h2", { className: "mb-4" }, entry.data.title)
          )
        ),
        h(
          "div",
          { className: "row" },
          h(
            "div",
            { className: "col-12 content" },
            widgetsFor("files").map((file) =>
              h(
                "div",
                { className: "container mb-0" },
                h(
                  "div",
                  {
                    className:
                      "card border-primary rounded-0 hover-shadow mb-5",
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
                        className: "mdi mdi-tray-arrow-down mb-0 me-2",
                      }),
                      "Download"
                    )
                  )
                )
              )
            ),
            widgetFor("body")
          )
        )
      )
    ),
  ];
};

export default FormsPreview;
