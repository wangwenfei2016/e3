/**
 * Created by Administrator on 2017/7/27.
 */
/*满意度评价管理*/
// 根据条件查找
function selectByCondition() {
    var name = $("#name").val();
    var assessTime = $("#assessTime").val();

    // 获取当前页数
    var page = $('.pcontrol input', g.toolbar).val();
    //获取每页记录数
    var pagesize = $(".l-bar-selectpagesize select", g.toolbar).val();
    $.ajax({
        url: getContextPath() + "/satisfactionSurvey/getData?name=" + name + "&assessTime=" + assessTime + "&page=" + page + "&pagesize=" + pagesize,
        type: 'POST',
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (data) {
            $("#maingrid").ligerGetGridManager().loadData(data);
        },
        error: function (data) {
            alert("错误数据" + data);
        }
    });
}
/*添加满意度评价数据、提交*/
function addsatisfaction() {
    var name = $("#name").val();
    var satisfactionScore = $("#satisfactionScore").val();
    var assess =$("#assess").val();
    console.log("*********"+name +satisfactionScore +assess);
    $.ajax({
        url: getContextPath() + '/satisfactionSurvey/addSatisfaction',
        type: 'POST',
        dataType: 'json',
        data: {
            "name": name,
            "satisfactionScore": satisfactionScore,
            "assess":assess
        },
        async: false, //同步处理后面才能处理新添加的series
        contentType: "application/json;charset=utf-8", /*"application/x-www-form-urlencoded; charset=utf-8",*/
        success: function (data) {
            if (data) {
                $.ligerDialog.success('保存成功', function (yes) {
                    $("#maingrid").ligerGetGridManager().reload();
                    $(".l-dialog,.l-window-mask").remove();

                });
            } else
                $.ligerDialog.success('保存失败');
        },
        error: function (data) {
            var b = [];
            for (var a in data) {
                b.push(data[a]);
            }
            alert("错误数据" + b);
        }
    });
}
/*查看数据*/
function readSelected(rowid) {
    var row = manager.getRow(rowid);
    var t = JSON.stringify(row);
    var obj = JSON.parse(t);
    $.ligerDialog.open({
        height: 430,
        width: 450,
        title: "&nbsp;查看满意度评价信息",
        url: getContextPath() + '/satisfactionSurvey/checkSatisfactionManage?id=' + obj.id, isDrag: true,
        buttons: [],
        isResize: true
    });
    //alert(JSON.stringify(row));
}

//单行删除
function deleteRow(rowid) {
    var row = manager.getRow(rowid);
    var t = JSON.stringify(row);
    var obj = JSON.parse(t);
    // alert(obj.uuid+"==========="+obj.deptName);
    $.ligerDialog.confirm('是否确定删除数据', function (type) {
        if (type) {
            $.ajax({
                url: getContextPath() + "/satisfactionSurvey/deletesatisfaction?id=" + obj.id,
                type: 'POST',
                dataType: 'json',
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                success: function (data) {
                    if (data) {
                        $.ligerDialog.success('删除成功');
                        $("#maingrid").ligerGetGridManager().reload();
                        // manager.deleteRow(rowid);
                    }
                    else
                        $.ligerDialog.success('删除失败');
                },
                error: function (data) {
                    alert("错误数据" + data);
                }
            })
        }
    });
}
//多行删除
function f_alert() {
    var row = manager.getSelectedRows();
    // alert(row);
    if (!row) {
        alert('请选择行');
        return;
    }
    var t = JSON.stringify(row);
    var obj = JSON.parse(t);
    var box = [];
    for (var a in obj) {
        box.push(obj[a].id);
    }
    $.ligerDialog.confirm('是否确定删除数据', function (type) {
        if (type) {
            $.ajax({
                url: getContextPath() + "/satisfactionSurvey/deletesatisfactionAll?box=" + box,
                type: 'POST',
                dataType: 'json',
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                success: function (data) {
                    if (data) {
                        $.ligerDialog.success('删除成功');
                        $("#maingrid").ligerGetGridManager().reload();
                        // manager.deleteSelectedRow(row);
                    }
                    else
                        $.ligerDialog.success('删除失败');
                },
                error: function (data) {
                    alert("错误数据" + data);
                }
            })

        }
    });
}


/*满意度评价统计*/
function searchAA() {

    var color = [];
    color.push('red');
    color.push('gold');
    color.push('pink');
    color.push('brown');
    color.push('green');
    color.push('pansy');
    color.push('gray');
    color.push('Bay');
    color.push('Blue');
    color.push('Salmon');
    color.push('cyan');
    color.push('indigo');
    color.push('linen');
    color.push('rubine');
    color.push('sandy beige');
    color.push('#FFF68F');
    color.push('#FFC1C1');
    color.push('#FFB90F');
    color.push('#FF7F50');
    color.push('#FF4500');
    color.push('#EE00EE');
    color.push('#CAFF70');
    color.push('#C1CDC1');
    color.push('#9B30FF');
    color.push('#8B0000');
    color.push('#7A67EE');
    color.push('#4EEE94');
    color.push('#00FF00');
    color.push('#00BFFF');
    color.push('#0000AA');

    var b;
    var c;
    var ccc = [];
    var arr = new Array();
    $.ajax({
        url: getContextPath() + "/satisfactionSurvey/satisfactionStatisticsdata",
        type: 'POST',
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (data) {
            $.each(data, function (i, val) {
                arr.push(val);
            });
            for (var i = 0, j = 1; i < arr.length, j < arr.length; i += 2, j += 2) {
                b = arr[i];
                c = arr[j];
                ccc.push([c, b]);
            }

            $("#add").empty();
            $("#add").append("<thead><tr><th class='add_th'>满意度</th><th class='add_th'>人数统计</th></tr></thead>");
            var number = 0;
            for (var i = 0, j = 1, c = 0; i < arr.length, j < arr.length, c < arr.length / 2; i += 2, j += 2, c++) {

                var tbody = "<tr align='left'><td><div class='add_td' style='background-color: " + color[c] + ";'></div>" + arr[j] + "</td><td align='center'>" + arr[i] + "</td></tr>;";
                $("#add").append(tbody);
                number += arr[i];
            }
            $("#add").append("<tr align='center'><td>总人数</td><td>" + number + "</td></tr>");


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
                colors: color,
                title: {
                    text: '满意度评价数量统计图'
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