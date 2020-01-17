/**
 * Created by liubo on 2017-07-27.
 */
$(function () {
    $('#container').highcharts({
        data: {
            table: 'datatable'
        },
        chart: {
            type: 'column'
        },
        title: {
            text: '保障对象统计图'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: '(人)',
                rotation: 0
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + '人' /*+ this.point.name.toLowerCase()*/;
            }
        }
    });
});