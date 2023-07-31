import {
  Container,
  ContentJustify,
  PageHeader,
  Row,
  Section,
} from "./components/index.js";

const AboutPreview = ({ widgetFor, widgetsFor, entry, fields, collection }) => {
  const imageField = useMemo(
    () => fields.find((field) => field.name === "image"),
    [fields]
  );

  const imageUrl = useMediaAsset(
    entry.data.image,
    collection,
    imageField,
    entry
  );
  return [
    PageHeader(entry),
    Section(
      Container([
        h("img", { className: "img-fluid w-100 mb-4", src: imageUrl }),
        ContentJustify(widgetFor("body")),
      ])
    ),
    entry.data.stats.enable
      ? h(
          "section",
          { className: "section bg-primary" },
          Container(
            Row(
              widgetsFor("stats").data.zahlen.map((element) => {
                return h(
                  "div",
                  { className: "col-md-4 col-sm-6 mb-4 mb-md-0" },
                  h(
                    "div",
                    { className: "text-center" },
                    h("h2", { className: "count text-white" }, element.count),
                    h("h5", { className: "text-white" }, element.name)
                  )
                );
              })
            )
          )
        )
      : null,
  ];
};

export default AboutPreview;
