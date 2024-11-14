import * as json from "./schuelerzahlen.json";

(() => {
  const data = json.schuelerzahlen;
  var dom = document.getElementById("chart-container");
  // @ts-ignore
  var chart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
    locale: "DE",
  });
  const option = {
    title: {
      text: "Schülerzahlen",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: (params) => {
        var lines = params.map(
          (p) => `<b>${p.seriesName}:</b> ${p.value}${p.seriesName == "Anteil Mädchen" ? "%" : ""}`
        );
        return `<b>${params[0].name}</b><br>${lines.join("<br>")}`;
      },
    },
    xAxis: {
      data: data.map((item) => item["year"]),
    },
    yAxis: [
      {
        min: 0,
        inverse: false,
      },
      {
        min: 0,
        max: 100,
        axisLabel: {
          formatter: "{value}%",
        },
      },
    ],
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
        startValue: "1988",
      },
      {
        type: "inside",
      },
    ],
    series: [
      {
        name: "Jungen",
        type: "bar",
        stack: "total",
        color: "#7099dc",
        data: data.map((item) => item["all"] - item["girls"]),
        markLine: {
          silent: true,
          lineStyle: {
            color: "#333",
          },
          data: [100, 300, 500].map((n) => ({ yAxis: n })),
        },
      },
      {
        name: "Mädchen",
        type: "bar",
        color: "#ff6a6a",
        stack: "total",
        data: data.map((item) => item["girls"]),
        markLine: {
          silent: true,
          lineStyle: {
            color: "#333",
          },
          data: [100, 300, 500].map((n) => ({ yAxis: n })),
        },
      },
      {
        name: "Insgesamt",
        color: "#98e17f",
        type: "line",
        data: data.map((item) => item["all"]),
        lineStyle: {
          normal: {
            width: 0,
          },
        },
        symbolSize: 0,
        markLine: {
          silent: true,
          lineStyle: {
            color: "#333",
          },
          data: [100, 300, 500].map((n) => ({ yAxis: n })),
        },
      },
      {
        name: "Anteil Mädchen",
        type: "line",
        color: "#4b4b4b",
        yAxisIndex: 1,
        data: data.map((item) => ((item["girls"] / item["all"]) * 100).toFixed(2)),
      },
    ],
  };

  if (option && typeof option === "object") {
    chart.setOption(option);
  }

  window.addEventListener("resize", chart.resize);
})();
