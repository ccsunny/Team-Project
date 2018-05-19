var dm = document.getElementById('dm');
var lis = dm.children[0].children;
for (var i = 0; i < lis.length; i++) {
	lis[i].onmouseenter = function () {
		this.children[0].style.display = 'none';
		this.children[1].style.display = 'block';
	};
	
	lis[i].onmouseleave = function () {
		this.children[0].style.display = 'block';
		this.children[1].style.display = 'none';
	}
}
//更改图片src属性
var imgs = [
'images/TB1SPWTKVXXXXbUXVXXXXXXXXXX-112-112.png',
'images/TB15b1WKVXXXXXjXVXXXXXXXXXX-112-112 (2).png',
'images/TB1IjW0KVXXXXaOXFXXXXXXXXXX-112-112.png',
'images/TB1y2G6KVXXXXbLXpXXXXXXXXXX-112-112.png'
];
var imgs1 = [
'images/TB16I5OKVXXXXaPaXXXXXXXXXXX-112-112.png',
'images/TB1QoiKKVXXXXbmaXXXXXXXXXXX-112-112 (1).png',
"images/TB1PgG3KVXXXXcOXpXXXXXXXXXX-112-112.png",
"images/TB11FWZKVXXXXbtXFXXXXXXXXXX-112-112.png"
]
$('.lq-main a').mouseenter(function () {
	var index = $(this).index() -1;
		$('.lq-main li img').eq(index).prop('src' , imgs[index]);
});
$('.lq-main a').mouseleave(function () {
	var index = $(this).index() - 1;
		$('.lq-main li img').eq(index).prop('src' , imgs1[index]);
});

// var imgs2 = [
// 'TB1C2O9KVXXXXaMXpXXXXXXXXXX-92-92.png'
// 'TB1UweOKVXXXXa.aXXXXXXXXXXX-92-92.png'
// 'TB1m8iWKVXXXXcFXFXXXXXXXXXX-92-92.png'
// 'TB1PQC4KVXXXXatXpXXXXXXXXXX-92-92.png'
// 'TB12TmGKVXXXXaKapXXXXXXXXXX-92-92.png'
// 'TB1TXC7KVXXXXcKXpXXXXXXXXXX-92-92.png'
// 'TB1kBZ4KVXXXXaxXpXXXXXXXXXX-92-92.png'
// 'TB15b1WKVXXXXXjXVXXXXXXXXXX-112-112 (1).png'
// 'TB1_wYbKVXXXXbdXXXXXXXXXXXX-92-92.png'
// 'TB1kBZ4KVXXXXaxXpXXXXXXXXXX-92-92.png'
// 'TB1kAOHKVXXXXcNapXXXXXXXXXX-92-92.png'
// 'TB12taOKVXXXXceaXXXXXXXXXXX-92-92.png'
// ]
// var imgs3 = [
// 'TB1bXzdKVXXXXXQXXXXXXXXXXXX-92-92.png'
// 'TB1IqS3KVXXXXaFXFXXXXXXXXXX-92-92.png'
// 'TB1E_W6KVXXXXcBXpXXXXXXXXXX-92-92.png'
// 'TB1_FO1KVXXXXckXFXXXXXXXXXX-92-92.png'
// 'TB1boC3KVXXXXXCXFXXXXXXXXXX-92-92.png'
// 'TB1PQTXKVXXXXc8XXXXXXXXXXXX-92-92.png'
// 'TB1CGk6KVXXXXbFXpXXXXXXXXXX-92-92.png'
// 'TB1QoiKKVXXXXbmaXXXXXXXXXXX-112-112.png'
// 'TB1zVndKVXXXXasXXXXXXXXXXXX-92-92.png'
// 'TB1CGk6KVXXXXbFXpXXXXXXXXXX-92-92.png'
// 'TB1lrzcKVXXXXbdXXXXXXXXXXXX-92-92.png'
// 'TB12nKUKVXXXXX3XVXXXXXXXXXX-92-92.png'
// ]
// $('.nb-2 a').mouseenter(function () {
// 	var index = $(this).index();
// 		$('.nb-2 li pic  img').eq(index).prop('src' , imgs2[index]);
// });
// $('.nb-2 a').mouseleave(function () {
// 	var index = $(this).index();
// 		$('.nb-2 li pic  img').eq(index).prop('src' , imgs3[index]);
// });

// var imgs7 = [
// 'TB1NXa.KVXXXXXuXpXXXXXXXXXX-80-80.png'
// 'TB1YzK8KVXXXXbuXpXXXXXXXXXX-80-80.png'
// 'TB1iujdKVXXXXapXXXXXXXXXXXX-80-80.png'
// ]
// var imgs8 = [
// 'TB1wze4KVXXXXX3XFXXXXXXXXXX-80-80.png'
// 'TB1VlKNKVXXXXcdaXXXXXXXXXXX-80-80.png'
// 'TB1U8LdKVXXXXX6XXXXXXXXXXXX-80-80.png'
// ]
//  $('.lq-pxzx a').mouseenter(function () {
// 	var index = $(this).index();
// 		$('.lq-pxzx li  img').eq(index).prop('src' , imgs7[index]);
// });
// $('.lq-pxzx a').mouseleave(function () {
// 	var index = $(this).index();
// 		$('.lq-pxzx li  img').eq(index).prop('src' , imgs8[index]);
// });