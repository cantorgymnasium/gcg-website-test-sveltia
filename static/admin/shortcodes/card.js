import { Card, TextField, Label } from "./components.js";

const CardShortcode = {
  label: "Link-Karte",
  openTag: "{{< ",
  closeTag: " >}}",
  separator: " ",
  toProps: (args) => {
    if (args.length > 0) {
      var title = "";
      var link = "";
      const linkIndex = args.findIndex((arg) => arg.startsWith('link="'));
      const titleIndex = args.findIndex((arg) => arg.startsWith('title="'));
      for (let arg of args.slice(titleIndex, linkIndex)) {
        title += " " + arg.replaceAll("title=", "").replaceAll('"', "");
      }
      for (let arg of args.slice(linkIndex)) {
        link += " " + arg.replaceAll("link=", "").replaceAll('"', "");
      }
      return { title: title.trimStart(), link: link.trim() };
    }

    return { title: "", link: "" };
  },
  toArgs: ({ title, link }) => {
    return [`title=\"${title}\"`, `link=\"${link}\"`];
  },
  control: ({ title, link, onChange }) => {
    return Card([
      Label("Titel"),
      TextField({
        value: title,
        onChange: (event) => {
          onChange({ title: event.target.value.trimStart(), link });
        },
      }),
      Label("Link"),
      TextField({
        value: link,
        onChange: (event) => {
          onChange({ title, link: event.target.value });
        },
      }),
    ]);
  },
  preview: ({ title, link }) => {
    return h(
      "div",
      { className: "card border-primary rounded-0 hover-shadow mb-2" },
      h(
        "div",
        { className: "card-body mb-0" },
        h(
          "h4",
          { className: "card-title" },
          h("a", { className: "text-decoration-none", href: link }, title)
        ),
        h(
          "a",
          {
            className: "mb-0 btn btn-primary btn-sm text-decoration-none",
            href: link,
          },
          "Mehr anzeigen"
        )
      )
    );
  },
};

export default CardShortcode;
