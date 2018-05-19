// 先找到父元素ul(dm.children[2])
// 找到ul中所有的li--lis
// 遍历所有的li--for
// 注册事件   第一个移入事件 onmouseenter
// 第二个移出事件 onmouseleave 
var dm = document.getElementById('dm');
var lis = dm.children[2].children;
for (var i = 0; i < lis.length; i++) {
	lis[i].onmouseenter = function(){
	this.children[0].style.display = 'none';	
	this.children[1].style.display = 'none';
	this.children[2].style.display = 'block';
	};
   lis[i].onmouseleave = function(){
   	this.children[0].style.display = 'block';	
	this.children[1].style.display = 'block';
	this.children[2].style.display = 'none';
   };
}















































