import { Card, TextField } from "./components/index.js";

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
      TextField({
        label: "Bilderkarussell",
        value: dir,
        onChange: (event) => {
          onChange({ dir: event.target.value });
        },
      }),
      h(
        "span",
        { key: "slider-button", className: "flex gap-2 pt-2 px-2" },
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
