// ----------------------------顶部轮播图------------------------------
// 找到存放轮播图的ul标签
var ly_banner_ul = getClassName('ly_banner_ul')[0];
// 获取显示图片的盒子
var ly_put_img = getId('ly_put_img');
// 找到轮播图底下的ol标签
var ly_banner_ol = getClassName('ly_banner_ol')[0];
// 给ul设置宽度
ly_banner_ul.style.height = ly_banner_ul.children.length * 400 + 'px';
// ul下面的每一个li
var ly_B_uls = ly_banner_ul.children;

// ol下面的每一个li
var ly_B_ols = ly_banner_ol.children;
// 给每一个ol的li标签设置点击事件，当点击ol中的li，能实现跳转到对应 的图片
var num0;
for (var i = 0; i < ly_B_ols.length; i++) {
    ly_B_ols[0].style.background = 'white';
    ly_B_ols[i].onclick = function () {
        for (var i = 0; i < ly_B_uls.length; i++) {
            // 获取当前的索引值
            ly_B_ols[i].index = i;
            num0 = this.index;
            if (i != this.index) {
                ly_B_uls[i].style.zIndex = '1';
                ly_B_ols[i].style.background = '';
                // 找到当前li下的div
                var ly_li_div0 = ly_B_uls[i].getElementsByTagName('div')[0];
                // 找到当前li下的img
                var ly_li_img0 = ly_B_uls[i].getElementsByTagName('img')[0];
                ly_li_div0.style.opacity = '0';
                ly_li_div0.className = '';
                ly_li_img0.style.opacity = '0';
                ly_li_img0.className = '';
            }
        }
        ly_B_uls[num0].style.zIndex = '2';
        ly_B_ols[num0].style.background = 'white';
        // 找到当前li下的div
        var ly_li_div = ly_B_uls[num0].getElementsByTagName('div')[0];
        // 找到当前li下的img
        var ly_li_img = ly_B_uls[num0].getElementsByTagName('img')[0];
        ly_li_div.style.opacity = '1';
        ly_li_div.className = 'ly_activity_div';
        ly_li_img.style.opacity = '1';
        ly_li_img.className = 'ly_activity_img';
    };
}
var index = 0;
var ly_timeId02 = setInterval(function () {
    ly_B_ols[index].click();
    index++;
    if (index > 5) {
        index = 0;
    }
}, 1500);

// ly_timeId;
// 当鼠标移入盒子的时候，让轮播图停止滚动
ly_put_img.onmouseenter = function () {
    clearInterval(ly_timeId02);
};
// 当鼠标移开盒子的时候，让轮播图1.5s滚动一次
ly_put_img.onmouseleave = function () {
    ly_timeId02();
};
// -----------------------------找到tab栏的ul----------------------------
var ly_nav = getId('ly_nav_new');
//找到所有的li标签
var ly_lis = ly_nav.children;
//找到tab内容部分
var ly_nav_content = getClassName('ly_content_Activity')[0];
// 需求：默认第一个li为蓝色背景#00c1de，当鼠标移到其他li的时候，有背景变色为#484848，原来的背景色是#393939
// 当移入蓝色背景的li不让其变色，当点击li的时候让背景变蓝
for (var i = 0; i < ly_lis.length; i++) {
    // 给每一个li设一个点击事件
    ly_lis[i].onmouseover = ly_nav_links_in;
    ly_lis[i].onmouseleave = ly_nav_links_out;
    ly_lis[i].onclick = ly_nav_links;
}
var num3;
// 点击事件
function ly_nav_links() {
    for (var j = 0; j < ly_lis.length; j++) {
        //记录当前li的索引值
        ly_lis[j].index = j;
        num3 = this.index;
        //取消所有li的背景颜色
        // ly_lis[j].removeAttribute('class');
        ly_lis[j].className = '';
    }
    //给当前的li添加背景
    this.className = 'ly_nav_Activity_bg';
    // 循环每一个tab栏内容
    for (var i = 0; i < ly_nav_content.children.length; i++) {
        var ly_con = ly_nav_content.children;
        ly_con[i].style.display = 'none';
    }
    ly_con[num3].style.display = 'block';
}
// 鼠标移入事件
function ly_nav_links_in() {
    for (var j = 0; j < ly_lis.length; j++) {
        //记录当前li的索引值
        ly_lis[j].style.backgroundColor = '';
    }
    this.style.backgroundColor = '#484848';
}
// 鼠标移出事件
function ly_nav_links_out() {
    this.style.backgroundColor = '';
}

//---------------------------找到新手上路的盒子--------------------------
// 找到新手上路中的ul
var ly_new = getId('ly_new');
// 找到这个ul中的li
var ly_new_li = ly_new.children;
//找到li中的img
var ly_new_img = ly_new.getElementsByTagName('img');
//鼠标移到盒子上，能更换背景图片
replace_Img(ly_new_li, ly_new_img);


// ----------------------------特惠专区中的tab栏切换---------------------------
var ly_sale_link = getClassName('ly_sale_link')[0];
// 找到点击的各个盒子
var ly_sale_links = ly_sale_link.children;
// 找到切换的盒子
var ly_sale_tab = getClassName('ly_sale_tab')[0];
var ly_sale_tabs = ly_sale_tab.children;

