// ==UserScript==
// @name         B站视频批量计算观看时长
// @namespace    http://tampermonkey.net/
// @version      2024-01-25
// @description  B站视频批量计算观看时长，支持倍速计算，支持多P视频，支持多集视频，支持多P多集视频，
// @author       sword4869
// @match        https://www.bilibili.com/video/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://cdn.bootcdn.net/ajax/libs/jszip/3.10.1/jszip.js
// @grant        none
// @license      AGPL License
// ==/UserScript==

(function () {
    'use strict';

    let hour = 0;     //最终的小时
    let minute = 0;   //最终的分钟
    let second = 0;   //最终的秒数
    let txt = document.getElementsByClassName('cur-page')[0].innerHTML;   //集数(1/59)
    let page = txt.match(/\/(\d+)/)[1];   //获取总集数：59
    function f1() {     //点击计算按钮执行该函数
        if (document.getElementById('divChild')) {    //如果存在这个元素（这个元素是显示计算结果的
            d.removeChild(document.getElementById('divChild')); //则把它删除，不然下面继续添加显示结果的元素会有历史计算的结果，删除了下面再添加，即达到刷新显示结果的功能
        }
        const start_page = parseInt(input1.value);
        const end_page = parseInt(input2.value);
        // 校验输入框输入的数字是否符合集数的规范：
        // 最小输入1
        // 起始集数、结束集数：最大不超过总集数
        // 起始集数小于或等于结束集数
        const check = start_page >= 1 && start_page <= page && end_page <= page && start_page <= end_page;
        if (! check) {      //如果输入框的数字不符合集数规范，则在显示结果的div中显示提示。
            let d1 = document.createElement('div');
            d1.style.cssText = "margin-top:15px";
            d1.setAttribute("id", "divChild");
            d.appendChild(d1);
            let t1 = document.createTextNode("输入与实际集数不符");
            d1.appendChild(t1);
        }
        let total_seconds = 0;      
        for (let i = start_page - 1; i < end_page; i++) {
            // 循环获取每集的时长，这个class除了集数时长，还有集数下方的其它视频的时长，幸好第0个就是集数的时长，所以用循环获取每个集数的时长，用最大页数判断获取的集数时长数量，防止获取到集数下方的其它视频时长
            let time = document.getElementsByClassName('duration')[i].innerHTML;  //获取集数时长
            let t = time.match(/\d+/g);   //获取时长的每个数字，这是一个数组,例如47:26，获取为 47，26，可用下标访问到每个数字
            if (t.length == 3) {
                // 如果该数组长度为3，则有时、分、秒，例如2:19:51，获取为 2，19，51
                total_seconds += 3600 * parseInt(t[0]) + 60 * parseInt(t[1]) + parseInt(t[2]);   //总秒数累加
            }
            else {
                // 如果该数组长度为2，则小时为0，只有分和秒
                total_seconds += 60 * parseInt(t[0]) + parseInt(t[1]);   //总秒数累加
            }
        }
        if (input3.value != 1) {    //默认倍速为1，如果倍速不为1，则要进行经过指定输入倍速之后的计算
            total_seconds = total_seconds / input3.value;       //得到视频加速后的观看时长，单位为总秒数。下面再经过换算得到该总秒数的时分秒格式。
        }
        hour = parseInt(total_seconds / 3600);
        minute = parseInt((total_seconds % 3600) / 60);
        second = parseInt(total_seconds % 60);

        //添加显示结果的div元素
        let d1 = document.createElement('div');   
        d1.style.cssText = "margin-top:15px";
        d1.setAttribute("id", "divChild");
        d.appendChild(d1);
        let message = "全" + (end_page - start_page + 1) + "集:" + hour + "时" + minute + "分" + parseInt(second) + "秒";
        let t1 = document.createTextNode(message);
        d1.appendChild(t1);
    }
    //界面设计
    function over() {
        btn.style.backgroundColor = "#E4E4E4";
    }
    function out() {
        btn.style.backgroundColor = "#F4F4F4";
    }
    let body = document.body;

    let d = document.createElement("div");
    d.style.cssText = "padding-top:15px;width:145px;height:135px;background-color:#F4F4F4;position:absolute;right:55px;top:218px;border:1px solid #00A1D6;color:#00A1D6;z-index:999;text-align:center;font-size:14px";
    body.appendChild(d);

    let d2 = document.createElement("div");
    d.appendChild(d2);

    let t2 = document.createTextNode("第");
    d2.appendChild(t2);

    let input1 = document.createElement('input');
    input1.setAttribute("type", "number");
    input1.style.cssText = "border: 1px solid deepskyblue;width:40px";
    d2.appendChild(input1);

    let t3 = document.createTextNode("集到");
    d2.appendChild(t3);

    let input2 = document.createElement('input');
    input2.setAttribute("type", "number");
    input2.style.cssText = "border: 1px solid deepskyblue;width:40px";
    d2.appendChild(input2);

    let t4 = document.createTextNode("集");
    d2.appendChild(t4);

    let btn = document.createElement('input');
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "计算");
    btn.style.cssText = "width:50px;margin-top:15px;border: 1px solid #00A1D6;cursor:pointer";
    btn.onclick = f1;
    btn.onmouseover = over;
    btn.onmouseout = out;
    d.appendChild(btn);

    let t5 = document.createTextNode("倍速：");
    d2.appendChild(t5);

    let input3 = document.createElement('input');
    input3.setAttribute("type", "number");
    input3.style.cssText = "border: 1px solid deepskyblue;width:50px;margin-top:15px;margin-right:10px";
    input3.value = 1;
    d2.appendChild(input3);

    let t6 = document.createTextNode("倍");
    d2.appendChild(t6);

    console.log("B站视频批量计算观看时长");
})();