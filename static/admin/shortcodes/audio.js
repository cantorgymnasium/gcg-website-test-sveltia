import { Card, TextField } from "./components/index.js";

const AudioShortcode = {
  label: "Audiodatei",
  openTag: "{{< ",
  closeTag: " >}}",
  separator: " ",
  toProps: (args) => {
    if (args.length > 0) {
      const src =
        args
          .find((arg) => arg.startsWith("src="))
          ?.split("=")[1]
          .replaceAll('"', "") ?? "";
      return { src: src };
    }
    return { src: "" };
  },
  toArgs: ({ src }) => {
    return [`src=\"${src}\"`];
  },
  control: ({ src, onChange, controlProps }) => {
    const { collection, field } = controlProps;

    const handleChange = ({ path }) => {
      onChange({ src: path });
    };

    const handleOpenMediaLibrary = useMediaInsert(
      src,
      { collection, field },
      handleChange
    );

    return Card([
      TextField({
        label: "Audiodatei",
        value: src,
        onChange: (event) => {
          onChange({ src: event.target.value });
        },
      }),
      h(
        "span",
        { key: "audio-button", className: "flex gap-2 pt-2 px-2" },
        h(
          "button",
          {
            type: "button",
            onClick: handleOpenMediaLibrary,
            className: "btn btn-contained-primary",
          },
          "wählen"
        )
      ),
    ]);
  },
  preview: ({ src }) => {
    return h(
      "div",
      { className: "card" },
      h("audio", { src: src, controls: true })
    );
  },
};

export default AudioShortcode;
