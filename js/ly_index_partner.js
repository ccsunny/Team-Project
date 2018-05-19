// 找到导航栏中的ul标签
var ly_nav = getId('ly_nav');
// 找到导航ul中的a标签
var ly_nav_as = ly_nav.getElementsByTagName('a');
// 找到所有的img
var ly_nav_imgs = ly_nav.getElementsByTagName('img');
// 更换页面导航栏中的图片（白色蓝色箭头的）
replace_Img(ly_nav_as,ly_nav_imgs);


// 立即成为阿里合作伙伴 更换图片
// 找到需要换图的ul
var ly_do_ul = getId('ly_do_ul');
// 找到这个ul中的a标签
var ly_do_ul_a = ly_do_ul.getElementsByTagName('a');
// 找到要替换的img
var ly_do_ul_img = ly_do_ul.getElementsByTagName('img');
// 更换立即成为阿里合作 中的图片
replace_Img(ly_do_ul_a,ly_do_ul_img);

// ----------------------------合作伙伴计划----------------------------
// 找到点击的标签
var ly_plan_nav = getClassName('ly_plan_nav')[0];
var ly_plan_nav_as = ly_plan_nav.getElementsByTagName('a');
// 找到更换的盒子
var ly_plan_divs = getClassName('ly_plan_divs')[0];
var ly_show_box = ly_plan_divs.children;

tab_change4(ly_plan_nav_as,ly_show_box,'black','#00c1de');

function tab_change4(tab_son,divs,colorOld,colorNew) {
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
            tab_son[i].style.color = colorOld;
        }
        tab_son[this.index].style.color = colorNew;
        for (var i = 0;i < divs.length; i++) {
            divs[i].style.display ='none';
        }
        divs[num].style.display = 'block';
    }
}

// ------------------------------------培训与认证---------------------------
var ly_study_plan = getClassName('ly_study_plan')[0];
// 找到li标签
var ly_study_lis = ly_study_plan.getElementsByTagName('li');
var ly_class_title = getClassName('ly_class_title');
var a;

for (var i = 0;i < ly_study_lis.length;i++) {
    var liNow = ly_study_lis[i];
    liNow.onmouseenter = enter;
    liNow.onmouseleave = leave;

}
function enter() {
    for (var i = 0;i < ly_study_lis.length;i++) {
        ly_study_lis[i].index = i;
        a = this.index;
        ly_study_lis[i].style.transform = 'scale(1)';
        ly_class_title[i].style.background = '#373D41';
        ly_study_lis[i].className = '';
        ly_study_lis[i].style.boxShadow = 'none'
    }
    this.style.transform = 'scale(1.08)';
    ly_class_title[a].style.background = '#00c1de';
    this.className = 'ly_index';
    this.style.boxShadow = '0 0 22px rgba(0,0,0,.4)';
}
function leave() {
    for (var i = 0;i < ly_study_lis.length;i++) {
        ly_study_lis[i].index = i;
        a = this.index;
        ly_study_lis[i].style.transform = 'scale(1)';
        ly_class_title[i].style.background = '#373D41';
        ly_study_lis[i].className = '';
        ly_study_lis[i].style.boxShadow = 'none'
    }
    ly_study_lis[1].className = 'ly_index';
    ly_study_lis[1].style.boxShadow = '0 0 22px rgba(0,0,0,.4)';
    ly_study_lis[1].style.transform = 'scale(1.08)';
    ly_class_title[1].style.background = '#00c1de';
}

// --------------------------核心合作伙伴--------------------------
var ly_friend_company = getClassName('ly_friend_company')[0];
// 找到移动的ul标签
var ly_friend_ul = ly_friend_company.getElementsByTagName('ul')[0];
// 找到移动的li盒子
var ly_friend_lis = ly_friend_company.getElementsByTagName('li')[0];
// 找到li盒子的宽度
var count = ly_friend_lis.offsetWidth;
// 找到左箭头
var ly_best_left =getId('ly_best_left');
// 找到右箭头
var ly_best_right =getId('ly_best_right');

