/**
 * Created by Administrator on 2017/7/25.
 */
/*兜底保障*/
/*修改数据*/
function getSelected(rowid)
{
    var row =  manager.getRow(rowid) ;
    var t= JSON.stringify(row);
    var obj = JSON.parse(t);
    $.ligerDialog.open({
        height: 520,
        width: 760,showToggle: true,
        title: "&nbsp;修改兜底保障信息",
        url: getContextPath()+'/fallbackGuarantee/updateFallback',buttons: [
            { text: '确定', onclick: function (item, dialog) {
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
function readSelected(rowid){
    var row =  manager.getRow(rowid) ;
    var t= JSON.stringify(row);
    var obj = JSON.parse(t);
    $.ligerDialog.open({
        height: 520,
        width: 760,
        title: "&nbsp;查看兜底保障信息",
        url:  getContextPath()+'/fallbackGuarantee/checkFallback',
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
    var box = [];
    for(var a in obj){
        box.push("'"+obj.id+"'");
    }
    // alert(obj.uuid+"==========="+obj.deptName);
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