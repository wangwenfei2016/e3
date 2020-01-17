
/**
 * 获得context path
 * 
 * @returns
 */
function getContextPath() {
	return $("#ems_common_context_path").val();
}
/**
 * 页面提交
 * 
 * @param formId
 * @param url
 */
function commonSubmit(formId, url) {
	
	$("#" + formId).attr("action", url);
	$("#" + formId).submit();
}

/**
 * 日期格式化
*/
function myformatter(date) {
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	return y + '-' + (m < 10 ? ('0' + m) : m) + '-'
			+ (d < 10 ? ('0' + d) : d);
}
/**
 * 日期格式化
*/
function myparser(s) {
	if (!s)
		return new Date();
	var ss = (s.split('-'));
	var y = parseInt(ss[0], 10);
	var m = parseInt(ss[1], 10);
	var d = parseInt(ss[2], 10);
	if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
		return new Date(y, m - 1, d);
	} else {
		return new Date();
	}
}

$(function () {
    var btn = document.getElementById("btn");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    btn.onclick = function() {
        document.getElementById('container').style.display = "block";
        document.getElementById('container1').style.display = "none";
        document.getElementById('container2').style.display = "none";
        document.getElementById('container3').style.display = "none";
    };
    btn1.onclick = function() {
        document.getElementById('container1').style.display = "block";
        document.getElementById('container').style.display = "none";
        document.getElementById('container2').style.display = "none";
        document.getElementById('container3').style.display = "none";
    };
    btn2.onclick = function() {
        document.getElementById('container2').style.display ="block";
        document.getElementById('container').style.display = "none";
        document.getElementById('container1').style.display = "none";
        document.getElementById('container3').style.display = "none";
    };
    btn3.onclick = function() {
        document.getElementById('container3').style.display ="block";
        document.getElementById('container').style.display = "none";
        document.getElementById('container1').style.display = "none";
        document.getElementById('container2').style.display = "none";
    };
});