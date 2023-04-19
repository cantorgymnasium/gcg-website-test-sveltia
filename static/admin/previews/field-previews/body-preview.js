import { truncate } from "./components/index.js";

const BodyPreview = ({ value }) => h("p", {}, truncate(value ?? "", 50));

export default BodyPreview;
