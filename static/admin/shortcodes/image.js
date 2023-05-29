import { Card, Image } from "./components/index.js";
import { md5 } from "../previews/page-previews/components/index.js";

const ImageShortcode = {
  label: "Bild",
  openTag: "{{< ",
  closeTag: " >}}",
  separator: " ",
  toProps: (args) => {
    if (args.length > 0) {
      return {
        src:
          args
            .find((arg) => arg.startsWith("src="))
            ?.split("=")[1]
            .replaceAll('"', "") ?? "",
      };
    }

    return { src: "" };
  },
  toArgs: ({ src }) => {
    return [`src=\"${src}\"`];
  },
  control: ({ src, onChange, controlProps }) => {
    const { collection, field, entry } = controlProps;

    const handleChange = ({ path }) => {
      onChange({ src: path });
    };

    const handleOpenMediaLibrary = useMediaInsert(
      src,
      { collection, field },
      handleChange
    );
    const assetSource = useMediaAsset(src, collection, field, entry);

    return Card(
      Image({
        label: "Bild",
        assetSource,
        handleOpenMediaLibrary,
      })
    );
  },
  preview: ({ src }) => {
    return h(
      "div",
      { className: "col-lg-3 col-md-4 col-sm-6" },
      h(
        "a",
        { className: "vb-gallery", "data-gall": md5(src) },
        h("img", {
          className: "img-thumbnail w-100 h-100",
          style: { objectFit: "cover" },
          src,
        })
      )
    );
  },
};

export default ImageShortcode;
