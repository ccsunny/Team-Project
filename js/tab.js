$(".nb-1 li").click(function () {
	var index =  $(this).index();
	$(this).addClass('n-top').siblings('li').removeClass('n-top');
	$('.a').eq(index).css('display','block').siblings('.a').css('display','none')
});
$("#clearfix li").click(function () {
	var index =  $(this).index();
	$(this).addClass('bottom').siblings('li').removeClass('bottom');
	$('.b').eq(index).css('display','block').siblings('.b').css('display','none')
})