var i = 1;
var interval = setInterval(() => {
    $.ajax({url:"https://www.youtube.com/@chenyifaer/channels",success:(result) => {
            // console.log(result);
            var date = new Date();
            var time = date.getHours() + ":" + date.getMinutes()
            var index = result.indexOf("位订阅");
            if(index == -1){
                console.log(time, "获取信息出错，已停止！");
                clearInterval(interval);
                $.ajax({url:"https://api.day.app/xxx/注意！/获取信息出错，已停止！"});
                setTimeout(() => {alert("获取信息出错，已停止！")}, 2000);
                return;
            }
            var dy = result.substring(index - 10, index + 3);
            if(dy.indexOf(35) > -1){
                console.log(time, "35万订阅已达成！");
                clearInterval(interval);
                $.ajax({url:"https://api.day.app/xxx/注意！/@chenyifaer 35万订阅已达成！"});
                setTimeout(() => {alert("@chenyifaer 35万订阅已达成！")}, 2000);
            }
            console.log(time, "第", i++, "次获取信息，当前：", dy);
        }});
}, 60 * 1000);