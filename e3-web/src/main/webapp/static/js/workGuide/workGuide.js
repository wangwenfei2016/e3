/**
 * Created by Administrator on 2017/7/24.
 */
/*办事指南*/
// 根据条件查找
function selectByCondition() {
    var title = $("#title").val();
    var publishTime =$("#publishTime").val();
    // 获取当前页数
    var page = $('.pcontrol input', g.toolbar).val();
    //获取每页记录数
    var pagesize = $(".l-bar-selectpagesize select", g.toolbar).val();
    $.ajax({
        url: getContextPath() + "/workGuide/getdata?title=" + title + "&page=" + page + "&pagesize=" + pagesize+"&publishTime="+publishTime,
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
/*添加办事指南数据、提交*/
function f_open() {
    $.ligerDialog.open({
        title: '&nbsp;添加办事指南信息',
        url: getContextPath() + '/workGuide/addWorkGuide',
        height: 420,
        width: 450,
        buttons: [
            {
                text: '确定', onclick: function (item, dialog) {
                var data = {};
                dialog.frame.$("input,textarea").each(function () {
                    var name = $(this).attr("name");
                    if (name && name.indexOf('ligerui') == -1) {
                        data[name] = this.value;
                    }
                });
                var workflow = JSON.stringify(data);
                var form = dialog.frame.liger.get("saveeEmp");

                if (form.valid()) {
                    $.ligerDialog.confirm('是否要添加', function (type) {

                        if (type) {
                            $.ajax({
                                url: getContextPath() + '/workGuide/addWorkGuideData',
                                type: 'POST',
                                dataType: 'json',
                                data: {"workflow": workflow},
                                async: false, //同步处理后面才能处理新添加的series
                                contentType: /*"application/json;charset=utf-8",*/"application/x-www-form-urlencoded; charset=utf-8",
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
                    });
                }
            },
                cls: 'l-dialog-btn-highlight'
            },
            {
                text: '取消', onclick: function (item, dialog) {
                dialog.close();
            }
            }
        ],
        isResize: true
    });
}
/*修改数据*/
function getSelected(rowid) {
    var row = manager.getRow(rowid);
    var t = JSON.stringify(row);
    var obj = JSON.parse(t);
    $.ligerDialog.open({
        height: 420,
        width: 450, showToggle: true,
        title: "&nbsp;修改办事指南信息",
        url: getContextPath() + '/workGuide/updateWorkGuide?id='+obj.id, buttons: [
            {
                text: '确定', onclick: function (item, dialog) {
                var data = {};
                dialog.frame.$("input,textarea").each(function () {
                    var name = $(this).attr("name");
                    if (name && name.indexOf('ligerui') == -1) {
                        data[name] = this.value;
                    }
                });
                var workflow = JSON.stringify(data);
                var form = dialog.frame.liger.get("updateEmp");
                if (form.valid()){
                    $.ligerDialog.confirm('是否要修改', function (type) {
                        if (type) {
                            $.ajax({
                                url: getContextPath() + "/workGuide/updateWorkGuideData",
                                type: 'POST',
                                dataType: 'json',
                                data: {"workflow": workflow},
                                async: false, //同步处理后面才能处理新添加的series
                                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                                success: function (data) {
                                    if(data){
                                        $.ligerDialog.success('修改成功', function (yes) {
                                            $("#maingrid").ligerGetGridManager().reload() ;
                                            $(".l-dialog,.l-window-mask").remove();
                                        });}
                                    else {
                                        $.ligerDialog.success('修改失败');
                                    }
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
                    });

                }
            },
                cls: 'l-dialog-btn-highlight'
            },
            {
                text: '取消', onclick: function (item, dialog) {
                dialog.close();
            }
            }
        ], isResize: true
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
        title: "&nbsp;查看办事指南信息",
        url: getContextPath() + '/workGuide/checkWorkGuide?id=' + obj.id, isDrag: true,
        buttons: [
            /*        { text: '确定', onclick: function (item, dialog) {},
             cls:'l-dialog-btn-highlight'},
             { text: '取消', onclick: function (item, dialog) { dialog.close(); } }*/
        ],
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
                url: getContextPath() + "/workGuide/deleteWorkGuide?id=" + obj.id,
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
                url: getContextPath() + "/workGuide/deleteWorkGuideAll?box=" + box,
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
