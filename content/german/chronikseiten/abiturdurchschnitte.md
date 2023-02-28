---
title: Abiturdurchschnitte
draft: false
bg_image: media/backgrounds/page-title.webp
type: pages
layout: single.html
gallery: false
aliases:
  - /schulchronik/pages/abiturdurchschnitte
---
<style>
  * {
  margin: 0;
  padding: 0;
}
#chart-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
</style>
<div id="chart-container"></div>
<script>
  var dom = document.getElementById("chart-container");
  var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false
  });
  var app = {};
  var ROOT_PATH = "https://echarts.apache.org/examples";
  var option;
  jQuery.get(
    "https://git.cantorgymnasium.de/gcg/gcg-website/raw/branch/master/data/de/abiturdurchschnitte.json",
    function (data) {
      myChart.setOption(
        (option = {
          title: {
            text: "Beijing AQI",
            left: "1%"
          },
          tooltip: {
            trigger: "axis"
          },
          grid: {
            left: "5%",
            right: "15%",
            bottom: "10%"
          },
          xAxis: {
            data: data.map(function (item) {
              return item[0];
            })
          },
          yAxis: {},
          toolbox: {
            right: 10,
            feature: {
              dataZoom: {
                yAxisIndex: "none"
              },
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: [
            {
              startValue: "2014-06-01"
            },
            {
              type: "inside"
            }
          ],
          visualMap: {
            top: 50,
            right: 10,
            pieces: [
              {
                gt: 0,
                lte: 1.0,
                color: "#93CE07"
              },
              {
                gt: 1.0,
                lte: 1.25,
                color: "#FBDB0F"
              },
              {
                gt: 1.25,
                lte: 1.5,
                color: "#FC7D02"
              },
              {
                gt: 1.5,
                lte: 1.75,
                color: "#FD0100"
              },
              {
                gt: 1.75,
                lte: 2.0,
                color: "#AA069F"
              },
              {
                gt: 2.0,
                color: "#AC3B2A"
              }
            ],
            outOfRange: {
              color: "#999"
            }
          },
          series: {
            name: "Beijing AQI",
            type: "line",
            data: data.map(function (item) {
              return item[1];
            }),
            markLine: {
              silent: true,
              lineStyle: {
                color: "#333"
              },
              data: [
                {
                  yAxis: 50
                },
                {
                  yAxis: 100
                },
                {
                  yAxis: 150
                },
                {
                  yAxis: 200
                },
                {
                  yAxis: 300
                }
              ]
            }
          }
        })
      );
    }
  );
  if (option && typeof option === "object") {
    myChart.setOption(option);
  }
  window.addEventListener("resize", myChart.resize);
</script>

In den Jahren 1999 und 2001 gab es keine Abschlussjahrgänge am GCG. 1999 nicht, da sieben Jahre zuvor keine Aufnahme in die siebente Klasse, sondern in die fünfte Klasse erfolgte und 2001 vollzog sich der Übergang zum Abitur nach 13 Schuljahren.
