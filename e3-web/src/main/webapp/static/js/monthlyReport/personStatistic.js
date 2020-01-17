/**
 * Created by liubo on 2017-07-26.
 */

function searchAAA() {

    var color=[];
    color.push('red');color.push('gold');color.push('pink');color.push('brown');color.push('green');
    color.push('pansy');color.push('gray');color.push('Bay');color.push('Blue');color.push('Salmon');
    color.push('cyan');color.push('indigo');color.push('linen');color.push('rubine');color.push('sandy beige');
    color.push('#FFF68F');color.push('#FFC1C1');color.push('#FFB90F');color.push('#FF7F50');color.push('#FF4500');
    color.push('#EE00EE');color.push('#CAFF70');color.push('#C1CDC1');color.push('#9B30FF');color.push('#8B0000');
    color.push('#7A67EE');color.push('#4EEE94');color.push('#00FF00');color.push('#00BFFF');color.push('#0000AA');

    var b;
    var c;
    var ccc=[];
    var arr = new Array();
    $.ajax({
        url: getContextPath() + "/monthlyReport/personStatistic",
        type: 'POST',
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (data) {
            $.each(data,function(i,val){
                arr.push(val);
            });
            for(var i=0,j=1;i<arr.length,j<arr.length;i+=2,j+=2){
                b=arr[i];
                c=arr[j];
                ccc.push([c,b]);
            }

            $("#add").empty();
            $("#add").append("<thead><tr><th class='add_th'>人员类型</th><th class='add_th'>人数统计</th></tr></thead>");
            var number=0;
            for(var i=0,j=1,c=0;i<arr.length,j<arr.length,c<arr.length/2;i+=2,j+=2,c++){

                var tbody="<tr align='left'><td><div class='add_td' style='background-color: "+color[c]+";'></div>"+arr[j]+"</td><td align='center'>"+arr[i]+"</td></tr>;";
                $("#add").append(tbody);
                number+=arr[i];
            }
            $("#add").append("<tr align='center'><td>总人数</td><td>"+number+"</td></tr>");

                /*$('#container').highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false
                    },
                    colors:color,
                    title: {
                        text: '各类人员数量统计图'
                    },
                    tooltip: {
                        headerFormat: '{series.name}<br>',
                        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    /!*color:*!/ /!*(Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'*!/
                                }
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '百分比',
                        data: ccc
                    }]
                });*/

            $('#container').highcharts({
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45,
                        beta: 0
                    },
                    plotShadow: false
                },
                colors:color,
                title: {
                    text: '各类人员数量统计图'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        depth: 35,
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '百分比',
                    data: ccc
                }]
            });

        },
        error: function (data) {
            alert("加载失败");
        }
    });

}