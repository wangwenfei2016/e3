/**
 * Created by LiuYang on 2017-06-10.
 */
function addGUAT() {
    alert("aa");
    var formData = $("#addGAUT").serialize();
    var submitData=decodeURIComponent(formData,true);
    alert(submitData);
        $.ajax({
            type:"POST",  //提交数据的类型 POST GET
            url :'/yanan/GAUT/addDate',//提交的网址
            data:submitData, //提交的数据
            dataType: 'json',  //返回数据的格式
            success:function(data){ //成功返回之后调用的函数
                alert(data);
                if(data == true){
                    alert("true")
                }else {
                    alert("false")
                }
            },
            error: function(){ //调用出错执行的函数
                //alert("ajax请求错误。。。。。。"); //请求出错处理
            }
        });
}