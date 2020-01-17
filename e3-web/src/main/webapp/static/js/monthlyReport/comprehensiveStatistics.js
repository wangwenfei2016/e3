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
            text: '各类人员综合保障统计图'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: '(元)',
                rotation: 0
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + '元' /*+ this.point.name.toLowerCase()*/;
            }
        }
    });
});