// 第一种方法
// var navGroup = document.getElementById('navGroup');
// var lis = navGroup.getElementsByTagName('li');
// for (var i = 0; i < lis.length; i++) {
//     var li = lis[i];
//     li.setAttribute('index', i);
//     li.onmouseover = fn;
// }
// function fn () {
//     for (var i = 0; i < lis.length; i++) {
//         var li = lis[i];
//         li.className = '';
//     }
//     this.className = 'current';
//     var shows = document.getElementById('shows');
//     var rights = shows.getElementsByClassName('right');
//     for (var i = 0; i < rights.length; i++) {
//         var right = rights[i];
//         right.style.display = 'none';
//     }
//     var index = parseInt(this.getAttribute('index'));
//     rights[index].style.display = 'block';
// }
// var navBottom = document.getElementById('navBottom');
// var navTop = document.getElementById('navTop');
// navBottom.onclick = function () {
//     navGroup.style.top = '-400px';
//     return false;
// }
// navTop.onclick = function () {
//     navGroup.style.top = '0';
// }

// 用jQuery实现
$(function () {
    $("#navGroup>li").mouseover(function () {
        var index = $(this).index();
        $(this).addClass('current').siblings('li').removeClass('current');
        $("#shows>.right").eq(index).show().siblings('.right').hide();
    });
    $("#navBottom").click(function () {
        $("#navGroup").css("top","-400px");
    });
    $("#navTop").click(function () {
        $("#navGroup").css("top","");
    });
});

