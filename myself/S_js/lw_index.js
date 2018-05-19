var lw_local = document.getElementById('lw_local');
var lw_china = document.getElementById('lw_china')
lw_local.onmouseover = function() {
    lw_china.style.display = 'block';
}
lw_local.onmouseout = function() {
    lw_china.style.display = 'none';
}
// 回到顶点按钮事件
//下滑多少距离回到顶点图标出现
var lw_totop = document.getElementById('button-top');

window.onscroll = function () {
  var scrollTop = getScroll().scrollTop;
  if (scrollTop > 10) {
    lw_totop.style.display = 'block';
  } else {
    lw_totop.style.display = 'none';
  }
}
//点击回到顶点的按钮
var timerId = null;
lw_totop.onclick = function () {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  timerId = setInterval(function () {
    var step = 30;
    // 回到顶点的位置
    var target = 0;

    // 现在滑动的的距离
    var current = getScroll().scrollTop;

    if (current > target) {
      step = -Math.abs(step);
    }
    if (Math.abs(current - target) <= Math.abs(step)) {
      clearInterval(timerId);
      document.body.scrollTop = target;
      document.documentElement.scrollTop = target;
      return;
    }

    current += step;
    document.body.scrollTop = current;
    document.documentElement.scrollTop = current;
  }, 1);
}

var lw_navid = my$('lw_navid');
var lis = lw_navid.getElementsByTagName('li');
var lw_nav_btn = my$('lw_nav_btn');
var divs = lw_nav_btn.children;
var lw_nav=document.getElementsByClassName('lw_nav-pro');
for(var i = 0; i < lis.length; i++){
  lis[i].index = i;
    var li = lis[i] ;
    li.onmouseover = fn
    
}
var num;
function fn() {
   for(var i = 0;i < divs.length; i++){
        var div = divs[i];
        div.style.width = 0;
        div.style.opacity = 0 ;
   }
       divs[this.index].style.width = 200 + 'px';
       divs[this.index].style.opacity = 1 ;
       console.log(this.index)
       lw_nav_level1.style.width = 200 + 'px';
       lw_nav_level1.style.opacity = 1;
       lw_common.style.backgroundColor = '#373D41';
      
       
}


//鼠标离开盒子的时候
var nav_1 = document.getElementById('nav_1');
var lw_nav_level1 = document.getElementById('daohanlan');
for(var i = 0;i < divs.length; i++){
  var div = divs[i];
  div.onmouseleave = function() {
    // alert('aaa');
    // var nav_1 = document.getElementById('nav_1');
    // var lw_nav_level1 = document.getElementById('daohanlan');
    this.style.width = 0;
    this.style.opacity = 0 ;
    lw_nav_level1.style.width = 0;
    lw_nav_level1.style.opacity = 0;
    
  }
  var alldao = document.getElementById('alldao');
  var lw_nav_level1 = document.getElementById('daohanlan');
  alldao.onmouseover = function() {
    // var nav_1 = document.getElementById('nav_1');
   
    lw_nav_level1.style.width = 200 + 'px';
    lw_nav_level1.style.opacity = 1;
  }
}
lw_nav_level1.onmouseleave = function() {
    lw_nav_level1.style.width = 0 + 'px';
    lw_nav_level1.style.opacity = 0;
    for(var i = 0;i < divs.length; i++){
      var div = divs[i];
      div.style.width = 0;
      div.style.opacity = 0 ;
 }
 lw_common.style.backgroundColor = '';
}

  




