<template>
  <div class="highcharts">
  </div>
</template>

<script>
  import Highcharts from 'highcharts'
  import HighchartsMore from 'highcharts/highcharts-more'
  import loadGauge from 'highcharts/modules/solid-gauge'
  HighchartsMore(Highcharts)
  loadGauge(Highcharts)
  
  import {warn} from './debug'

  export default {
    props: ['options', 'Highcharts'],
    name: 'VueHighcharts',
    data () {
      return {
        chart: null
      }
    },
    mounted(){
      if (!this.getChart() && this.options) {
        this.initTheme();
        this.init();
      }
    },

    methods: {
      initTheme(){
        Highcharts.theme = {
            colors: ['#ff9200', '#cc1eff', '#0bdd5c', '#ff5087', '#0d4fb8',
                '#61958d', '#0bdd5c', '#ffd57a', '#23d0ab', '#ff9200', '#126a65'],
            chart: {
                backgroundColor: {
                    linearGradient: [0, 0, 250, 500],
                    stops: [
                        [0, 'rgb(10, 10, 14)'],
                        [1, 'rgb(10, 15, 14)']
                    ]
                },
                borderColor: '#193d37',
                borderWidth: 1,
                className: 'dark-container',
                plotBackgroundColor: '#121a18',
                plotBorderColor: '#193d37',
                plotBorderWidth: 0
            },
            title: {
                style: {
                    color: '#ffebc8',
                    font: 'bold 16px "MicrosoftYaHei", Verdana, sans-serif'
                }
            },
            subtitle: {
                style: {
                    color: '#666666',
                    font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
                }
            },
            xAxis: {
                gridLineColor: '#193d37',
                gridLineWidth: 1,
                labels: {
                    style: {
                        color: '#ffebc8'
                    }
                },
                lineColor: '#193d37',
                tickColor: '#193d37',
                title: {
                    style: {
                        color: '#CCC',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        fontFamily: 'Trebuchet MS, Verdana, sans-serif'

                    }
                }
            },
            yAxis: {
                gridLineColor: '#193d37',
                labels: {
                    style: {
                        color: '#ffebc8'
                    }
                },
                lineColor: '#193d37',
                minorTickInterval: null,
                tickColor: '#193d37',
                tickWidth: 1,
                title: {
                    style: {
                        color: '#CCC',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        fontFamily: 'Trebuchet MS, Verdana, sans-serif'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(10, 12, 14, 0.75)',
                style: {
                    color: '#F0F0F0'
                }
            },
            toolbar: {
                itemStyle: {
                    color: 'silver'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        color: '#CCC'
                    },
                    marker: {
                        lineColor: '#333'
                    }
                },
                spline: {
                    marker: {
                        lineColor: '#333'
                    }
                },
                scatter: {
                    marker: {
                        lineColor: '#333'
                    }
                },
                candlestick: {
                    lineColor: 'white'
                }
            },
            legend: {
                itemStyle: {
                    font: '9pt Trebuchet MS, Verdana, sans-serif',
                    color: '#A0A0A0'
                },
                itemHoverStyle: {
                    color: '#FFF'
                },
                itemHiddenStyle: {
                    color: '#444'
                }
            },
            credits: {
                style: {
                    color: '#666'
                }
            },
            labels: {
                style: {
                    color: '#CCC'
                }
            },


            navigation: {
                buttonOptions: {
                    symbolStroke: '#DDDDDD',
                    hoverSymbolStroke: '#FFFFFF',
                    theme: {
                        fill: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0.4, '#606060'],
                                [0.6, '#333333']
                            ]
                        },
                        stroke: '#000000'
                    }
                }
            },

            // scroll charts
            rangeSelector: {
                buttonTheme: {
                    fill: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0.4, '#888'],
                            [0.6, '#555']
                        ]
                    },
                    stroke: '#000000',
                    style: {
                        color: '#CCC',
                        fontWeight: 'bold'
                    },
                    states: {
                        hover: {
                            fill: {
                                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                stops: [
                                    [0.4, '#BBB'],
                                    [0.6, '#888']
                                ]
                            },
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        },
                        select: {
                            fill: {
                                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                stops: [
                                    [0.1, '#000'],
                                    [0.3, '#333']
                                ]
                            },
                            stroke: '#000000',
                            style: {
                                color: 'yellow'
                            }
                        }
                    }
                },
                inputStyle: {
                    backgroundColor: '#333',
                    color: 'silver'
                },
                labelStyle: {
                    color: 'silver'
                }
            },

            navigator: {
                handles: {
                    backgroundColor: '#666',
                    borderColor: '#AAA'
                },
                outlineColor: '#CCC',
                maskFill: 'rgba(16, 16, 16, 0.5)',
                series: {
                    color: '#7798BF',
                    lineColor: '#A6C7ED'
                }
            },

            scrollbar: {
                barBackgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0.4, '#888'],
                        [0.6, '#555']
                    ]
                },
                barBorderColor: '#CCC',
                buttonArrowColor: '#CCC',
                buttonBackgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0.4, '#888'],
                        [0.6, '#555']
                    ]
                },
                buttonBorderColor: '#CCC',
                rifleColor: '#FFF',
                trackBackgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#000'],
                        [1, '#333']
                    ]
                },
                trackBorderColor: '#666'
            },

            // special colors for some of the
            legendBackgroundColor: 'rgba(10, 12, 14, 0.5)',
            background2: 'rgb(35, 35, 70)',
            dataLabelsColor: '#444',
            textColor: '#C0C0C0',
            maskColor: 'rgba(255,255,255,0.3)'
        };

        // Apply the theme
        Highcharts.setOptions(Highcharts.theme);
      },
      getChart(){
        return this.chart
      },
      addSeries(options){
        this.delegateMethod('addSeries', options);
      },
      removeSeries(){
        while(this.getChart().series.length !== 0) {
          this.getChart().series[0].remove();
        }
      },
      mergeOption(options){
        this.delegateMethod('update', options)
      },
      showLoading(txt){
        this.getChart().showLoading(txt);
      },
      hideLoading(){
        this.getChart().hideLoading();
      },
      delegateMethod(name, ...args){
        if (!this.getChart()) {
          warn(`Cannot call [$name] before the chart is initialized. Set prop [options] first.`, this)
          return
        }
        return this.getChart()[name](...args)
      },

      init(){
        if (!this.getChart() && this.options) {
         let _Highcharts = this.Highcharts || Highcharts;
         if (_Highcharts.product == 'Highstock') {
           this.chart = new _Highcharts.stockChart(this.$el, this.options);
         } else {
           //this.chart = new _Highcharts.Chart(this.$el, this.options);
           this.chart = Highcharts.chart(this.$el, this.options);
           console.log(this.chart)
         }
        }
      }
    },

    watch: {
      options: function (options) {
        console.log("options change.",options)
        if (!this.getChart() && options) {
          this.init()
        } else {
          this.getChart().update(this.options);
        }
      }
    },

    beforeDestroy(){
      if (this.getChart()) {
        this.getChart().destroy();
      }
    }
  }
</script>
