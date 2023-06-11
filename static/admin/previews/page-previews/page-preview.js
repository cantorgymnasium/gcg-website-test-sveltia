import { PageHeader } from "./components/index.js";

const PagePreview = ({ widgetFor, entry }) => {
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
            h("div", { className: "content" }, widgetFor("body"))
          )
        )
      )
    ),
  ];
};

export default PagePreview;