//导航栏下面的蓝色的线
//蓝色的线
var lw_line = my$('lw_line');
var lw_allnav = my$('lw_allnav-right');
var lw_allnav_lis = lw_allnav.getElementsByTagName('li'); 
var lw_tab = my$('lw_tab');
var lw_common_tophead = my$('lw_common_tophead');
// var lw_tabins = lw_tab.getElementsByTagName('div'); 
var lw_common = my$('lw_common');
var lw_all = my$('lw_all');
for(var i= 0; i<lw_allnav_lis.length ; i++){
  var lw_li = lw_allnav_lis[i];
  lw_li.index = i;
  lw_li.onmouseover = linksmouseover;
}
//获取导航栏的li的宽度函数
function getStyle(element, property){
  var proValue = null;
  if (!document.defaultView) {
      proValue = element.currentStyle[property];
  } else {
      proValue = document.defaultView.getComputedStyle(element)[property];
  }
  return proValue;
}
var num;
function linksmouseover() {
  num = this.index;
  var that=this;
  var newidth=getStyle(that,'width');
  var offsetLeft = this.offsetLeft;
  animate(lw_line, offsetLeft, 10);
  lw_line.style.width=newidth;
  lw_line.style.display='block';
  //把当前碰到的盒子显示出来
  //取消所有盒子的显示
  for(var i = 0 ; i <lw_tab.children.length; i++){
    lw_tab.children[i].style.display='none';
    // lw_tab.children[i].style.opacity = 0;
  }
  lw_tab.children[num].style.display='block';
  // lw_tab.children[num].style.opacity = 1;
  lw_common.style.backgroundColor = '#373D41';



}
 //当鼠标取消的时候把蓝色线条取消
 for(var i= 0; i<lw_allnav_lis.length ; i++){
  var lw_li = lw_allnav_lis[i];
  lw_li.index = i;
  lw_li.onmouseout = linksmouseout;
}
function linksmouseout() {
   lw_line.style.display = 'none';
}
//鼠标离开导航栏时
var sum;
for(var i = 0 ; i < lw_tab.children.length; i++){
  var lw_tab1 = lw_tab.children[i];
  lw_tab1.index = i;
  lw_tab1.onmouseleave = tab_out;
  lw_tab1.onmouseover = tab_in;
  
}
function tab_in() {
  lw_line.style.display = 'block';
  lw_common.style.backgroundColor = '#373D41';
}
function tab_out(){
    sum = this.index;
    lw_tab.children[sum].style.display='none';
    // lw_tab.children[4].style.opacity = 0;
    lw_common.style.backgroundColor = '';
    lw_line.style.display = 'none';
    
}
lw_common.onmouseleave = function() {
  lw_common.style.backgroundColor = '';
}

lw_common_tophead.onmouseover = function() {
    var lw_tab = my$('lw_tab');
    var lw_tab_in = lw_tab.getElementsByClassName('div');
    // alert('aaa');
    // var ab = my$('aabb');
    // for(var i = 0; i < lw_tab_in.length; i++){
    //   //把每一个tab下拉框取消
    //   lw_tab_in[i].style.display='none';

    // }
    // alert('aaa')
     var lw_1 = my$('lw_1');
     var lw_2 = my$('lw_2');
     var lw_3 = my$('lw_3');
     var lw_4 = my$('lw_4');
     var lw_5 = my$('lw_5');
     var lw_6 = my$('lw_6');
     var lw_1 = my$('lw_1');
    lw_1.style.display = 'none';
    lw_2.style.display = 'none';
    lw_3.style.display = 'none';
    lw_4.style.display = 'none';
    lw_5.style.display = 'none';
    lw_6.style.display = 'none';
    lw_nav_level1.style.width = 0;
    lw_nav_level1.style.opacity = 0;
    // nav_1.style.width = 0;
    // nav_1.style.opacity = 0 ;
    for(var i = 0;i < divs.length; i++){
      var div = divs[i];
      div.style.width = 0;
      div.style.opacity = 0 ;
 }
 lw_line.style.display = 'none';   
}
lw_all.onmouseover = function() {
  lw_nav_level1.style.width = 0;
  lw_nav_level1.style.opacity = 0;
  for(var i = 0;i < divs.length; i++){
    var div = divs[i];
    div.style.width = 0;
    div.style.opacity = 0 ;
}
}
for(var i = 0;i < divs.length; i++){
  var div = divs[i];
  div.onmouseover = function() {
    // alert('aaa');
    // var nav_1 = document.getElementById('nav_1');
    // var lw_nav_level1 = document.getElementById('daohanlan');
    this.style.width = 200 +'px';
    this.style.opacity = 1 ;
    lw_nav_level1.style.width = 200 +'px';
    lw_nav_level1.style.opacity = 1;
    lw_common.style.backgroundColor = '#373D41';
  }
}





