// ==UserScript==
// @name         zdqd
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://itsp.orientsec.com.cn/dfzq-sign/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var date = new Date();
    var week = date.getDay();
    if (week == 6) {
        return;
    }
    var hours = date.getHours();
    if (week == 7 && hours < 18){
        return;
    }
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var today = month + "-" + day;
    if (month < 10) {
        today = "0" + today;
    }

    function randomNum() {
        // 2.5 - 22.5
        return parseInt(Math.random() * 20000) + 2500;
    }

    function checkTimeAndQd() {
        var qd_btn = $("a.button:visible").eq(0);
        if (qd_btn.text() != "签到") {
            return;
        }
        console.log("点击签到按钮：");
        openSignIn();
        setTimeout(function () {
            var submitSignIn = $(".popup-bottom a.button:visible").eq(1);
            console.log("点击确定按钮：");
            setTimeout(function () {
                if (submitSignIn.text() != "确定") {
                    window.location.href = "http://itsp.orientsec.com.cn/dfzq-sign/login.do?xcase=doLogout"
                    return;
                }
                submitSignInData();
            }, randomNum())
            var a = new XMLHttpRequest();
            a.open("GET", "https://reminderapi.joyslinktech.com/v1/push/key/xxx?title=auto&description=qd_done");
            a.send();
        }, randomNum())
    }

    function checkTimeAndQt() {
        var qd_btn = $("a.button:visible").eq(1);
        if (qd_btn.text() != "签退") {
            return;
        }
        console.log("点击签退按钮：");
        openSignOut();
        setTimeout(function () {
            var submitSignOut = $(".popup-bottom a.button:visible").eq(1);
            console.log("点击确定按钮：");
            setTimeout(function () {
                if (submitSignOut.text() != "确定") {
                    window.location.href = "http://itsp.orientsec.com.cn/dfzq-sign/login.do?xcase=doLogout"
                    return;
                }
                submitSignOutData();
            }, randomNum())
            var a = new XMLHttpRequest();
            a.open("GET", "https://reminderapi.joyslinktech.com/v1/push/key/xxx?title=auto&description=qt_done");
            a.send();
        }, randomNum())
    }

    function autoSignIn() {
        if (!$) {
            return;
        }
        if ($("#loginForm #loginBtn:visible").length > 0) {
            //登录页面
            console.log("登录页面");
            console.log("当前时间 " + hours + '：' + minutes + '：' + second);

            // 8:30 之前 或 17:30 之后
            if(hours < 8 || (hours == 8 && minutes < 30) || (hours == 17 && minutes > 30) || hours >= 18){
                console.log("准备执行签到");
                var timeout = ((8 - hours) * 3600 + (Math.random() * 8 + 35 - minutes) * 60 - second) * 1000;
                if (hours > 8) {
                    timeout += 24 * 3600 * 1000;
                }
                if(timeout < 0){
                    timeout = 10 * 1000;
                }
                timeout += randomNum();
                if (week == 5) {
                    timeout += 2 * 24 * 3600 * 1000;
                }
                setTimeout(function () {
                    $("#loginForm #loginBtn:visible").click();
                }, timeout)

                var timeout_minutes = timeout / 1000 / 60;
                var timeout_hours = parseInt(timeout_minutes / 60);
                timeout_minutes = parseInt(timeout_minutes % 60);
                console.log("将在 " + timeout_hours + " 小时 " + timeout_minutes + " 分钟之后点击登录");

                var future_minutes = timeout / 1000 / 60 + hours * 60 + minutes;
                var future_hours = parseInt(future_minutes / 60);
                var future_days = parseInt(future_hours / 24);
                future_hours = parseInt(future_hours % 24);
                future_minutes = parseInt(future_minutes % 60);
                console.log("也就是 " + future_days + " 天后的 " + future_hours + "：" + future_minutes);
            }else{
                console.log("准备执行签退");
                var timeout = ((17 - hours) * 3600 + (Math.random() * 10 + 10 - minutes) * 60 - second) * 1000;
                if(timeout < 0){
                    timeout = 10 * 1000;
                }
                timeout += randomNum();
                setTimeout(function () {
                    $("#loginForm #loginBtn:visible").click();
                }, timeout)

                var timeout_minutes = timeout / 1000 / 60;
                var timeout_hours = parseInt(timeout_minutes / 60);
                timeout_minutes = parseInt(timeout_minutes % 60);
                console.log("将在 " + timeout_hours + " 小时 " + timeout_minutes + " 分钟之后点击登录");

                var future_minutes = timeout / 1000 / 60 + hours * 60 + minutes;
                var future_hours = parseInt(future_minutes / 60);
                var future_days = parseInt(future_hours / 24);
                future_hours = parseInt(future_hours % 24);
                future_minutes = parseInt(future_minutes % 60);
                console.log("也就是 " + future_days + " 天后的 " + future_hours + "：" + future_minutes);
            }
        } else {
            //签到页面
            $("td").each(function () {
                if ($(this).text() == today) {
                    var qd_time = $(this).next().text();
                    if (qd_time) {
                        console.log("已签到，签到时间：" + qd_time);
                        if (hours < 9) {
                            // 发送通知
                            var a = new XMLHttpRequest();
                            a.open("GET", "https://reminderapi.joyslinktech.com/v1/push/key/xxx?title=auto&description=" + qd_time);
                            a.send();
                        }
                    }else{
                        console.log("未签到");
                        if (hours == 8 && minutes >= 30 && minutes <= 44) {
                            console.log("当前处于 8：30 - 8：45 之间，准备签到：");
                            console.log("准备点击签到按钮：");
                            setTimeout(function () {
                                //否则启动时间判断
                                checkTimeAndQd();
                            }, randomNum())
                        }
                    }

                    var qt_time = $(this).next().next().next().text();
                    if (qt_time) {
                        console.log("已签退，签退时间：" + qt_time);
                        if (hours < 18) {
                            // 发送通知
                            var a = new XMLHttpRequest();
                            a.open("GET", "https://reminderapi.joyslinktech.com/v1/push/key/xxx?title=auto&description=" + qt_time);
                            a.send();
                        }
                    }else{
                        console.log("未签退");
                        if (hours == 17 && minutes <= 30) {
                            console.log("当前处于 17：00 - 17：30 之间，准备签退：");
                            console.log("准备点击签退按钮：");
                            setTimeout(function () {
                                //否则启动时间判断
                                checkTimeAndQt();
                            }, randomNum())
                        }
                    }
                    console.log("30分钟后将自动刷新，进入登录页面");
                    setTimeout(function () {
                        window.location.href = "http://itsp.orientsec.com.cn/dfzq-sign/login.do?xcase=doLogout"
                        return;
                    }, 30 * 60 * 1000)
                    return;
                }
            })
        }
    }

    autoSignIn();

})();