---
title: Schülerzahlen
draft: false
bg_image: media/backgrounds/page-title.webp
type: pages
layout: single.html

aliases:
  - /schulchronik/pages/schülerzahlen
---
<style>
#chart-container {
  position: relative;
  height: 50vh;
  overflow: hidden;
}
</style>

<div id="chart-container"></div>
<script>
  var dom = document.getElementById("chart-container");
  echarts.registerLocale("DE", {
    time: {
        month: [
            'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
            'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
        ],
        monthAbbr: [
            'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun',
            'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'
        ],
        dayOfWeek: [
            'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'
        ],
        dayOfWeekAbbr: [
            'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'
        ]
    },
    legend: {
        selector: {
            all: 'Alle',
            inverse: 'Invertiert'
        }
    },
    toolbox: {
        brush: {
            title: {
                rect: 'Box Auswahl',
                polygon: 'Lasso Auswahl',
                lineX: 'Horizontale Auswahl',
                lineY: 'Vertikale Auswahl',
                keep: 'Bereich Auswahl',
                clear: 'Auswahl zurücksetzen'
            }
        },
        dataView: {
            title: 'Daten Ansicht',
            lang: ['Daten Ansicht', 'Schließen', 'Aktualisieren']
        },
        dataZoom: {
            title: {
                zoom: 'Zoom',
                back: 'Zoom zurücksetzen'
            }
        },
        magicType: {
            title: {
                line: 'Zu Liniendiagramm wechseln',
                bar: 'Zu Balkendiagramm wechseln',
                stack: 'Stapel',
                tiled: 'Kachel'
            }
        },
        restore: {
            title: 'Wiederherstellen'
        },
        saveAsImage: {
            title: 'Als Bild speichern',
            lang: ['Rechtsklick zum Speichern des Bildes']
        }
    },
    series: {
        typeNames: {
            pie: 'Tortendiagramm',
            bar: 'Balkendiagramm',
            line: 'Liniendiagramm',
            scatter: 'Streudiagramm',
            effectScatter: 'Welligkeits-Streudiagramm',
            radar: 'Radar-Karte',
            tree: 'Baum',
            treemap: 'Baumkarte',
            boxplot: 'Boxplot',
            candlestick: 'Kerzenständer',
            k: 'K Liniendiagramm',
            heatmap: 'Heatmap',
            map: 'Karte',
            parallel: 'Parallele Koordinatenkarte',
            lines: 'Liniendiagramm',
            graph: 'Beziehungsgrafik',
            sankey: 'Sankey-Diagramm',
            funnel: 'Trichterdiagramm',
            gauge: 'Meßanzeige',
            pictorialBar: 'Bildlicher Balken',
            themeRiver: 'Thematische Flusskarte',
            sunburst: 'Sonnenausbruch'
        }
    },
    aria: {
        general: {
            withTitle: 'Dies ist ein Diagramm über "{title}"',
            withoutTitle: 'Dies ist ein Diagramm'
        },
        series: {
            single: {
                prefix: '',
                withName: ' mit Typ {seriesType} namens {seriesName}.',
                withoutName: ' mit Typ {seriesType}.'
            },
            multiple: {
                prefix: '. Es besteht aus {seriesCount} Serienzählung.',
                withName: ' Die Serie {seriesId} ist ein {seriesType} welcher {seriesName} darstellt.',
                withoutName: ' Die {seriesId}-Reihe ist ein {seriesType}.',
                separator: {
                    middle: '',
                    end: ''
                }
            }
        },
        data: {
            allData: 'Die Daten sind wie folgt: ',
            partialData: 'Die ersten {displayCnt} Elemente sind: ',
            withName: 'die Daten für {name} sind {value}',
            withoutName: '{value}',
            separator: {
                middle: ',',
                end: '.'
            }
        }
    }
});
  var chart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
    locale: "DE"
  });
  var option;
  jQuery.get("/data/schuelerzahlen.json",
    function (data) {
      chart.setOption(
        (option = {
          title: {
            text: "Schülerzahlen",
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // Use axis to trigger tooltip
              type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            },
            formatter: function (params, ticket, callback) {
              var output = "";
              params.forEach(function(param) {
                output = output + "<b>" + param.seriesName + ":</b> " + param.value + (param.seriesName == "Anteil Mädchen" ? "%" : "") + "<br>";
              });
              return output;
            }
          },
          xAxis: {
            data: data['schuelerzahlen'].map(function (item) {
              return item['year'];
            })
          },
          yAxis: [{
            min: 0,
            inverse: false
          }, {
            min: 0,
            max: 100,
            axisLabel: {
              formatter: '{value}%'
            }
          }],
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
              startValue: "1988"
            },
            {
              type: "inside"
            }
          ],
          series: [{
            name: "Jungen",
            type: "bar",
            stack: "total",
            color: "#7099dc",
            data: data['schuelerzahlen'].map(function (item) {
              return item['all'] - item['girls'];
            }),
            markLine: {
              silent: true,
              lineStyle: {
                color: "#333"
              },
              data: [
                {
                  yAxis: 100
                },
                {
                  yAxis: 300
                },
                {
                  yAxis: 500
                }
              ]
            },
          },
          {
            name: "Mädchen",
            type: "bar",
            color: "#ff6a6a",
            stack: "total",
            data: data['schuelerzahlen'].map(function (item) {
              return item['girls'];
            }),
            markLine: {
              silent: true,
              lineStyle: {
                color: "#333"
              },
              data: [
                {
                  yAxis: 100
                },
                {
                  yAxis: 300
                },
                {
                  yAxis: 500
                }
              ]
            }
          },
          {
            name: "Insgesamt",
            color: "#98e17f",
            type: "line",
            data: data['schuelerzahlen'].map(function (item) {
              return item['all'];
            }),
            lineStyle: {
              normal: {
                width: 0,
              }
            },
            symbolSize: 0,
            markLine: {
              silent: true,
              lineStyle: {
                color: "#333"
              },
              data: [
                {
                  yAxis: 100
                },
                {
                  yAxis: 300
                },
                {
                  yAxis: 500
                }
              ],
            }
          },
          {
            name: "Anteil Mädchen",
            type: "line",
            color: "#4b4b4b",
            yAxisIndex: 1,
            data: data['schuelerzahlen'].map(function (item) {
              return (item['girls']/item['all']*100).toFixed(2);;
            }),
          }
          ]
        })
      );
    }
  );
  if (option && typeof option === "object") {
    chart.setOption(option);
  }
  window.addEventListener("resize", chart.resize);
</script>
