function danmu() {
    if (location.pathname != '/love/todo/' || document.body.clientWidth < 68) return //判断是否是留言板页面
    console.log(1);
    const Danmaku = new EasyDanmaku({
      page: '/love/todo/', // 即留言板地址
      el: '#danmu', //弹幕挂载节点
      line: 6, //弹幕行数
      speed: 20, //弹幕播放速度
      hover: true,
      loop: true, //开启循环播放
    })
    let data = saveToLocal.get('danmu')
    if (data) Danmaku.batchSend(data, true);
    else {
      let ls = []
      fetch(' https://twikoo.jessaybluck.cf/', { // 此处替换成自己的twikoo地址
        method: "POST",
        body: JSON.stringify({
          "event": "COMMENT_GET",
        //   "event": "GET_RECENT_COMMENTS",
          "url":  "/love/todo/",
        //   "url":  ["/love/todo/","/about/"],
          "includeReply": true, //是否显示消息回复
          "pageSize": 100
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json()).then(({ data }) => {
        data.forEach(i => {
          if (i.avatar == undefined) i.avatar = 'https://cravatar.cn/avatar/d615d5793929e8c7d70eab5f00f7f5f1?d=mp'
          ls.push({ avatar: i.avatar, content: i.nick + '：' + formatDanmaku(i.comment), url: i.url + '#' + i.id })
        });
        Danmaku.batchSend(ls, true);
        saveToLocal.set('danmu', ls, 0.02)
      });
      // 格式化评论
      function formatDanmaku(str) {
        str = str.replace(/<\/*br>|[\s\uFEFF\xA0]+/g, '');
        str = str.replace(/<img.*?>/g, '[图片]');
        str = str.replace(/<a.*?>.*?<\/a>/g, '[链接]');
        str = str.replace(/<pre.*?>.*?<\/pre>/g, '[代码块]');
        str = str.replace(/<.*?>/g, '');
        return str
      }
    }
    // document.getElementById('danmuBtn').innerHTML = `<button class="hideBtn" onclick="document.getElementById('danmu').classList.remove('hidedanmu')">显示弹幕</button> <button class="hideBtn" onclick="document.getElementById('danmu').classList.add('hidedanmu')">隐藏弹幕</button>`
    function toggleDanmu() {
        var danmuElement = document.getElementById('danmu');
        var toggleDanmuBtn = document.getElementById('toggleDanmuBtn');

        if (danmuElement.classList.contains('hidedanmu')) {
            danmuElement.classList.remove('hidedanmu');
            toggleDanmuBtn.textContent = '隐藏弹幕';
        } else {
            danmuElement.classList.add('hidedanmu');
            toggleDanmuBtn.textContent = '显示弹幕';
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        // 绑定按钮的点击事件
        document.getElementById('toggleDanmuBtn').addEventListener('click', toggleDanmu);
    });

    // 在Pjax页面切换后重新绑定按钮点击事件
    document.addEventListener('pjax:success', function() {
        // 重新绑定按钮点击事件
        document.getElementById('toggleDanmuBtn').addEventListener('click', toggleDanmu);
    });
    
    document.getElementById('danmuBtn').innerHTML = `<button class="hideBtn"> <a id="toggleDanmuBtn" href="javascript:toggleDanmu() data-pjax="" defer=""" >隐藏弹幕</a> </button> <button class="hideBtn" ><a href="#zhufu" >去发弹幕</a></button>`
  }
  danmu()
  document.addEventListener("pjax:complete", danmu)