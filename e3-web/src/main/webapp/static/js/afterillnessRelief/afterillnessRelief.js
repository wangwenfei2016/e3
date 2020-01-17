function selectByCondition() {
    var peopleName = $("#peopleName").val();

    // 获取当前页数
    var page = $('.pcontrol input', g.toolbar).val();
    //获取每页记录数
    var pagesize = $(".l-bar-selectpagesize select", g.toolbar).val();
    $.ajax({
        url: getContextPath() + "/illnessRelief/afterindexDate?peopleName="+peopleName+"&page="+page+"&pagesize="+pagesize,
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
/*门诊救助*/
/*添加数据、提交*/
function f_open() {
    $.ligerDialog.open({title:'&nbsp;救助信息',
        url:getContextPath()+'/illnessRelief/addafterIllnessRelief', height: 500, width: 760,isDrag:true,
        buttons: [
            { text: '确定', onclick: function (item, dialog) {},
                cls:'l-dialog-btn-highlight'
            },
            { text: '取消', onclick: function (item, dialog) { dialog.close(); } }
        ],
        isResize: true
    });
}
/*修改数据*/
function getSelected(rowid)
{
    var row =  manager.getRow(rowid) ;
    var t= JSON.stringify(row);
    var obj = JSON.parse(t);
    $.ligerDialog.open({
        height: 520,
        width: 760,showToggle: true,
        title: "&nbsp;医后大病人员补助信息",
        url: getContextPath()+'/illnessRelief/updateafterIllnessRelief?id='+obj.id,buttons: [
            { text: '确定', onclick: function (item, dialog) {
                var data = {};
                dialog.frame.$("input,select,textarea").each(function () {
                    var name = $(this).attr("name");
                    if (name && name.indexOf('ligerui') == -1) {
                        data[name] = this.value;
                    }
                });
                var emp = JSON.stringify(data);

                var form = dialog.frame.liger.get("updateEmp");
                /*alert(form.valid());
                 if (form.valid()) {*/
                $.ligerDialog.confirm('是否要修改', function (type) {
                    if (type) {
                        $.ajax({
                            url: getContextPath() + "/illnessRelief/updateafterIllnessReliefData",
                            type: 'POST',
                            dataType: 'json',
                            data: {"emp": emp},
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
                                $.ligerDialog.success('修改失败');

                            }
                        });
                    }
                });

                /*}*/
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
function readSelected(rowid){
    var row =  manager.getRow(rowid) ;
    var t= JSON.stringify(row);
    var obj = JSON.parse(t);
    console.log("要打印的用户ID=="+obj.id);
    $.ligerDialog.open({
        height: 800,
        width: 960,
        title: "&nbsp;查看住院保障信息",
        url:  getContextPath()+'/hospitalRescue/checkHospitalRescue?id='+obj.id,
        buttons: [
            /*        { text: '确定', onclick: function (item, dialog) {},
             cls:'l-dialog-btn-highlight'},
             { text: '取消', onclick: function (item, dialog) { dialog.close(); } }*/
        ],
        isResize: true
    });
    //alert(JSON.stringify(row));
}

//多行删除
function f_alert() {
    var row = manager.getSelectedRows();
    // alert(row);
    if (!row) { alert('请选择行'); return; }
    var t= JSON.stringify(row);
    var obj = JSON.parse(t);
    var box = [];
    for(var a in obj){
        box.push("'"+obj[a].id+"'");
    }
    $.ligerDialog.confirm('是否确定删除数据', function (type) {
        if (type){
            $.ajax({
                url: getContextPath() + "/ei/employee/deteleAll?box=" + box,
                type: 'POST',
                dataType: 'json',
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                success: function (data) {
                    if(data){
                        $.ligerDialog.success('删除成功');
                        $("#maingrid").ligerGetGridManager().reload() ;
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
//单行删除
function deleteRow(rowid) {
    var row =  manager.getRow(rowid) ;
    var t= JSON.stringify(row);
    var obj = JSON.parse(t);
    $.ligerDialog.open({
        height: 500,
        width: 760,
        title: "&nbsp;救助金发放信息",
        url:  getContextPath()+'/hospitalRescue/updateHospitalRescue?id='+obj.id,
        buttons: [
            { text: '确定', onclick: function (item, dialog) {
                dialog.close();
                window.location.href=getContextPath()+"/hospitalRescue/sendMoney";
            },
                cls:'l-dialog-btn-highlight'},
            { text: '取消', onclick: function (item, dialog) { dialog.close(); } }
        ],
        isResize: true
    });
}