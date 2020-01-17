/**
 * Created by huangling on 2017-06-26.
 */
$(function () {
    /*限制字符个数*/
    $(".tablelist_dian").each(function(){
        var maxwidth=15;
        if($(this).text().length>maxwidth){
            $(this).text($(this).text().substring(0,maxwidth));
            $(this).html($(this).html()+'…');
        }
    })
})