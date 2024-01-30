// ==UserScript==
// @name         B站视频实时时长
// @namespace    http://tampermonkey.net/
// @version      1.3
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
    function parse_seconds(time) {
        // 获取时长的每个数字，这是一个数组,例如47:26，获取为 47，26，可用下标访问到每个数字
        let t = time.match(/\d+/g);
        if (t.length == 2) {
            // 如果该数组长度为2，则小时为0，只有分和秒
            return 60 * parseInt(t[0]) + parseInt(t[1]);
        }
        else {
            // 如果该数组长度为3，则有时、分、秒，例如2:19:51，获取为 2，19，51
            return 3600 * parseInt(t[0]) + 60 * parseInt(t[1]) + parseInt(t[2]);
        }
    }

    function seconds_to_str(seconds) {
        const hour = parseInt(seconds / 3600);
        const minute = parseInt((seconds % 3600) / 60);
        const second = parseInt(seconds % 60);
        return hour + "时" + minute + "分" + parseInt(second) + "秒";
    }

    // 1. 所有集的总时间，以及直到当前的累计时间
    function get_total_video_time() {
        let total_seconds = 0;
        let accumulative_seconds = 0;
        let is_on = false;
        const list = list_box.childNodes;
        for (let i = 0; i < list.length; i++) {
            const time = list[i].getElementsByClassName('duration')[0];
            if (time == null) {
                continue;
            }
            const seconds = parse_seconds(time.innerHTML);
            total_seconds += seconds;
            if (list[i].classList.contains('on')) {
                is_on = true;
                accumulative_seconds += get_current_video_time();
            }
            if (!is_on) {
                accumulative_seconds += seconds;
            }
        }
        return {
            total_seconds: total_seconds,
            accumulative_seconds: accumulative_seconds
        };
    }

    // 2. 当前视频的播放时间
    function get_current_video_time() {
        const current_time = document.getElementsByClassName('bpx-player-ctrl-time-current')[0].innerHTML;
        const seconds = parse_seconds(current_time);
        return seconds;
    }

    function FluidMeter() {
        var text = 'loading...'; // 绘制的文字

        var context;
        var targetContainer;

        var time = null;
        var dt = null;

        var options = {
            drawShadow: true,
            drawText: true,
            drawBubbles: true,
            fontSize: "20px",
            fontFamily: "Arial",
            fontFillStyle: "white",
            size: 150,
            borderWidth: 10,
            backgroundColor: "#e2e2e2",
            foregroundColor: "#fafafa"
        };

        var currentFillPercentage = 0;
        var fillPercentage = 0;

        var text_index = 0; // 0: 百分比，1: 累计时间，2: 剩余时间

        //#region fluid context values
        var foregroundFluidLayer = {
            fillStyle: "purple",
            angle: 0,
            horizontalPosition: 0,
            angularSpeed: 50,
            maxAmplitude: 9,
            frequency: 30,
            horizontalSpeed: -150,
            initialHeight: 0
        };
        var backgroundFluidLayer = {
            fillStyle: "pink",
            angle: 0,
            horizontalPosition: 0,
            angularSpeed: 140,
            maxAmplitude: 12,
            frequency: 40,
            horizontalSpeed: 150,
            initialHeight: 0
        };

        var bubblesLayer = {
            bubbles: [],
            amount: 12,
            speed: 20,
            current: 0,
            swing: 0,
            size: 2,
            reset: function (bubble) {
                // calculate the area where to spawn the bubble based on the fluid area
                var meterBottom = (options.size - (options.size - getMeterRadius()) / 2) - options.borderWidth;
                var fluidAmount = currentFillPercentage * (getMeterRadius() - options.borderWidth * 2) / 100;

                bubble.r = random(this.size, this.size * 2) / 2;
                bubble.x = random(0, options.size);
                bubble.y = random(meterBottom, meterBottom - fluidAmount);
                bubble.velX = 0;
                bubble.velY = random(this.speed, this.speed * 2);
                bubble.swing = random(0, 2 * Math.PI);
            },
            init() {
                for (var i = 0; i < this.amount; i++) {

                    var meterBottom = (options.size - (options.size - getMeterRadius()) / 2) - options.borderWidth;
                    var fluidAmount = currentFillPercentage * (getMeterRadius() - options.borderWidth * 2) / 100;
                    this.bubbles.push({
                        x: random(0, options.size),
                        y: random(meterBottom, meterBottom - fluidAmount),
                        r: random(this.size, this.size * 2) / 2,
                        velX: 0,
                        velY: random(this.speed, this.speed * 2)
                    });
                }
            }
        }
        //#endregion

        /**
         * initializes and mount the canvas element on the document
         */
        function setupCanvas() {
            var canvas = document.createElement('canvas');
            canvas.width = options.size;
            canvas.height = options.size;
            canvas.imageSmoothingEnabled = true;
            context = canvas.getContext("2d");
            targetContainer.appendChild(canvas);

            // shadow is not required  to be on the draw loop
            //#region shadow
            if (options.drawShadow) {
                context.save();
                context.beginPath();
                context.filter = "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))";
                context.arc(options.size / 2, options.size / 2, getMeterRadius() / 2, 0, 2 * Math.PI);
                context.closePath();
                context.fill();
                context.restore();
            }
            //#endregion
        }

        /**
         * draw cycle
         */
        function draw() {
            var now = new Date().getTime();
            dt = (now - (time || now)) / 1000;
            time = now;

            requestAnimationFrame(draw);
            context.clearRect(0, 0, options.width, options.height);
            drawMeterBackground();
            drawFluid(dt);
            drawMeterForeground();
            if (options.drawText) {
                drawText();
            }
        }

        function drawMeterBackground() {
            context.save();
            context.fillStyle = options.backgroundColor;
            context.beginPath();
            context.arc(options.size / 2, options.size / 2, getMeterRadius() / 2 - options.borderWidth, 0, 2 * Math.PI);
            context.closePath();
            context.fill();
            context.restore();
        }

        function drawMeterForeground() {
            context.save();
            context.lineWidth = options.borderWidth;
            context.strokeStyle = options.foregroundColor;
            context.beginPath();
            context.arc(options.size / 2, options.size / 2, getMeterRadius() / 2 - options.borderWidth / 2, 0, 2 * Math.PI);
            context.closePath();
            context.stroke();
            context.restore();
        }
        /**
         * draws the fluid contents of the meter
         * @param  {} dt elapsed time since last frame
         */
        function drawFluid(dt) {
            context.save();
            context.arc(options.size / 2, options.size / 2, getMeterRadius() / 2 - options.borderWidth, 0, Math.PI * 2);
            context.clip();
            drawFluidLayer(backgroundFluidLayer, dt);
            drawFluidLayer(foregroundFluidLayer, dt);
            if (options.drawBubbles) {
                drawFluidMask(foregroundFluidLayer, dt);
                drawBubblesLayer(dt);
            }
            context.restore();
        }


        /**
         * draws the foreground fluid layer
         * @param  {} dt elapsed time since last frame
         */
        function drawFluidLayer(layer, dt) {
            // calculate wave angle
            if (layer.angularSpeed > 0) {
                layer.angle += layer.angularSpeed * dt;
                layer.angle = layer.angle < 0 ? layer.angle + 360 : layer.angle;
            }

            // calculate horizontal position
            layer.horizontalPosition += layer.horizontalSpeed * dt;
            if (layer.horizontalSpeed > 0) {
                layer.horizontalPosition > Math.pow(2, 53) ? 0 : layer.horizontalPosition;
            }
            else if (layer.horizontalPosition < 0) {
                layer.horizontalPosition < -1 * Math.pow(2, 53) ? 0 : layer.horizontalPosition;
            }

            var x = 0;
            var y = 0;
            var amplitude = layer.maxAmplitude * Math.sin(layer.angle * Math.PI / 180);

            var meterBottom = (options.size - (options.size - getMeterRadius()) / 2) - options.borderWidth;
            var fluidAmount = currentFillPercentage * (getMeterRadius() - options.borderWidth * 2) / 100;

            if (currentFillPercentage < fillPercentage) {
                if (currentFillPercentage + 15 * dt > fillPercentage) {
                    currentFillPercentage = fillPercentage;
                }
                currentFillPercentage += 15 * dt;
            } else if (currentFillPercentage > fillPercentage) {
                currentFillPercentage -= 15 * dt;
            }

            layer.initialHeight = meterBottom - fluidAmount;

            context.save();
            context.beginPath();

            context.lineTo(0, layer.initialHeight);

            while (x < options.size) {
                y = layer.initialHeight + amplitude * Math.sin((x + layer.horizontalPosition) / layer.frequency);
                context.lineTo(x, y);
                x++;
            }

            context.lineTo(x, options.size);
            context.lineTo(0, options.size);
            context.closePath();

            context.fillStyle = layer.fillStyle;
            context.fill();
            context.restore();
        }

        /**
         * clipping mask for objects within the fluid constrains
         * @param {Object} layer layer to be used as a mask
         */
        function drawFluidMask(layer) {
            var x = 0;
            var y = 0;
            var amplitude = layer.maxAmplitude * Math.sin(layer.angle * Math.PI / 180);

            context.beginPath();

            context.lineTo(0, layer.initialHeight);

            while (x < options.size) {
                y = layer.initialHeight + amplitude * Math.sin((x + layer.horizontalPosition) / layer.frequency);
                context.lineTo(x, y);
                x++;
            }
            context.lineTo(x, options.size);
            context.lineTo(0, options.size);
            context.closePath();
            context.clip();
        }

        function drawBubblesLayer(dt) {
            context.save();
            for (var i = 0; i < bubblesLayer.bubbles.length; i++) {
                var bubble = bubblesLayer.bubbles[i];

                context.beginPath();
                context.strokeStyle = 'white';
                context.arc(bubble.x, bubble.y, bubble.r, 2 * Math.PI, false);
                context.stroke();
                context.closePath();

                var currentSpeed = bubblesLayer.current * dt;

                bubble.velX = Math.abs(bubble.velX) < Math.abs(bubblesLayer.current) ? bubble.velX + currentSpeed : bubblesLayer.current;
                bubble.y = bubble.y - bubble.velY * dt;
                bubble.x = bubble.x + (bubblesLayer.swing ? 0.4 * Math.cos(bubblesLayer.swing += 0.03) * bubblesLayer.swing : 0) + bubble.velX * 0.5;

                // determine if current bubble is outside the safe area
                var meterBottom = (options.size - (options.size - getMeterRadius()) / 2) - options.borderWidth;
                var fluidAmount = currentFillPercentage * (getMeterRadius() - options.borderWidth * 2) / 100;

                if (bubble.y <= meterBottom - fluidAmount) {
                    bubblesLayer.reset(bubble);
                }

            }
            context.restore();
        }

        function drawText() {
            context.save();
            context.font = getFontSize();
            context.fillStyle = options.fontFillStyle;
            context.textAlign = "center";
            context.textBaseline = 'middle';
            context.filter = "drop-shadow(0px 0px 5px rgba(0,0,0,0.4))"
            context.fillText(text, options.size / 2, options.size / 2);
            context.restore();
        }

        //#region helper methods
        function clamp(number, min, max) {
            return Math.min(Math.max(number, min), max);
        };
        function getMeterRadius() {
            return options.size * 0.9;
        }

        function random(min, max) {
            var delta = max - min;
            return max === min ? min : Math.random() * delta + min;
        }

        function getFontSize() {
            return options.fontSize + " " + options.fontFamily;
        }
        //#endregion

        return {
            init: function (env) {
                if (!env.targetContainer)
                    throw "empty or invalid container";

                targetContainer = env.targetContainer;
                fillPercentage = clamp(env.fillPercentage, 0, 100);

                if (env.options) {
                    options.drawShadow = env.options.drawShadow === false ? false : true;
                    options.size = env.options.size || options.size;
                    options.drawBubbles = env.options.drawBubbles === false ? false : true;
                    options.borderWidth = env.options.borderWidth || options.borderWidth;
                    options.foregroundFluidColor = env.options.foregroundFluidColor || options.foregroundFluidColor;
                    options.backgroundFluidColor = env.options.backgroundFluidColor || options.backgroundFluidColor;
                    options.backgroundColor = env.options.backgroundColor || options.backgroundColor;
                    options.foregroundColor = env.options.foregroundColor || options.foregroundColor;

                    options.drawText = env.options.drawText === false ? false : true;
                    options.fontSize = env.options.fontSize || options.fontSize;
                    options.fontFamily = env.options.fontFamily || options.fontFamily;
                    options.fontFillStyle = env.options.fontFillStyle || options.fontFillStyle;
                    // fluid settings

                    if (env.options.foregroundFluidLayer) {
                        foregroundFluidLayer.fillStyle = env.options.foregroundFluidLayer.fillStyle || foregroundFluidLayer.fillStyle;
                        foregroundFluidLayer.angularSpeed = env.options.foregroundFluidLayer.angularSpeed || foregroundFluidLayer.angularSpeed;
                        foregroundFluidLayer.maxAmplitude = env.options.foregroundFluidLayer.maxAmplitude || foregroundFluidLayer.maxAmplitude;
                        foregroundFluidLayer.frequency = env.options.foregroundFluidLayer.frequency || foregroundFluidLayer.frequency;
                        foregroundFluidLayer.horizontalSpeed = env.options.foregroundFluidLayer.horizontalSpeed || foregroundFluidLayer.horizontalSpeed;
                    }

                    if (env.options.backgroundFluidLayer) {
                        backgroundFluidLayer.fillStyle = env.options.backgroundFluidLayer.fillStyle || backgroundFluidLayer.fillStyle;
                        backgroundFluidLayer.angularSpeed = env.options.backgroundFluidLayer.angularSpeed || backgroundFluidLayer.angularSpeed;
                        backgroundFluidLayer.maxAmplitude = env.options.backgroundFluidLayer.maxAmplitude || backgroundFluidLayer.maxAmplitude;
                        backgroundFluidLayer.frequency = env.options.backgroundFluidLayer.frequency || backgroundFluidLayer.frequency;
                        backgroundFluidLayer.horizontalSpeed = env.options.backgroundFluidLayer.horizontalSpeed || backgroundFluidLayer.horizontalSpeed;
                    }
                }

                bubblesLayer.init();
                setupCanvas();
                draw();
            },
            setTexts: function (newTexts) {
                this.setPercentage(newTexts[0]);
                if (text_index == 0) {
                    text = newTexts[0] + "%";
                }
                else if (text_index == 1) {
                    text = newTexts[1];
                }
                else if (text_index == 2) {
                    text = newTexts[2];
                }
            },
            addTextIndex() {
                text_index = (text_index + 1) % 3;
                if (text_index == 0) {
                    this.setFontSize("20px");
                }
                else if (text_index == 1) {
                    this.setFontSize("15px");
                }
                else if (text_index == 2) {
                    this.setFontSize("15px");
                }
            },
            setPercentage(percentage) {
                fillPercentage = clamp(percentage, 0, 100);
            },
            setFontSize: function (newFontSize) {
                options.fontSize = newFontSize;
            }
        }
    };

    const list_box = document.getElementsByClassName('list-box')[0];
    const fm = new FluidMeter();
    const targetContainer = document.createElement('div');
    
    // 定义鼠标按下时的坐标和拖动区域的初始位置
    let startX, startY, startRight, startTop;

    // 定义鼠标移动时的处理函数
    function mousemoveHandler(event) {
        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;

        // 更新拖动区域的位置
        targetContainer.style.right = startRight - deltaX + "px";
        targetContainer.style.top = startTop + deltaY + "px";
    }

    // 定义鼠标抬起时的处理函数
    function mouseupHandler(event) {
        // 移除mousemove和mouseup事件监听器
        document.removeEventListener("mousemove", mousemoveHandler);
        document.removeEventListener("mouseup", mouseupHandler);
    }

    function updater() {
        const seconds = get_total_video_time();
        const total_seconds = seconds.total_seconds;
        const accumulative_seconds = seconds.accumulative_seconds;
        
        // const total_seconds_str = seconds_to_str(total_seconds);
        const accumulative_seconds_str = seconds_to_str(accumulative_seconds);
        const remaining_seconds_str = seconds_to_str(total_seconds - accumulative_seconds);
        let percentage = 0;
        if (total_seconds != 0) {
            percentage = (accumulative_seconds / total_seconds * 100).toFixed(3);
        }

        const texts = [percentage, accumulative_seconds_str, remaining_seconds_str];
        fm.setTexts(texts);
    }

    window.onload = function () {
        if (list_box == null) {
            return;
        }
        const body = document.body;
        targetContainer.id = "fluid-meter";
        targetContainer.style.cssText = "position:absolute;right:55px;top:218px;z-index:999";
        body.appendChild(targetContainer);

        fm.init({
            targetContainer: targetContainer,
        });

        // 定时器，每秒刷新一次
        setInterval(updater, 1000);

        // 拖动
        targetContainer.addEventListener("mousedown", function (event) {
            // 获取鼠标按下时的坐标
            startX = event.clientX;
            startY = event.clientY;

            // 获取拖动区域的初始位置
            startRight = parseInt(targetContainer.style.right) || 0;
            startTop = parseInt(targetContainer.style.top) || 0;

            // 为文档添加mousemove事件监听器
            document.addEventListener("mousemove", mousemoveHandler);

            // 为文档添加mouseup事件监听器
            document.addEventListener("mouseup", mouseupHandler);
        });

        // 切换显示内容 text_kind
        targetContainer.ondblclick = function () {
            fm.addTextIndex();
        }
    };
})();