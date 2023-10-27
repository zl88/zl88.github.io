//右侧导航

(function () {
    'use strict';
    // 创建作者头像
    const authorAvatar = document.createElement("img");
    authorAvatar.src = "https://cdn.h5ds.com/space/files/600972551685382144/20230826/619851245639618560.png";
    // authorAvatar.src = "https://thirdqq.qlogo.cn/g?b=sdk&k=yqjbmdENrko19T7mjIc3vg&s=100&t=1655292317";
    authorAvatar.style.width = "60px";
    authorAvatar.style.height = "60px";
    authorAvatar.style.borderRadius = "8px"; // 设置圆角为8px
    authorAvatar.style.marginBottom = "10px";

    // 创建链接数组
    const links = [
        {
            text: "博客地址",
            url: `/`,
            desc: "本博客的常用两个网址",
        },
        {
            text: "博客 1",
            url: `https://zl88.github.io`,
            desc: "github部署的博客地址",
        },
        {
            text: "博客 2",
            url: `https://xhcy.4everland.app`,
            desc: "博客4everland地址",
        },
        {
            text: "视传导航",
            url: `https://link3.cc/xiadj`,
            desc: "夏dj导航网址发布页",
        },
        {
            text: "视界回眸",
            url: `/video/index.html`,
            desc: "全能VIP视频在线解析",
        },
        {
            text: "每日一练",
            url: `/sa/index.html`,
            desc: "好好学习，天天向上",
        },
        {
            text: "全部分类",
            url: `/categories/index.html`,
            desc: "文章的分类",
        },
        // 添加更多链接对象
    ];

    // 创建弹窗容器
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "25%";
    popup.style.right = "-250px"; // 初始位置在右侧屏幕外
    popup.style.backgroundColor = "var(--card-bg)";
    popup.style.padding = "10px";
    popup.style.border = "1px solid var(--btn-color)";
    popup.style.borderRadius = "12px";
    popup.style.boxShadow = "var(--card-box-shadow)";
    popup.style.display = "none";
    popup.style.zIndex = "9999"; // 确保弹窗在最顶层
    popup.style.transition = "right 0.5s ease-in-out"; // 添加过渡效果

    // 创建内部容器
    const innerContainer = document.createElement("div");
    innerContainer.style.display = "flex";
    innerContainer.style.flexDirection = "column";
    innerContainer.style.alignItems = "center"; // 垂直居中

    // 添加作者头像和链接到内部容器
    innerContainer.appendChild(authorAvatar);

    // 循环创建链接并添加到内部容器
    for (const linkData of links) {
        const link = document.createElement("a");
        link.href = linkData.url;
        link.textContent = linkData.text;
        link.target = "_blank";
        link.style.color = "var(--text-highlight-color)";
        link.style.display = "flex";
        link.style.alignItems = "center"; // 垂直居中
        link.style.lineHeight = "2"; // 设置链接行高
        link.addEventListener("mouseenter", function () {
            link.style.color = "var(--long-blue)"; // 设置链接字体颜色
        });
        link.addEventListener("mouseleave", function () {
            link.style.color = ""; // 恢复链接字体颜色
        });

        // 使用伪元素方式添加网站信息
        link.style.position = "relative";

        const descElement = document.createElement("span");
        descElement.textContent = linkData.desc;
        descElement.style.position = "absolute";
        descElement.style.bottom = "100%"; // 上移
        descElement.style.right = "calc(100% + 35px)"; // 右侧 5px 外
        descElement.style.width = "10rem"; // 信息宽度
        descElement.style.bottom = "-25%";
        descElement.style.color = "var(--text-highlight-color)";
        descElement.style.textAlign = "left";
        descElement.style.background = "var(--card-bg)";
        descElement.style.border = "1px solid var(--btn-color)";
        descElement.style.boxShadow = "var(--card-box-shadow)";
        descElement.style.padding = "5px 5px 5px 10px";
        descElement.style.borderRadius = "6px";
        descElement.style.visibility = "hidden";
        descElement.style.opacity = "0";

        // 添加聊天气泡的小三角
        const triangle = document.createElement("div");
        triangle.style.position = "absolute";
        triangle.style.right = "calc(100% + 24px)"; // 右侧 10px 外
        triangle.style.border = "solid";
        triangle.style.borderWidth = "6px 0px 6px 12px";
        triangle.style.visibility = "hidden";
        triangle.style.opacity = "0";
        triangle.style.borderColor = "transparent transparent transparent var(--btn-color)";

        link.appendChild(descElement);
        link.appendChild(triangle);

        link.addEventListener("mouseenter", function () {
            descElement.style.visibility = "visible";
            descElement.style.opacity = "1";
            triangle.style.visibility = "visible";
            triangle.style.opacity = "1";
        });

        link.addEventListener("mouseleave", function () {
            descElement.style.visibility = "hidden";
            descElement.style.opacity = "0";
            triangle.style.visibility = "hidden";
            triangle.style.opacity = "0";
        });

        innerContainer.appendChild(link);
    }

    // 将内部容器添加到弹窗容器
    popup.appendChild(innerContainer);

    // 添加弹窗到页面
    document.body.appendChild(popup);

    let hoverTimeout;
    let mouseInPopup = false; // 用于检测鼠标是否在弹窗内

    // 鼠标移到网页右侧10px边缘显示弹窗
    document.body.addEventListener("mousemove", function (event) {
        // 获取页面宽度
        var pageWidth = window.innerWidth;

        // 判断鼠标距离右侧边缘的距离
        if (pageWidth - event.clientX <= 10) {
            clearTimeout(hoverTimeout);
            popup.style.right = "10px"; // 从右向左滑出
            popup.style.display = "block";
            // 设置定时器，3秒后弹窗自自动消失
            hoverTimeout = setTimeout(function () {
                popup.style.right = "-250px"; // 从左向右滑出
                setTimeout(function () {
                    popup.style.display = "none";
                }, 500); // 500毫秒后隐藏
            }, 3000); // 3秒后自动隐藏
        }
    });

    // 鼠标进入弹窗时更新标志
    popup.addEventListener("mouseenter", function () {
        mouseInPopup = true;
    });

    // 鼠标离开弹窗时更新标志
    // popup.addEventListener("mouseleave", function () {
    //     mouseInPopup = false;
    //     // 检测鼠标是否还在弹窗外，如果不在则隐藏弹窗
    //     if (!mouseInPopup) {
    //         popup.style.right = "-250px"; // 从左向右滑出
    //         setTimeout(function () {
    //             popup.style.display = "none";
    //         }, 1000); // 1秒后隐藏
    //     }
    // });
})();

