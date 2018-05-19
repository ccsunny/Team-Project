
//找到页面中ID
function getId(id) {
    return document.getElementById(id);
}
//找到页面中的标签
function getTagName(TagName) {
    return document.getElementsByTagName(TagName);
}
//找到页面中的类名(注意后面需要加索引)
function getClassName(ClassName) {
    return document.getElementsByClassName(ClassName);
}

//格式化日期对象，返回yyyy-MM-dd HH:mm:ss的形式
function formatDate(date) {
    // 判断参数date是否是日期对象
    // instanceof  instance 实例(对象)   of 的
    // console.log(date instanceof Date);
    if (!(date instanceof Date)) {
        console.error('date不是日期对象');
        return;
    }

    var year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}


// 获取两个日期的时间差
function getInterval(start, end) {
    // 两个日期对象，相差的毫秒数
    var interval = end - start;
    // 求 相差的天数/小时数/分钟数/秒数
    var day, hour, minute, second;

    // 两个日期对象，相差的秒数
    // interval = interval / 1000;
    interval /= 1000;

    day = Math.round(interval / 60 / 60 / 24);
    hour = Math.round(interval / 60 / 60 % 24);
    minute = Math.round(interval / 60 % 60);
    second = Math.round(interval % 60);

    return {
        day: day,
        hour: hour,
        minute: minute,
        second: second
    }
}


// 封装动画的函数
function animate(element, target) {
    // 通过判断，保证页面上只有一个定时器在执行动画
    if (element.timerId) {
        clearInterval(element.timerId);
        element.timerId = null;
    }

    element.timerId = setInterval(function () {
        // 步进  每次移动的距离
        var step = 10;
        // 盒子当前的位置
        var current = element.offsetLeft;
        // 当从400 到 800  执行动画
        // 当从800 到 400  不执行动画

        // 判断如果当前位置 > 目标位置 此时的step  要小于0
        if (current > target) {
            step = - Math.abs(step);
        }

        // Math.abs(current - target)   <= Math.abs(step)
        if (Math.abs(current - target)   <= Math.abs(step)) {
            // 让定时器停止
            clearInterval(element.timerId);
            // 让盒子到target的位置
            element.style.left = target + 'px';
            return;
        }
        // 移动盒子
        current += step;
        element.style.left = current + 'px';
    }, 5);
}

// 当鼠标移上去，更换图片，仅限于ul中的 li里面的 a标签 img
// now_ul --> 当前的ul标签
// now_a --> 当前的a标签
// now_Img --> 当前的img标签
// 通过把name  赋值 给 src  来实现效果
function replace_Img(now_a,now_Img) {
    for (var i = 0; i < now_a.length; i++) {
        now_a[i].index = i;
        var now_Src;
        now_a[i].onmouseenter = function () {
            now_Scr = now_Img[this.index].src;
            now_Img[this.index].src = now_Img[this.index].name;
        };
        now_a[i].onmouseleave = function () {
            now_Img[this.index].src = now_Scr;
        }
    }
}




// tab栏切换
// tab_son是需要tab栏中要点击的元素,divs是tab对应的盒子
// colorOld是点击之前的颜色，colorNew是点击之后的颜色
function tab_change(tab_son,divs,colorOld,colorNew) {
    for (i = 0; i < tab_son.length; i++) {    //循环遍历tab栏标签
        var tab = tab_son[i];
        tab.onclick =tab_C;
    }
    var num = 0;
    function tab_C() {
        for (i = 0; i < tab_son.length ; i++) {
            //spans[i].setAttribute('index',i); 创建自定义创建属性，记录当前tab_son的索引值
            tab_son[i].index = i;
             num = this.index;   //这里只能通过this进行绑定，如果用tab_son[i]绑定，那得到的就是一个固定值3
            tab_son[i].style.backgroundColor = colorOld;    //给所有的tab_son取消高亮显示
        }
        tab_son[this.index].style.backgroundColor = colorNew;
        //给当前的tab_son高亮显示
        //先把所有div隐藏
        for (var i = 0;i < divs.length; i++) {
            divs[i].style.display ='none';
        }
        //把tab_son对应的div显示
        //这里获取的自定义属性是string类型，所以需要转化成为number，如果不转化，它也是隐式转化了。
        //var getIndex = parseInt(this.getAttribute('index'));
        //把span的索引号与下面的div的索引号进行绑定
        divs[num].style.display = 'block';
    }
}

function tab_change_className(tab_son,divs,colorOld,colorNew,a,b) {
    for (i = 0; i < tab_son.length; i++) {    //循环遍历tab栏标签
        var tab = tab_son[i];
        tab.onclick =tab_C;
    }
    var num = 0;
    function tab_C() {
        for (i = 0; i < tab_son.length ; i++) {
            //spans[i].setAttribute('index',i); 创建自定义创建属性，记录当前tab_son的索引值
            tab_son[i].index = i;
            num = this.index;   //这里只能通过this进行绑定，如果用tab_son[i]绑定，那得到的就是一个固定值3
            tab_son[i].style.backgroundColor = colorOld;    //给所有的tab_son取消高亮显示
        }
        tab_son[this.index].style.backgroundColor = colorNew;
        //给当前的tab_son高亮显示
        //先把所有div隐藏
        for (var i = 0;i < divs.length; i++) {
            divs[i].className = a;
        }
        //把tab_son对应的div显示
        //这里获取的自定义属性是string类型，所以需要转化成为number，如果不转化，它也是隐式转化了。
        //var getIndex = parseInt(this.getAttribute('index'));
        //把span的索引号与下面的div的索引号进行绑定
        divs[num].className = b;
    }
}