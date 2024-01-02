import { PageHeader } from "./components/index.js";

const ChronikPreview = ({ widgetFor, widgetsFor, entry, document, window }) => {
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
          { className: "card-group" },
          h(
            "div",
            { className: "card d-flex flex-row flex-wrap" },
            h("img", {
              src: "https://cantorgymnasium.de/media/people/gcg.webp",
              className: "rounded-circle object-cover m-3",
              width: "128px",
              height: "128px",
            }),
            h(
              "div",
              { className: "flex-grow card-body min-w-0" },
              h("h3", { className: "card-title" }, "Cantorpreisträger"),
              h(
                "p",
                { className: "h4 card-text" },
                widgetFor("cantorpreisträger")
              )
            )
          ),
          h(
            "div",
            { className: "card d-flex flex-row flex-wrap-reverse" },
            h(
              "div",
              { className: "flex-grow card-body min-w-0" },
              h(
                "h3",
                { className: "card-title" },
                "Abiturienten " + entry.data.title
              ),
              h("p", { className: "h4 card-text" }, "Abiturdurchschnitt: 0.00")
            ),
            h("img", {
              src: "https://cantorgymnasium.de/media/people/gcg.webp",
              className: "rounded-circle object-cover m-3",
              width: "128px",
              height: "128px",
            })
          )
        ),
        h(
          "div",
          { className: "kh-parent" },
          h(
            "div",
            { className: "kh-jahr h1" },
            h("span", {}, entry.data.title)
          ),
          widgetsFor("topics")
            .sort((a, b) => b.data.title.length - a.data.title.length)
            .map((topic, index) =>
              h(
                "div",
                { className: "kh h3", "data-id": `${index}` },
                h("span", {}, topic.data.title)
              )
            )
        )
      )
    ),
  ];
};

export default ChronikPreview;
