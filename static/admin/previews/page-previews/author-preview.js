import { Container, PageHeader, Section, md5 } from "./components/index.js";

const AuthorPreview = ({ widgetFor, entry, fields, collection }) => {
  const imageField = useMemo(
    () => fields.find((field) => field.name === "image"),
    [fields]
  );

  const imageUrl = entry.data.image
    ? useMediaAsset(entry.data.image, collection, imageField, entry)
    : entry.data.email
    ? undefined
    : useMediaAsset("/media/people/gcg.webp", collection, imageField, entry);

  return [
    PageHeader(entry),
    Section(
      Container([
        h(
          "div",
          { className: "text-center" },
          h("img", {
            className: "rounded-circle img-fluid mb-4",
            src:
              imageUrl ??
              "https://www.gravatar.com/avatar/" +
                md5(entry.data.email) +
                "?s=128&pg&d=identicon",
            width: "128px",
            height: "128px",
          }),
          h("h4", { className: "fw-bold" }, entry.data.title),
          h("hr"),
          widgetFor("body"),
          h("hr"),
          entry.data.email ? h("i", { className: "mdi mdi-at" }) : null
        ),
      ])
    ),
  ];
};

export default AuthorPreview;
