// ==UserScript==
// @name         auto_img_page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  nyahentai自动读取图片。点进大图页后，就会加载出。以当前页为起始，默认加载30页。可以自己修改代码，改变起始页和结束页。
// @author       sword4869
// @match        https://nyahentai.red/*     
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function newHtml(content) {
        // (strUrl, strWindowName, [strWindowFeatures])
        let win = window.open('about:blank', '_blank', 'scroll:1;status:0;help:0;resizable:1;');
        win.document.write(content);
    }

    function addButton() {

        let newElement = document.createElement('div');

        newElement.style.position = 'fixed';
        newElement.style.top = '10px';
        newElement.style.left = '10px';
        newElement.style.border = '1px solid #DDD';
        newElement.style.backgroundColor = '#FFF';
        newElement.style.zIndex = 9999;

        // image_url
        let is_nyahentai = document.getElementById('image-container') == null;
        console.log('is_nyahentai: ' + is_nyahentai);
        let image_url_base = '';
        let start_num = 0;
        let end_num = 0;
        let img_suffix = '';
        if (!is_nyahentai) {
            let image_url = document.getElementById('image-container').getElementsByTagName('a')[0].getElementsByTagName('img')[0].getAttribute("src");
            const image_url_list = image_url.split('/');
            const suffix = image_url_list.at(-1);
            image_url_base = image_url.slice(0, -suffix.length);
            start_num = suffix.split('.')[0];
            end_num = Number(start_num) + 30;
            img_suffix = suffix.split('.')[1];
        }


        // 第一个输入框: 图片url
        let div_url = document.createElement('input');
        div_url.type = 'text';
        div_url.value = image_url_base;
        newElement.appendChild(div_url);

        // 第二个输入框: 起始页
        let div_start_num = document.createElement('input');
        div_start_num.type = 'text';
        div_start_num.value = start_num;
        newElement.appendChild(div_start_num);

        // 第三个输入框: 结束页
        let div_end_num = document.createElement('input');
        div_end_num.type = 'text';
        div_end_num.value = end_num;
        newElement.appendChild(div_end_num);

        // 第四个输入框: 图片后缀
        let div_img_suffix = document.createElement('input');
        div_img_suffix.type = 'text';
        div_img_suffix.value = "." + img_suffix;
        newElement.appendChild(div_img_suffix);

        // 点击按钮，生成图片页面
        let btn_upper = document.createElement('button');
        btn_upper.innerText = '+';
        // 让按钮更大一些
        btn_upper.style.border = '1px solid #DDD';
        btn_upper.style.backgroundColor = '#FFF';
        btn_upper.addEventListener('click',
            function () {
                let content = '';
                for (let i = parseInt(div_start_num.value); i < parseInt(div_end_num.value); i++) {
                    let input_url = div_url.value + i + div_img_suffix.value;
                    content += '<img src=' + input_url + ' />' + i + '</br>';
                }
                newHtml(content);
            }
        );
        
        // 换行
        newElement.style.display = 'grid';
        newElement.appendChild(btn_upper);

        // 将这个新的元素和它的文本添加到 DOM 中
        document.body.appendChild(newElement);
    }

    window.addEventListener('hashchange', addButton);
    window.onload = addButton;
})();
