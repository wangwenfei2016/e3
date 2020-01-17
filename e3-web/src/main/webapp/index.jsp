<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/view/common/head.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <script type="text/javascript" src="${ctx}/static/js/common/login.js" ></script>
    <link href="${ctx}/static/css/common/login.css" rel="stylesheet" type="text/css" />
    <title>登录</title>
</head>
<body onload="suiji()" style="background: url('static/image/common/bj.png') no-repeat;background-size:100% 99%;top:0;">
<form action="" id="form-login" style="">
    <div class="login" style="">
        <div align="center" class="login-div2"><h1></h1></div>
        <div class="login-div">
            <label class="login-div-label">用户名</label>
            <input type="text" id="userAccount" name="userAccount" onfocus="fuc('userAccount')" onblur="blu('userAccount')" class="login-div-input"
                   value="请输入用户名">
            <span class="login-div-span" id="span1">*用户名不能为空</span>
        </div>
        <div class="login-div">
            <label class="login-div-label">密&nbsp;&nbsp;&nbsp;码</label>
            <input type="text" id="password" onfocus="fuc('password')" onblur="blu('password')" class="login-div-input" value="请输入密码">
            <span class="login-div-span" id="span2">*请输入不少于六位的密码</span>
        </div>
      <%--  <div class="login-div" >
            <label class="login-div-label" style="float:left;">验证码&nbsp;</label>
            <input type="text" id="verificationCode" style="" onfocus="fuc('verificationCode')" onblur="blu('verificationCode')">
            <div id="login-div-yzm" onclick="suiji()" style=""></div>
            <span id="span3" class="login-div-span">&nbsp;*验证码有误！</span>
        </div>--%>
        <div class="login-div1">
            <input class="login-div1-btn"  type="button"  value="登录" onclick="doLogin()">
            <input class="login-div1-btn" id="cz" type="button" onclick="javascript:uersname.value='';javascript:password.value='';javascript:verificationCode.value='';" value="重置">
        </div>
    </div>
</form>

</body>
</html>