/**
 * Created by liubo on 2017-07-07.
 */
//全选（反选）
function reverse(){
    var chk = document.getElementsByName("box");
    for(var i=0;i<chk.length;i++){
        chk[i].checked= !chk[i].checked;
    }
}