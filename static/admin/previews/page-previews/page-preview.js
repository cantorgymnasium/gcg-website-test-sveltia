import {
  Container,
  ContentJustify,
  PageHeader,
  Section,
} from "./components/index.js";

const PagePreview = ({ widgetFor, entry }) => {
  return [
    PageHeader(entry),
    Section(Container(ContentJustify(widgetFor("body")))),
  ];
};

export default PagePreview;
