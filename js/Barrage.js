var hotreview = {
    switchCommentBarrage: function () {
        document.querySelector(".comment-barrage") && ($(".comment-barrage").is(":visible") ? ($(".comment-barrage").hide(), $(".menu-commentBarrage-text").text("显示热评"), document.querySelector("#consoleCommentBarrage").classList.remove("on"), localStorage.setItem("commentBarrageSwitch", "false")) : $(".comment-barrage").is(":hidden") && ($(".comment-barrage").show(), $(".menu-commentBarrage-text").text("关闭热评"), document.querySelector("#consoleCommentBarrage").classList.add("on"), localStorage.removeItem("commentBarrageSwitch"))),
            rm.hideRightMenu()
    },
    scrollTo: function (e) {
        const t = document.getElementById(e);
        if (t) {
            const e = t.getBoundingClientRect().top + window.pageYOffset - 80,
                o = window.pageYOffset,
                n = e - o;
            let a = null;
            window.requestAnimationFrame((function e(t) {
                a || (a = t);
                const i = t - a,
                    l = (c = Math.min(i / 0, 1)) < .5 ? 2 * c * c : (4 - 2 * c) * c - 1;
                var c;
                window.scrollTo(0, o + n * l),
                    i < 600 && window.requestAnimationFrame(e)
            }))
        }
    },
}
// 热评弹窗跳转
