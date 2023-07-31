const Section = (children) =>
  h("section", { className: "section" }, children);
const Container = (children) => h("div", { className: "container" }, children);
const Row = (children) => h("div", { className: "row" }, children);
const ContentJustify = (children) => h("div", { className: "content text-justify" }, children);
const Col12 = (children) => h("div", { className: "col-12" }, children);

export { Section, Container, Row, ContentJustify, Col12 };
