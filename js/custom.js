// 控制台输出自定义内容💕💕💕💕💕💕💕
if (window.console) {
    const e = (e => Math.abs(Math.floor((new Date(e).getTime() - Date.now()) / 864e5)))("2022-01-01 18:00:00")
        , t = "\nbutterfly版本: v4.9.0\n主页: zl88.github.io\nGithub: https://github.com/xiaolongmr";
    window.console.log("%c\n  你好", "color:#ffffff00;font-size:100px;background:url('https://cdn.h5ds.com/space/files/600972551685382144/20230812/614747888290467840.gif') no-repeat 0px 10px "),
        console.info(`%c小张の主页 %c\nwwwwwwwwwwwwww %c ${t}\n%c欢迎来到%c小陈和小张💕\n%c©2023 by 小张 网站已艰难运行 ${e}天啦🥳`, "font-size: 20px;font-weight: 600;color: #1473e7;", "font-size:12px;color: rgb(244,167,89);", "color: rgb(30,152,255);", "color: white", "color: hotpink; font-weight: 600", "color: white")
}



// // 表情包放大 💕💕💕💕💕💕💕
// // 如果当前页有评论就执行函数
// if (document.getElementById('post-comment')) owoBig();
// // 表情放大
// function owoBig() {
//     let flag = 1, // 设置节流阀
//         owo_time = '', // 设置计时器
//         m = 3; // 设置放大倍数
//     // 创建盒子
//     let div = document.createElement('div'),
//         body = document.querySelector('body');
//     // 设置ID
//     div.id = 'owo-big';
//     // 插入盒子
//     body.appendChild(div)

//     // 构造observer
//     let observer = new MutationObserver(mutations => {

//         for (let i = 0; i < mutations.length; i++) {
//             let dom = mutations[i].addedNodes,
//                 owo_body = '';
//             if (dom.length == 2 && dom[1].className == 'OwO-body') owo_body = dom[1];
//             // 如果需要在评论内容中启用此功能请解除下面的注释
//             else if (dom.length == 1 && dom[0].className == 'tk-comment') owo_body = dom[0];
//             else continue;

//             // 禁用右键（手机端长按会出现右键菜单，为了体验给禁用掉）
//             if (document.body.clientWidth <= 768) owo_body.addEventListener('contextmenu', e => e.preventDefault());
//             // 鼠标移入
//             owo_body.onmouseover = (e) => {
//                 if (flag && e.target.tagName == 'IMG') {
//                     flag = 0;
//                     // 移入200毫秒后显示盒子
//                     owo_time = setTimeout(() => {
//                         let height = e.target.clientHeight * m, // 盒子高 2023-02-16更新
//                             width = e.target.clientWidth * m, // 盒子宽 2023-02-16更新
//                             left = (e.x - e.offsetX) - (width - e.target.clientWidth) / 2, // 盒子与屏幕左边距离 2023-02-16更新
//                             top = e.y - e.offsetY; // 盒子与屏幕顶部距离

//                         if ((left + width) > body.clientWidth) left -= ((left + width) - body.clientWidth + 10); // 右边缘检测，防止超出屏幕
//                         if (left < 0) left = 10; // 左边缘检测，防止超出屏幕
//                         // 设置盒子样式
//                         div.style.cssText = `display:flex; height:${height}px; width:${width}px; left:${left}px; top:${top}px;`;
//                         // 在盒子中插入图片
//                         div.innerHTML = `<img src="${e.target.src}">`
//                     }, 200);
//                 }
//             };
//             // 鼠标移出隐藏盒子
//             owo_body.onmouseout = () => { div.style.display = 'none', flag = 1, clearTimeout(owo_time); }
//         }

//     })
//     observer.observe(document.getElementById('post-comment'), { subtree: true, childList: true }) // 监听的 元素 和 配置项
// }



// 网站安全认证  💕💕💕💕💕💕💕
document.addEventListener("DOMContentLoaded", function () {
    var currentDomain = window.location.hostname;
    var dynamicLink = document.getElementById("dynamicLink");

    dynamicLink.href = `https://myssl.com/${currentDomain}?from=mysslid`;
});


//自动变灰  💕💕💕💕💕💕💕
// 获取当前日期
var myDate = new Date;
var mon = myDate.getMonth() + 1; // 获取当前月份（从0开始，需要+1）
var date = myDate.getDate(); // 获取当前日期

// 定义中国国家纪念日日期数组
var days = ['4.4', '5.12', '7.7', '9.9', '9.18', '12.13'];

// Sweetalert2 外链的URL
var sweetalertUrl = "https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/limonte-sweetalert2/8.19.0/sweetalert2.all.min.js";

// Animate.css 外链的URL
var animateCssUrl = "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/animate.css/4.1.1/animate.min.css";

for (var day of days) {
    var d = day.split('.');
    if (mon == d[0] && date == d[1]) {
        document.addEventListener('DOMContentLoaded', function () {
            // 创建并添加样式元素，将网页变为黑白
            var styleElement = document.createElement('style');
            styleElement.textContent = 'html {filter: gray!important; -webkit-filter: grayscale(95%)!important; filter: grayscale(95%)!important;}';
            document.head.appendChild(styleElement);

            // 动态加载 Sweetalert2
            var sweetalertScript = document.createElement('script');
            sweetalertScript.src = sweetalertUrl;
            sweetalertScript.onload = function () {
                // Sweetalert2已加载完毕，弹出提醒
                Swal.fire({
                    title: '<strong><i class="fa-regular fa-clock"></i> 今天是 <u>中国国家纪念日</u></strong>',
                    text: '全站已切换为黑白模式，并关闭全局音乐!',
                    imageUrl: 'https://cdn.h5ds.com/space/files/600972551685382144/20230909/624800894923931648.jpg',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    focusConfirm: false,
                    confirmButtonText: '<i class="fa-solid fa-hands-praying"></i> 默哀!',
                    animation: true,
                    customClass: {
                        popup: 'kapian animated rubberBand'
                    },
                    padding: '0.5em 2em',
                    background: '#ffffffcf  bottom right repeat ',
                    backdrop: `rgba(0,0,123,0.4)`,
                    timer: 99999,
                });
            };
            document.body.appendChild(sweetalertScript);

            // 动态加载 animate.css
            var animateCssLink = document.createElement('link');
            animateCssLink.rel = 'stylesheet';
            animateCssLink.href = animateCssUrl;
            document.head.appendChild(animateCssLink);

            // 移除音乐
            var musicElement = document.querySelector('.aplayer');
            if (musicElement && musicElement.parentNode) {
                musicElement.parentNode.removeChild(musicElement);
            }
        });
    }
}



