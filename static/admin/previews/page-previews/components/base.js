const Section = (children) =>
	h("section", { className: "section-sm" }, children);
const Container = (children) => h("div", { className: "container" }, children);
const Row = (children) => h("div", { className: "row" }, children);
const Content = (children) => h("div", { className: "content" }, children);
const Col12 = (children) => h("div", { className: "col-12" }, children);

export { Section, Container, Row, Content, Col12 };
