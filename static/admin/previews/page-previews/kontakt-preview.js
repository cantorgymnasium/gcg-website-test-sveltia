import { PageHeader } from "./components/index.js";

const KontaktPreview = ({ widgetsFor, entry }) => {
  return [
    PageHeader(entry),
    h(
      "section",
      { className: "section bg-body-tertiary" },
      h(
        "div",
        { className: "container" },
        h(
          "div",
          { className: "row" },
          h(
            "div",
            { className: "col-lg-6 mb-4 mb-lg-0" },
            h(
              "form",
              {},
              h("input", {
                className: "form-control form-control-lg mb-3",
                type: "text",
                placeholder: "Ihr Name",
              }),
              h("input", {
                className: "form-control form-control-lg mb-3",
                type: "text",
                placeholder: "Ihre E-Mail Adresse",
              }),
              h("input", {
                className: "form-control form-control-lg mb-3",
                type: "text",
                placeholder: "Betreff",
              }),
              h("textarea", {
                className: "form-control form-control-lg mb-3",
                placeholder: "Nachricht",
              }),
              h("button", { className: "btn btn-primary" }, "Senden")
            )
          ),
          h(
            "div",
            { className: "col-lg-6" },
            h(
              "div",
              { className: "card" },
              h("div", { className: "card-header fw-bold" }, "Kontaktdaten"),
              h(
                "ul",
                { className: "list-group list-group-flush" },
                widgetsFor("kontaktdaten").map((person) =>
                  h(
                    "li",
                    { className: "list-group-item" },
                    h("p", { className: "card-title mb-0" }, person.data.name),
                    h(
                      "p",
                      { className: "text-muted mb-0" },
                      person.data.position
                    ),
                    h(
                      "p",
                      { className: "card-text" },
                      h("i", {
                        className: "mdi mdi-email-multiple-outline me-2",
                      }),
                      person.data.email.replace("@", "(at)")
                    )
                  )
                ),
                h(
                  "li",
                  { className: "list-group-item" },
                  h(
                    "p",
                    { className: "card-text" },
                    h("i", { className: "mdi mdi-phone-outline me-2" }),
                    "Telefon: +49-0345/6903156"
                  ),
                  h(
                    "p",
                    { className: "card-text" },
                    h("i", { className: "mdi mdi-fax me-2" }),
                    "Fax: +49-0345/6903157"
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

export default KontaktPreview;
