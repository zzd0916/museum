
let href = window.location.href;
if(href.indexOf('section') >-1) {

    $('#qrcode').qrcode({
        render:"canvas",//设置渲染方式 （有两种方式 table和canvas，默认是canvas）  
        width: 200,//宽度
        height: 200,//高度
        correctLevel:0,//纠错等级  
        text: utils.getHref(),//生成二维码的文本
        // background  : "#f5f5f5",//背景颜色    
        // foreground  : "#000000" //前景颜色  
    });
}

let WH = $(window).height();
let HH = $('#header').height()
let FH = $('#footer').height();
$('#content').height(WH - HH - FH - 10);
$("#footer .title").eq(0).on('click', function() {
})