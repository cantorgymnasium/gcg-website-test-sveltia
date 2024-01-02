import { Card, TextField, Label } from "./components.js";

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
      Label("Audiodatei"),
      h(
        "span",
        { className: "CMS_WidgetDateTime_inputs" },
        TextField({
          value: src,
          onChange: (event) => {
            onChange({ src: event.target.value });
          },
        }),
        h(
          "span",
          {
            key: "audio-button",
            className: "CMS_WidgetDateTime_NowButton_root",
          },
          h(
            "button",
            {
              type: "button",
              onClick: handleOpenMediaLibrary,
              className: "CMS_Button_root CMS_Button_outlined-primary",
            },
            "wählen"
          )
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
