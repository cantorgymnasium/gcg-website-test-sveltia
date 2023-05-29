import { Card, TextField } from "./components/index.js";

const YoutubeShortcode = {
  label: "YouTube-Video",
  openTag: "{{< ",
  closeTag: " >}}",
  separator: " ",
  toProps: (args) => {
    if (args.length > 0) {
      return { src: args[0] };
    }

    return { src: "" };
  },
  toArgs: ({ src }) => {
    return [src];
  },
  control: ({ src, onChange }) => {
    return Card(
      [
        TextField({
          label: "YouTube-Video-ID",
          value: src,
          onChange: (event) => {
            onChange({ src: event.target.value });
          },
        }),
        h(
          "iframe",
          {
            width: "100%",
            height: "360",
            src: `https://piped.kavin.rocks/embed/${src}`,
            className: "px-3 pt-3",
          },
          ""
        ),
      ],
      { vertical: true }
    );
  },
  preview: ({ src }) => {
    return h(
      "span",
      {},
      h(
        "iframe",
        {
          width: "420",
          height: "315",
          src: `https://piped.kavin.rocks/embed/${src}`,
        },
        ""
      )
    );
  },
};

export default YoutubeShortcode;
