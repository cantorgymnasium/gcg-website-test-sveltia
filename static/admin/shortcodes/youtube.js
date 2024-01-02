import { Card, TextField, Label } from "./components.js";

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
        Label("YouTUbe-Video"),
        TextField({
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
            style: {
              paddingLeft: "0.75rem",
              paddingRight: "0.75rem",
              paddingTop: "0.75rem",
            },
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
