/**
 * Created by zhangding on 2017-07-12.
 */
function validatePhone(value) {
    var rex = /^1(3|4|5|7|8)\d{9}$/;
    // var rex=/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    // 区号：前面一个0，后面跟2-3位数字 ： 0\d{2,3}
    // 电话号码：7-8位数字： \d{7,8
    // 分机号：一般都是3位数字： \d{3,}
    // 这样连接起来就是验证电话的正则表达式了：/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/
    var rex2 = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
    if (rex.test(value) || rex2.test(value)) {
        // alert('t'+value);
        return true;
    } else {
        // alert('false '+value);
        return false;
    }
}
function  validateCardNo(value){

    var  reg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(reg.test(value)){
        return  true;

    }
    else
    {
        return  false;
    }
}

function validateLength1(value){
    var g = /^([\u4e00-\u9fa5]){3,20}$/;
    if(g.test(value)){
        return true;
    }else{
        return false;
    }
}

function validateLength2(value){
    var g = /^([\u4e00-\u9fa5]){2,5}$/;
    if(g.test(value)){
        return true;
    }else{
        return false;
    }
}
function  isCardNo() {
    var cardno =document.getElementById("idCard").value;
    if (cardno==""){
        document.getElementById("a_idCard").innerHTML = "身份证号码不能为空！";
    }
    else {
        boo = validateCardNo(cardno);
        if(boo != true){
            document.getElementById("a_idCard").innerHTML = "长度为15-18位！";
            document.getElementById("a_idCard").style.display = "inline-block";
        }else{
            document.getElementById("a_idCard").innerHTML = "可以使用！";
            document.getElementById("a_idCard").style.display = "inline-block";
        }

    }
}
function checkNoticeTitle() {
    var noticeTitle = document.getElementById("noticeTitle").value;
    console.log(noticeTitle+"11111");
    if(noticeTitle == ""){
        document.getElementById("a_noticeTitle").innerHTML = "不能为空！";
        document.getElementById("a_noticeTitle").style.display = "inline-block";
    }else{
        boo = validateLength1(noticeTitle);
        if(boo != true){
            document.getElementById("a_noticeTitle").innerHTML = "长度为3-20位！";
            document.getElementById("a_noticeTitle").style.display = "inline-block";
        }else{
            document.getElementById("a_noticeTitle").innerHTML = "可以使用！";
            document.getElementById("a_noticeTitle").style.display = "inline-block";
        }
    }
}
function isnoticeContent() {
    var townAddress = document.getElementById("empcounty").value;
    console.log(townAddress+"11111");
    if(townAddress == ""){
        document.getElementById("a_empcounty").innerHTML = "籍贯不能为空！";
        document.getElementById("a_empcounty").style.display = "inline-block";
    }else{
        boo = validateLength1(a_address);
        if(boo != true){
            document.getElementById("a_empcounty").innerHTML = "长度为5-20位！";
            document.getElementById("a_empcounty").style.display = "inline-block";
        }else{
            document.getElementById("a_empcounty").innerHTML = "可以使用！";
            document.getElementById("a_empcounty").style.display = "inline-block";
        }
    }
}

function ishead() {
    var head = document.getElementById("empName").value;
    if(head == ""){
        document.getElementById("a_empName").innerHTML = "姓名不能为空！";
        document.getElementById("a_empName").style.display = "inline-block";
    }else{
        boo = validateLength2(head);
        if(boo != true){
            document.getElementById("a_employee").innerHTML = "长度为2-5位！";
            document.getElementById("a_employee").style.display = "inline-block";
        }else{
            document.getElementById("a_employee").innerHTML = "可以使用！";
            document.getElementById("a_employee").style.display = "inline-block";
        }
    }
}

function isphone() {
    var phone = document.getElementById("telephone").value;

    if(phone == ""){
        document.getElementById("a_telephone").innerHTML = "不能为空！";
        document.getElementById("a_telephone").style.display = "inline-block";
    }else{
        boo = validatePhone(phone);
        if(boo != true){
            document.getElementById("a_telephone").innerHTML = "请输入正确的电话号码！";
            document.getElementById("a_phone").style.display = "inline-block";
        }else {
            document.getElementById("a_telephone").innerHTML = "电话号码可以使用！";
            document.getElementById("a_telephone").style.display = "inline-block";
        }
    }
}