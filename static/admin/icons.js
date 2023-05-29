const IconNames = {
  settings: "mdi mdi-cog-outline",
  user: "mdi mdi-fountain-pen-tip",
  page: "mdi mdi-file-document-outline",
  "page-add": "mdi mdi-file-document-plus-outline",
  document: "mdi mdi-file-document-multiple-outline",
  news: "mdi mdi-newspaper",
  award: "mdi mdi-seal-variant",
  group: "mdi mdi-crowd",
  trophy: "mdi mdi-trophy-outline",
  pi: "mdi mdi-pi-box",
  schulchronik: "mdi mdi-pillar",
  "graduation-cap": "mdi mdi-school-outline",
  help: "mdi mdi-lifebuoy",
  dash: "mdi mdi-monitor-dashboard",
  presentation: "mdi mdi-presentation",
  projektwoche: "mdi mdi-calendar-range-outline",
  superhaufen: "mdi mdi-view-dashboard",
  stats: "mdi mdi-chart-bar",
};

let Icons = [];

for (let [name, icon] of Object.entries(IconNames)) {
  Icons.push({
    name,
    icon: () =>
      h(
        "div",
        { className: "flex items-center" },
        h("i", { className: icon, style: { fontSize: "1.5rem" } })
      ),
  });
}

export default Icons;
