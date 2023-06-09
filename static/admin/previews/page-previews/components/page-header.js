const PageHeader = (entry) => {
  return h(
    "section",
    {
      key: "page-header",
      className: "page-title-section overlay",
      style: {
        backgroundImage:
          'url("/media/titelbild.webp"),url("/media/titelbild.webp")',
      },
    },
    h(
      "div",
      { className: "container" },
      h(
        "div",
        { className: "row" },
        h(
          "div",
          { className: "col-md-8 position-relative" },
          h(
            "ul",
            { className: "list-inline" },
            h(
              "li",
              { className: "list-inline-item h2" },
              h(
                "font",
                { className: "text-primary font-header", href: "" },
                "Startseite"
              )
            ),
            h(
              "li",
              { className: "list-inline-item h2" },
              h("i", { className: "mdi mdi-chevron-double-right text-white" })
            ),
            h(
              "li",
              { className: "list-inline-item text-white h2 font-header" },
              entry.data.title
            )
          ),
          h("p", { className: "text-white text-opacity-75" }, entry.data.description)
        )
      )
    )
  );
};

export default PageHeader;
