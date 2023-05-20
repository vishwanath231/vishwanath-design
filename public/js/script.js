var options = {
    chart: {
        type: "area",
        height: 450,
        foreColor: "#999",
        stacked: false,
        zoom: {
            enabled: false
        },

    },
    colors: ['#00E396', '#0090FF'],
    stroke: {
        curve: "smooth",
        width: 3
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'Total Views',
        data: generateDayWiseTimeSeries(0, 18)
    }],
    markers: {
        size: 0,
        strokeColor: "#fff",
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 1,
        hover: {
            size: 6
        }
    },
    xaxis: {
        type: "datetime",
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        labels: {
            offsetX: 14,
            offsetY: -5
        },
        tooltip: {
            enabled: true
        }
    },
    grid: {
        padding: {
            left: -5,
            right: 5
        }
    },
    tooltip: {
        x: {
            format: "dd MMM yyyy"
        },
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100]
        },
    },

};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

function generateDayWiseTimeSeries(s, count) {
    var values = [[
        4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5
    ]];
    var i = 0;
    var series = [];
    var x = new Date("1 Apr 2022").getTime();
    while (i < count) {
        series.push([x, values[s][i]]);
        x += 86400000;
        i++;
    }
    return series;
}






var options = {
    series: [{
        data: [400, 430, 448, 470, 540, 580]
    }],
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: true,
        }
    },
    colors: [ // this array contains different color code for each data
        "#fe8d00",
        "#00b6ff",
        "#00c571",
        "#04cfd1",
        "#fd0288",
        "#fbc002",
    ],
    stroke: {
        show: false,
        width: 2,
        colors: ['transparent']
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Career', 'Mind', 'Body', 'Entrepreneurship', 'Relationship', 'Soul'],
    }
};

var chart = new ApexCharts(document.querySelector("#engagement_chart"), options);
chart.render();






// performance chart

var options = {
    series: [{
        name: 'Lessons',
        data: [44, 55, 57, 56, 61, 58, 63]
    }, {
        name: 'challenges',
        data: [76, 85, 101, 98, 87, 105, 91]
    }],
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    colors: [ // this array contains different color code for each data
        "#e7bdfd",
        "#007b81",
    ],
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yaxis: {
        title: {
            text: ''
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#performance_chart"), options);
chart.render();