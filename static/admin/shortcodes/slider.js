import { Card, TextField, Label } from "./components.js";

const SliderShortcode = {
  label: "Bilderkarussell",
  openTag: "{{< ",
  closeTag: " >}}",
  separator: " ",
  toProps: (args) => {
    if (args.length > 0) {
      return {
        dir:
          args
            .find((arg) => arg.startsWith("dir="))
            ?.split("=")[1]
            .replaceAll('"', "") ?? "",
      };
    }
    return { dir: "" };
  },
  toArgs: ({ dir }) => {
    return [`dir=\"${dir}\"`];
  },
  control: ({ dir, onChange, controlProps }) => {
    const { collection, field } = controlProps;

    const handleChange = ({ path }) => {
      onChange({ dir: path });
    };

    const handleOpenMediaLibrary = useMediaInsert(
      dir,
      { collection, field, forFolder: true },
      handleChange
    );

    return Card([
      Label("Bilderkarussell"),
      h(
        "span",
        { className: "CMS_WidgetDateTime_inputs" },
        TextField({
          value: dir,
          onChange: (event) => {
            onChange({ dir: event.target.value });
          },
        }),
        h(
          "span",
          {
            key: "slider-button",
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
  preview: ({ dir }) => {
    return h(
      "div",
      { className: "card mb-4" },
      h(
        "div",
        { className: "card-body mb-0" },
        h("div", { className: "card-title h4" }, "Bilderkarussell"),
        h("div", { className: "card-text" }, dir)
      )
    );
  },
};

export default SliderShortcode;
