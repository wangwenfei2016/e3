/**
 * Created by zhangding
 *
 *
 * on 2017-07-19.
 */
//多条发送短信记录
function selectshortNoticetAll() {
    var chk = document.getElementsByName("box");// 通过name获取checkbox
    var check = [];
    for (k in chk) {
        if (chk[k].checked)
            check.push(chk[k].value);
    }
    if (check != null && check.length > 0) {
        if (confirm(" 是否确定添加选中的信息？")) {
            commonSubmit("boxid", getContextPath()
                + "/noticeManagement/selectallnotice?box=" + check);
        }
    } else {
        alert('提交失败，没有选中的数据！');
    }
}
//开始发送短信
function addNoticemessage() {
    alert("短信发送成功！！！");
}
function getParameter(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
// 分页传值
$(function () {
    var totalPage = $("#totalPage").val();
    var totalRecords = $("#totalRecords").val();
    var pageNo = getParameter('pno');
    if (!pageNo) {
        pageNo = 1;
    }
    var selectempName = $("#selectempName").val();
    var selectpositions = $("#selectpositions").val();
    // 生成分页
    // 有些参数是可选的，比如lang，若不传有默认值
    kkpager.generPageHtml({
        pno: pageNo,
        // 总页码
        total: totalPage,
        // 总数据条数
        totalRecords: totalRecords,
        // 链接前部
        hrefFormer: getContextPath() + '/noticeManagement',
        // 链接尾部
        hrefLatter: '/shortNoticeManagement',
        selectempName: selectempName,
        selectpositions: selectpositions,
        getLink: function (n) {
            return this.hrefFormer + this.hrefLatter + "?pno=" + n + "&selectempName=" + selectempName + "&selectpositions=" + selectpositions;
        }
    });
});

//根据多个条件查找人员进行发送数据
function selectByNamePosition() {
    commonSubmit("selectByCondition", getContextPath()
        + "/noticeManagement/shortNoticeManagement");
}
function closewindow() {
    console.log("刷新页面");
    window.location.reload();//刷新页面
}
