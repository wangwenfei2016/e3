/**
 * Created by Administrator on 2017/7/26.
 */
function selectByCondition() {
    var peopleName = $("#peopleName").val();
    var people_Type = $("#people_Tpye").val();
    var handleTime = $("#handleTime").val();

    // 获取当前页数
    var page = $('.pcontrol input', g.toolbar).val();
    //获取每页记录数
    var pagesize = $(".l-bar-selectpagesize select", g.toolbar).val();

    $.ajax({
        url: getContextPath() + "/monthlyReport/getDate?peopleName="+peopleName+"&people_Type="+people_Type+"&handleTime="+handleTime+"&page="+page+"&pagesize="+pagesize,
        type: 'POST',
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (data) {
            $("#maingrid").ligerGetGridManager().loadData(data);
        },
        error: function (data) {
            alert("查询失败");
        }
    });
}