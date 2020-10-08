
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


// 如果設備寬度大於等於 1080
if($(window).width() >= '1080') {
    let htmlDom=document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize= '108px';
}

let WH = $(window).height();
let HH = $('#header').height()
let FH = $('#footer').height();
let CH = WH - HH - FH - 10;

$('#content').height(CH);
$("#footer .title").eq(0).on('click', function() {
})

// 分组选择器
let section1html = `<div class="mask" onclick="removeSelf()">
                        <div class="pop-wrapper">
                            <a class="pop-btn" href="./section_1.html">闻令而动 精准实施</a>
                        </div>
                    </div>`;

let section2html = `<div class="mask" onclick="removeSelf()">
                        <div class="pop-wrapper">
                            <a class="pop-btn" href="./section_2_1.html">第一组 科学防治</a>
                            <a class="pop-btn" href="./section_2_2.html">第二组 千里驰援</a>
                            <a class="pop-btn" href="./section_2_3.html">第三组 医者仁心</a>
                            <a class="pop-btn" href="./section_2_4.html">第四组 不辱使命</a>
                        </div>
                    </div>`;

let section3html =   `<div class="mask" onclick="removeSelf()">
                        <div class="pop-wrapper">
                            <a class="pop-btn" href="./section_3_1.html">第一组 基层堡垒</a>
                            <a class="pop-btn" href="./section_3_2.html">第二组 联防联控</a>
                            <a class="pop-btn" href="./section_3_3.html">第三组 志愿服务</a>
                        </div>
                    </div>`;

let section4html =  `<div class="mask" onclick="removeSelf()">
                        <div class="pop-wrapper">
                            <a class="pop-btn" href="./section_4_1.html">第一组 复工复产</a>
                            <a class="pop-btn" href="./section_4_2.html">第二组 复业复市</a>
                            <a class="pop-btn" href="./section_4_3.html">第三组 返校复课</a>
                        </div>
                    </div>`;

$('#sectionSelect1').on('click', function() {
    $('body').append(section1html)
})
$('#sectionSelect2').on('click', function() {
    $('body').append(section2html)
})
$('#sectionSelect3').on('click', function() {
    $('body').append(section3html)
})
$('#sectionSelect4').on('click', function() {
    $('body').append(section4html)
})

// 移除弹窗
function removeSelf () {
    $('.mask').remove();
}

let pageHtml = ` <div class="page-group">
                    <button class="page-up" onclick="scropUp()" > </button>
                    <button class="page-down" onclick="scropDown()" > </button>
                </div>`

// 增加全局翻页
$('#content').append(pageHtml);


/**
 * 向上翻页
*/
function scropUp() {
    $('#content').scrollTop($('#content').scrollTop() - CH)
}

/**
 * 向下翻页
*/
function scropDown() {
    $('#content').scrollTop($('#content').scrollTop() + CH)
}


