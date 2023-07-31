import {
  Container,
  PageHeader,
  Section,
  ContentJustify,
} from "./components/index.js";

const AbiturientenPreview = ({ widgetFor, entry, collection, fields }) => {
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
  ];
};

export default AbiturientenPreview;