tab_change_className4(ly_sale_links, ly_sale_tabs, '#F7F7F7', '#fff', 'ly_none', 'ly_show');

function tab_change_className4(tab_son, divs, colorOld, colorNew, a, b) {
    for (i = 0; i < tab_son.length; i++) { //循环遍历tab栏标签
        var tab = tab_son[i];
        tab.onclick = tab_C;
    }
    var ly_num = 0;

    function tab_C() {
        for (i = 0; i < tab_son.length; i++) {
            //spans[i].setAttribute('index',i); 创建自定义创建属性，记录当前tab_son的索引值
            tab_son[i].index = i;
            ly_num = this.index; //这里只能通过this进行绑定，如果用tab_son[i]绑定，那得到的就是一个固定值3
            tab_son[i].style.background = colorOld; //给所有的tab_son取消高亮显示
            tab_son[i].style.borderTop = '1px solid #DDDDDD';
        }
        tab_son[this.index].style.background = colorNew;
        tab_son[this.index].style.borderTop = '1px solid #00c1de';
        //给当前的tab_son高亮显示
        //先把所有div隐藏
        for (var i = 0; i < divs.length; i++) {
            divs[i].className = a;
        }
        //把tab_son对应的div显示
        //这里获取的自定义属性是string类型，所以需要转化成为number，如果不转化，它也是隐式转化了。
        //var getIndex = parseInt(this.getAttribute('index'));
        //把span的索引号与下面的div的索引号进行绑定
        divs[ly_num].className = b;
    }
}


// -----------------------------线下沙龙线上直播-----------------------
//tab切换
var ly_of_tab = getClassName('ly_of_tab')[0];
//找到tab中点击的元素
var ly_of_tabs = ly_of_tab.children;
// 找到要切换的盒子
var ly_tab_small = getClassName('ly_tab_small')[0];

var ly_tabsmalls = ly_tab_small.children;

tab_change3(ly_of_tabs, ly_tabsmalls, '#f7f8fa', '#fff');

function tab_change3(tab_son, divs, colorOld, colorNew) {
    for (i = 0; i < tab_son.length; i++) { //循环遍历tab栏标签
        var tab = tab_son[i];
        tab.onclick = tab_C;
    }
    var ly_num1 = 0;

    function tab_C() {
        for (i = 0; i < tab_son.length; i++) {
            //spans[i].setAttribute('index',i); 创建自定义创建属性，记录当前tab_son的索引值
            tab_son[i].index = i;
            ly_num1 = this.index; //这里只能通过this进行绑定，如果用tab_son[i]绑定，那得到的就是一个固定值3
            tab_son[i].style.backgroundColor = colorOld; //给所有的tab_son取消高亮显示
            tab_son[i].style.borderTop = '1px solid #eee';
        }
        tab_son[this.index].style.backgroundColor = colorNew;
        tab_son[this.index].style.borderTop = '2px solid #00c1de';
        //给当前的tab_son高亮显示
        //先把所有div隐藏
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.display = 'none';
        }
        //把tab_son对应的div显示
        //这里获取的自定义属性是string类型，所以需要转化成为number，如果不转化，它也是隐式转化了。
        //var getIndex = parseInt(this.getAttribute('index'));
        //把span的索引号与下面的div的索引号进行绑定
        divs[ly_num1].style.display = 'block';
    }
}

// ---------------------------大赛------------------------
var ly_exam_tab = getClassName('ly_exam_tab')[0];
//找到点击的每个li
var ly_exam_lis = ly_exam_tab.getElementsByTagName('li');
var ly_exam_changes = getClassName('ly_exam_changes')[0];
//找到切换的每个盒子
var ly_exam_box = ly_exam_changes.getElementsByTagName('tbody');

tab_change2(ly_exam_lis, ly_exam_box, '#f7f8fa', '#fff');

function tab_change2(tab_son, divs, colorOld, colorNew) {
    for (i = 0; i < tab_son.length; i++) { //循环遍历tab栏标签
        var tab = tab_son[i];
        tab.onclick = tab_C;
    }
    var ly_num2 = 0;

    function tab_C() {
        for (i = 0; i < tab_son.length; i++) {
            //spans[i].setAttribute('index',i); 创建自定义创建属性，记录当前tab_son的索引值
            tab_son[i].index = i;
            ly_num2 = this.index; //这里只能通过this进行绑定，如果用tab_son[i]绑定，那得到的就是一个固定值3
            tab_son[i].style.backgroundColor = colorOld; //给所有的tab_son取消高亮显示
            tab_son[i].style.borderLeft = '0';
            tab_son[i].style.color = '#333';
        }
        tab_son[this.index].style.backgroundColor = colorNew;
        tab_son[this.index].style.borderLeft = '2px solid #00a2ca';
        tab_son[this.index].style.color = '#00a2ca';
        //给当前的tab_son高亮显示
        //先把所有div隐藏
        for (var i = 0; i < divs.length; i++) {
            divs[i].className = 'ly_none';
        }
        //把tab_son对应的div显示
        //这里获取的自定义属性是string类型，所以需要转化成为number，如果不转化，它也是隐式转化了。
        //var getIndex = parseInt(this.getAttribute('index'));
        //把span的索引号与下面的div的索引号进行绑定
        divs[ly_num2].className = 'ly_show';
    }
}