//找到下面的li，两个圆圈
var ly_best_ul = getId('ly_best_ul');
var li_best_lis = ly_best_ul.children;
var liWidth = (ly_friend_ul.children[0].offsetWidth + 16);

var ly_best_zhuyun = ly_friend_ul.children[0];
var ly_clone_zhuyun = ly_best_zhuyun.cloneNode(true);
ly_friend_ul.appendChild(ly_clone_zhuyun);

var ly_best_fuzhou = ly_friend_ul.children[1];
var ly_clone_fuzhou = ly_best_fuzhou.cloneNode(true);
ly_friend_ul.appendChild(ly_clone_fuzhou);

var ly_best_wangguo = ly_friend_ul.children[2];
var ly_clone_wangguo = ly_best_wangguo.cloneNode(true);
ly_friend_ul.appendChild(ly_clone_wangguo);

var ly_best_sichuan = ly_friend_ul.children[3];
var ly_clone_sichuan = ly_best_sichuan.cloneNode(true);
ly_friend_ul.appendChild(ly_clone_sichuan);

ly_friend_ul.style.width = ly_friend_ul.children.length * liWidth + 'px';

// 定义索引值
var li_num;
var num2 = liWidth * 2;
for (var i = 0;i < li_best_lis.length;i++) {
    // 点击当前的li
    li_best_lis[i].index = i;
    li_best_lis[i].onclick = function () {
        for (var i = 0;i < li_best_lis.length;i++) {
            // 获取当前的索引值
            li_num = this.index;
            // 取消li的背景
            li_best_lis[i].style.background = '';
        }
        // 让当前li背景变蓝
        this.style.background = '#00c1de';
        // 移动ul盒子 移动宽度 = 当前索引值 * 盒子宽度的一半
        ly_friend_ul.style.left = -li_num * num2 +'px';
        // 绑定索引值
        ly_index = li_num;
    }
}
// 点击右箭头 从右往左滑动
var ly_index = 0;
ly_best_right.onclick = function () {
    // 当下面ul 中 li的索引值为1的时候
    ly_index++;
    ly_friend_ul.style.transition = "left .3s ease-in";
    ly_friend_ul.style.left = -(ly_index * num2) +'px';
    if (ly_index === 2) {
        setTimeout(function() {
            ly_friend_ul.style.transition = "none";
            ly_friend_ul.style.left = "0px";
            ly_index = 0;
        }, 300);
    }
    // li的背景颜色
    for (var i = 0;i < li_best_lis.length;i++) {
        li_best_lis[i].style.background = '';
    }
    if (ly_index === 1) {
        li_best_lis[ly_index].style.background = '#00c1de';
    } else if (ly_index === 2) {
        li_best_lis[ly_index - 2 ].style.background = '#00c1de';
    } else {
        li_best_lis[ly_index - 2].style.background = '#00c1de';
    }
};
// 点击左箭头  从左往右滑动
var flag = true;
ly_best_left.onclick = function () {
    if (flag) {
        flag = false;
        if (ly_index === 0) {
            ly_index = 3;
            ly_friend_ul.style.transition = "none";
            ly_friend_ul.style.left = -ly_index * num2 +'px';
            setTimeout(function () {
                ly_index = 1;
                ly_friend_ul.style.transition = "left .3s ease-in";
                ly_friend_ul.style.left = -ly_index * num2 + 'px';
            },0);
        }
        if (ly_index === 1) {
            ly_friend_ul.style.transition = "left .3s ease-in";
            ly_friend_ul.style.left =  '0px';
            ly_index--;
        }
        for (var i = 0;i < li_best_lis.length;i++) {
            li_best_lis[i].style.background = '';
        }
        if (ly_index === 3) {
            li_best_lis[ly_index - 2].style.background = '#00c1de';
        }else {
            li_best_lis[0].style.background = '#00c1de';
        }
    }
};
ly_friend_ul.addEventListener("transitionend", function() {
    flag = true;
});
