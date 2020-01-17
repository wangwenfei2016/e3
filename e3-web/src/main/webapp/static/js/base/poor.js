/**
 * Created by huangling on 2017-06-07.
 */

function selectByCondition() {
    var peopleName = $("#peopleName").val();

    // 获取当前页数
    var page = $('.pcontrol input', g.toolbar).val();
    //获取每页记录数
    var pagesize = $(".l-bar-selectpagesize select", g.toolbar).val();
    $.ajax({
        url: getContextPath() + "/base/getDate?peopleName="+peopleName+"&page="+page+"&pagesize="+pagesize,
        type: 'POST',
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (data) {
            $("#maingrid").ligerGetGridManager().loadData(data);
        },
        error: function (data) {
            $.ligerDialog.success('查询失败');
        }
    });
}

function f_open()
{
    $.ligerDialog.open(
        {   url: getContextPath()+'/base/addPoorPerson',
            height: 520,
            width:760,
            title:'添加特困供养人员信息',
            buttons: [
                { text: '确定', onclick: function (item, dialog) {

                    var data = {};

                    dialog.frame.$("input,select,textarea,radio").each(function () {
                        var name = $(this).attr("name");
                        if (name && name.indexOf('ligerui') == -1) {
                            data[name] = this.value;
                        }
                    });
                    /*alert(data.filingRiser);
                    delete data.filingRiser;
                    var aaa;
                    var radio = document.getElementsByName("filingRiser");
                    alert(radio.length);
                    for(i=0;i<radio.length;i++){
                        if(radio[i].checked==true){
                            aaa = radio[i].value;
                            alert(radio[i].value);
                        }
                    }

                    var bbb  = $('input:radio[name="filingRiser"]:checked').val();
                    /!*data.filingRiser = filingRiser;*!/
                     alert(bbb);
                    alert(data.filingRiser);*/
                    var emp = JSON.stringify(data);
                    var form = dialog.frame.liger.get("saveeEmp");

                    if (form.valid()) {
                        $.ligerDialog.confirm('是否要添加', function (type) {

                            if (type) {
                                $.ajax({
                                    url: getContextPath()+'/base/addpoorPersonData',
                                    type: 'POST',
                                    dataType: 'json',
                                    data: {"emp": emp},
                                    async: false, //同步处理后面才能处理新添加的series
                                    contentType: /*"application/json;charset=utf-8",*/"application/x-www-form-urlencoded; charset=utf-8",
                                    success: function (data) {
                                        if(data){
                                            $.ligerDialog.success('保存成功', function (yes) {
                                                $("#maingrid").ligerGetGridManager().reload() ;
                                                $(".l-dialog,.l-window-mask").remove();

                                            });}else
                                            $.ligerDialog.success('保存失败');
                                    },
                                    error: function (data) {
                                        var b = [];
                                        for(var a in data){
                                            b.push(data[a]) ;
                                        }
                                        $.ligerDialog.success('保存失败');
                                    }
                                });
                            }
                        });
                    }

                },cls:'l-dialog-btn-highlight' },

                { text: '取消', onclick: function (item, dialog) { dialog.close(); } }
            ], isResize: true
        }
    );
}

/*修改数据、提交*/
function getSelected(rowid)
{
    var row =  manager.getRow(rowid) ;
    var t= JSON.stringify(row);
    var obj = JSON.parse(t);
    $.ligerDialog.open({
        height: 520,
        width: 760,showToggle: true,
        title: "&nbsp;修改特困供养人员信息",
        url: getContextPath()+'/base/updatePoorPerson?id='+obj.id,buttons: [
            { text: '确定', onclick: function (item, dialog) {
                var data = {};
                dialog.frame.$("input,select,textarea").each(function () {
                    var name = $(this).attr("name");
                    if (name && name.indexOf('ligerui') == -1) {
                        data[name] = this.value;
                    }
                });
                var emp = JSON.stringify(data);

                var form = dialog.frame.liger.get("updateeEmp");

                if (form.valid()) {
                    $.ligerDialog.confirm('是否要修改', function (type) {
                        if (type) {
                            $.ajax({
                                url: getContextPath() + "/base/updatePoorPersonDate",
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

function readSelected(rowid){
    var row =  manager.getRow(rowid) ;
    var t= JSON.stringify(row);

    var obj = JSON.parse(t);
    $.ligerDialog.open({
        height: 520,
        width: 760,
        title: "&nbsp;查看特困供养人员信息",
        url:  getContextPath()+'/base/checkPoorPerson?id='+obj.id,isDrag:true,buttons: [
          /*  { text: '确定', onclick: function (item, dialog) {
            },
                cls: 'l-dialog-btn-highlight'
            },
            {
                text: '取消', onclick: function (item, dialog) {
                dialog.close();
            }
            }*/
        ], isResize: true

    });
}

//单行删除
function deleteRow(rowid) {
    var row =  manager.getRow(rowid) ;
    var t= JSON.stringify(row);
    var obj = JSON.parse(t);

    $.ligerDialog.confirm('是否确定删除数据', function (type) {
        if (type){
            $.ajax({
                url: getContextPath() + "/base/deletePoorPerson?id="+obj.id,
                type: 'POST',
                dataType: 'json',
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                success: function (data) {
                    if(data){
                        $.ligerDialog.success('删除成功');
                        $("#maingrid").ligerGetGridManager().reload() ;
                        // manager.deleteRow(rowid);
                    }
                    else
                        $.ligerDialog.success('删除失败');
                },
                error: function (data) {
                    $.ligerDialog.success('删除失败');
                }
            })
        }
    });
}

//多行删除
function f_alert() {
    var row = manager.getSelectedRows();
    if (!row) { alert('请选择行'); return; }
    var t= JSON.stringify(row);
    var obj = JSON.parse(t);
    var box = [];
    for(var a in obj){
        box.push(obj[a].id);
    }
    $.ligerDialog.confirm('是否确定删除数据', function (type) {
        if (type){
            $.ajax({
                url: getContextPath() + "/base/deletePoorPersonAll  ?box=" + box,
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
                    $.ligerDialog.success('删除失败');
                }
            })

        }
    });
}
