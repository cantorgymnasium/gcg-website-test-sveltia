import * as json from "./abiturdurchschnitte.json";

(() => {
  const data = json.abiturdurchschnitte;
  var dom = document.getElementById("chart-container");
  // @ts-ignore
  var chart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
    locale: "DE",
  });
  const option = {
    title: {
      text: "Abiturdurchschnitte",
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      data: data.map((item) => item["jahr"]),
    },
    yAxis: {
      min: 1.0,
      inverse: true,
    },
    toolbox: {
      right: 10,
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    dataZoom: [
      {
        startValue: "1992",
      },
      {
        type: "inside",
      },
    ],
    visualMap: {
      top: 50,
      right: 10,
      precision: 1,
      pieces: [
        {
          gt: 1.0,
          lte: 1.5,
          color: "#06511c",
        },
        {
          gt: 1.5,
          lte: 2.0,
          color: "#0b9834",
        },
        {
          gt: 2.0,
          lte: 2.5,
          color: "#10df4c",
        },
      ],
      outOfRange: {
        color: "#999",
      },
    },
    series: {
      name: "Abiturdurchschnitt",
      type: "line",
      data: data.map((item) => item["schnitt"]),
      markLine: {
        silent: true,
        lineStyle: {
          color: "#333",
        },
        data: [1.25, 1.5, 1.75, 2.0, 2.25].map(n => ({ yAxis: n })),
      },
    },
  };
  if (option && typeof option === "object") {
    chart.setOption(option);
  }
  window.addEventListener("resize", chart.resize);
})();
