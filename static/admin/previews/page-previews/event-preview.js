import {
  PageHeader,
  DateFormat,
  Section,
  Container,
} from "./components/index.js";

const EventPreview = ({ widgetsFor, entry }) => {
  return [
    PageHeader(entry),
    Section(
      Container([
        h(
          "ul",
          { className: "list-inline text-center filter-controls mb-5" },
          h(
            "li",
            { className: "list-inline-item m-3 text-uppercase active" },
            "Alle"
          ),
          h(
            "li",
            { className: "list-inline-item m-3 text-uppercase" },
            "Anstehend"
          ),
          h(
            "li",
            { className: "list-inline-item m-3 text-uppercase" },
            "Vergangen"
          )
        ),
        h(
          "div",
          { className: "filtr-container row" },
          widgetsFor("events").map((event) =>
            h(
              "div",
              { className: "filtr-item col-12" },
              h(
                "div",
                {
                  className: "card hover-shadow border-primary mb-4 p-0",
                },
                h(
                  "div",
                  { className: "row g-0" },
                  h(
                    "div",
                    {
                      className:
                        "col-md-3 text-center p-4 bg-primary text-white rounded",
                    },
                    h(
                      "span",
                      { className: "h2" },
                      event.data.date != null && event.data.date != ""
                        ? DateFormat({
                            date: event.data.date,
                            format: { day: "numeric" },
                          })
                        : null
                    ),
                    h(
                      "span",
                      {},
                      event.data.date != null && event.data.date != ""
                        ? DateFormat({
                            date: event.data.date,
                            format: { month: "short", year: "numeric" },
                          })
                        : null
                    ),
                    event.data.enddate != null && event.data.enddate != ""
                      ? [
                          h("br"),
                          "bis " +
                            DateFormat({
                              date: event.data.enddate,
                              format: {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              },
                            }),
                        ]
                      : null
                  ),
                  h(
                    "div",
                    { className: "col-md-9" },
                    h(
                      "div",
                      {
                        className:
                          "card-body h-100 d-flex flex-column justify-content-around",
                      },
                      h("h4", { className: "card-title" }, event.data.title),
                      event.data.location
                        ? h(
                            "div",
                            {
                              className: "card-text",
                            },
                            h("i", {
                              className:
                                "mdi mdi-map-marker-radius-outline icon-s text-primary me-2",
                            }),
                            event.data.location
                          )
                        : null
                    )
                  )
                )
              )
            )
          )
        ),
      ])
    ),
  ];
};

export default EventPreview;
