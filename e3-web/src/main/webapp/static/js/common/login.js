/**
 * Created by Administrator on 2017/7/25.
 */
/*聚焦事件*/
var userAccount = false;
var password = false;
var vcode = false;

/*聚焦事件*/
function fuc(id){
    var txt=document.getElementById(id).value;
    if(id=="userAccount"){
        if(txt=="请输入用户名"){
            document.getElementById("userAccount").value="";
            document.getElementById("userAccount").style.color="black";
        }
    }
    else if(id=="password"){
        if(txt=="请输入密码"){
            document.getElementById("password").value="";
            document.getElementById("password").type="password";
            document.getElementById("password").style.color="black";
        }
    }
}
/*失焦事件*/
function blu(id){
    var txt=document.getElementById(id).value;
    if(id=="userAccount"){
        if(txt==""){
            document.getElementById("userAccount").value="请输入用户名";
            document.getElementById("span1").style.display="inline-block";
            document.getElementById("userAccount").style.color="silver";
        }
        else{
            document.getElementById("span1").style.display="none";
            uname = true;
        }
    }
    else if(id=="password"){
        if(txt==""){
            document.getElementById("password").value="请输入密码";
            document.getElementById("span2").style.display="inline-block";
            document.getElementById("password").style.color="silver";
        }
        else{
            document.getElementById("span2").style.display="none";
            password = true;
        }
    }
    else if (id == "verificationCode") {
        /*去判断两边值是否一样*/
        if (txt != document.getElementById("login-div-yzm").title) {
            /*往后保持一致*/
            document.getElementById("span3").style.display = "inline-block";
            document.getElementById("login-div-yzm").style.color="silver";
        }
        else {
            document.getElementById("span3").style.display = "none";
            vcode = true;
        }
    }
}
/*数字、颜色随机生成*/
var num = "";
function suiji() {
    document.getElementById("login-div-yzm").innerHTML = "";
    var t = 0;
    var yanse = "";
    var yanse_arry = new Array("red", "green", "yellow", "orange", "blue", "pink");
    for (var i = 0; i <6; i++) {
        t = Math.round(Math.random() * 9);
        num += t;
        var yanse_index = Math.round(Math.random() * 5);
        var text = "<div id='div_r" + i + "' style=' border-style: none; font-size: 40px;float:left; color: " + yanse_arry[yanse_index] + "; width: 10px; height: 26px; line-height: 30px; margin-left: 10px;'>" + t + "</div>";
        document.getElementById("login-div-yzm").innerHTML += text;
        document.getElementById("login-div-yzm").title = num;
    }
    var rotatedeg;
    for (var i = 0; i < 6; i++) {
        rotatedeg = Math.round(Math.random() * 180);
        document.getElementById("div_r" + i + "").style.transform = "rotate(" + rotatedeg + "deg)";
    }
    num = "";
}
//登录
function doLogin(){

    var userName = $("#userAccount").val();
    var passWord = $("#password").val();
    //commonSubmit("form-login",getContextPath()+"/checkLogin?userAccount="+userName+"&password="+passWord);
    window.location.href=getContextPath()+"/checkLogin?userAccount="+userName+"&password="+passWord;

}