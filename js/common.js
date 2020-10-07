console.log(window.location.href)

if(window.location.href.indexOf('section') >-1) {

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

$('#content').height($(window).height() - $('#header').height()- $('#footer').height() - 10);