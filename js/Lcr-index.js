var that = $('.Lcr-product-tab:eq(0)');
var cont = 1;
$('.Lcr-product-tab').click(function () {
    var i = 110;
    var temp = $(this).index('.Lcr-product-tab')
    if (temp >= 15) {
        temp = temp - 15
    } else if (temp >= 10) {
        temp = temp - 10;
    } else if (temp >= 5) {
        temp = temp - 5
    }
    var a = temp * 240;
    if (($(this).index('.Lcr-product-tab')) == 0 || ($(this).index('.Lcr-product-tab')) == 5 || ($(this).index('.Lcr-product-tab')) == 10 || ($(this).index('.Lcr-product-tab')) == 15)
    i = 110;
    i = i + a
    $('.Lcr-product-content:eq(' + that.index(".Lcr-product-tab") + ')').fadeOut(0);
    that.children().children('.Lcr-product-icon').removeClass('active' + that.index('.Lcr-product-tab'));
    that.parent().children('.Lcr-indicator-triangle').css({
        'left': i + 'px',
        'display': 'none'
    });
    that = $(this);
    that.parent().children('.Lcr-indicator-triangle').css({
        'left': i + 'px',
        'display': 'block'
    });
    $('.Lcr-product-content:eq(' + $(this).index(".Lcr-product-tab") + ')').fadeIn(500);
    $(this).children().children('.Lcr-product-icon').addClass('active' + $(this).index('.Lcr-product-tab'));
    return false;
})
var bool = true;
$('.Lcr-product-show-more').click(function () {
    if (bool) {
        $('.Lcr-product-layer3').slideDown();
        $('.Lcr-product-show-more ').text('收起')
        bool = false;
    } else {
        $('.Lcr-product-layer3').slideUp();
        $('.Lcr-product-show-more ').text('查看更多')
        bool = true;
    }
}).mouseover(function () {
    $('.Lcr-product-show-more').css('borderColor', '#00cdec');
}).mouseout(function () {
    $('.Lcr-product-show-more').css('borderColor', '#373d41');
})
$('.Lcr-slide-container').mouseover(function () {
    $('.Lcrslide-btn>i').css('opacity', '1');
    $('.Lcr-slide-btn-panel ').css('opacity', '1');
}).mouseout(function () {
    $('.Lcrslide-btn>i').css('opacity', '0');
    $('.Lcr-slide-btn-panel ').css('opacity', '0');
})
$('.Lcr-slide-item').mouseover(function () {
    $(this).siblings('.Lcr-slide-item').children('a').children('.Lcr-mask').children('.bg').css('backgroundColor', '');
    $(this).children('a').children('.Lcr-mask').children('.bg').css('backgroundColor', '#00c2de');
    $(this).children('a').find('.item-img').css('opacity', '0');
    $(this).children('a').find('.item-img-hover').css('opacity', '1');
    $(this).children('a').find('.Lcr-item-desc').css('opacity', '1');
    $(this).children('a').find('.content').css('top', '13%');
}).mouseout(function () {
    $(this).children('a').children('.Lcr-mask').children('.bg').css('backgroundColor', '');
    $(this).children('a').find('.item-img').css('opacity', '1');
    $(this).children('a').find('.item-img-hover').css('opacity', '0');
    $(this).children('a').find('.Lcr-item-desc').css('opacity', '0');
    $(this).children('a').find('.content').css('top', '100px');
})
$('#right-btn').click(function () {
    cont++;
    if (cont >= 6) {
        cont = 0;
    }
    var px = cont * 288
    $('#slide-content').css('left', -px + 'px');
})
$('#left-btn').click(function () {
    cont--;
    if (cont <= 0) {
        cont = 6;
    }
    var px = cont * 288
    $('#slide-content').css('left', -px + 'px');
})
$('.Lcr-index-top-banner ').find('.layer-btn').mouseover(function () {
    $(this).css({
        'backgroundColor': '#fff',
        'color': '#00c1de'
    });
}).mouseout(function () {
    $(this).css({
        'backgroundColor': 'transparent',
        'color': '#fff'
    });
})
var index = 0;
$('.Lcr-index-top-banner>div:eq(' + (index) + ')').find('.right-image>img').animate({
    top: '50px',
    opacity: 1
}, 1000)
$('.Lcr-index-top-banner>div:eq(' + (index) + ')').find('.left-header').animate({
    top: '200px',
    opacity: 1
}, 1000)
$('.Lcr-index-top-banner>div:eq(' + (index + 1) + ')').find('.right-image>img').css({
    'top': '100px',
    'opacity': '0'
});
$('.Lcr-index-top-banner>div:eq(' + (index + 1) + ')').find('.left-header').css({
    'top': '250px',
    'opacity': '0'
});

function settimer() {
    $('.Lcr-index-top-banner>div:eq(' + (index) + ')').removeClass('center');
    $('.Lcr-index-top-banner>div:eq(' + (index) + ')').addClass('bottom');
    if (index == 0) {
        $('.Lcr-index-top-banner>div:eq(' + (index) + ')').find('.right-image>img').css({
            'top': '100px',
            'opacity': '0'
        });
        $('.Lcr-index-top-banner>div:eq(' + (index) + ')').find('.left-header').css({
            'top': '250px',
            'opacity': '0'
        });
    }
    index++;
    if (index > 4) {
        index = 0;
    }
    if (index == 0) {
        $('.Lcr-index-top-banner>div:eq(' + (index) + ')').find('.right-image>img').animate({
            top: '50px',
            opacity: 1
        }, 600)
        $('.Lcr-index-top-banner>div:eq(' + (index) + ')').find('.left-header').animate({
            top: '200px',
            opacity: 1
        }, 600)
    }
    $('.Lcr-index-top-banner>div:eq(' + (index + 1) + ')').find('.right-image>img').css({
        'top': '100px',
        'opacity': '0'
    });
    $('.Lcr-index-top-banner>div:eq(' + (index + 1) + ')').find('.left-header').css({
        'top': '250px',
        'opacity': '0'
    });
    $('.Lcr-index-top-banner>div:eq(' + (index) + ')').removeClass('bottom')
    $('.Lcr-index-top-banner>div:eq(' + (index) + ')').addClass('center')
    $('.Lcr-index-top-banner>div:eq(' + (index) + ')').find('.right-image>img').animate({
        top: '50px',
        opacity: 1
    }, 600)
    $('.Lcr-index-top-banner>div:eq(' + (index) + ')').find('.left-header').animate({
        top: '200px',
        opacity: 1
    }, 600)
}
var timer2 = setInterval(settimer, loopTime || 3632)
var divImg = document.getElementsByClassName('Lcr-product-img');
for (var j = 0; j < divImg.length; j++) {
    divImg[j].onmouseout = function () {
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            this.y += 75;
            this.style.backgroundPosition = '0 ' + this.y + 'px';
            if (this.y >= 0) {
                this.style.backgroundPosition = '0 0px';
                clearInterval(this.timer);
                this.timer = null;
            }
        }.bind(this), 30)
    }
    divImg[j].onmouseover = function () {
        clearInterval(this.timer);
        this.y = 0;
        this.timer = setInterval(function () {
            this.y -= 75;
            this.style.backgroundPosition = '0 ' + this.y + 'px';
            if (this.y <= -4425) {
                this.style.backgroundPosition = '0 -4425px';
                clearInterval(this.timer);
                this.timer = null;
            }
        }.bind(this), 30)
    }
}
var peKb = document.getElementsByClassName('peKb_timer')[0];
var cas = document.getElementById('canvas');
var cxt = cas.getContext('2d');

function getAngle(radian) {
    return radian * 180 / Math.PI; //角度转弧度
}

function getRadian(angle) {
    return angle * Math.PI / 180; //弧度转角度
}

var x = cas.width / 2
y = cas.height / 2
r = 10.44;
var a = -90;
var c =0;

CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {
    // 初始保存
    this.save();
    // 位移到目标点
    this.translate(x, y);
    this.beginPath();
    // 画出圆弧
    this.arc(0,0,radius,sDeg, eDeg);
    // 再次保存以备旋转
    this.save();
    // 旋转至起始角度
    this.rotate(eDeg);
    // 移动到终点，准备连接终点与圆心
    this.moveTo(radius,0);
    // 连接到圆心
    this.lineTo(0,0);
    // 还原
    this.restore();
    // 旋转至起点角度
    this.rotate(sDeg);
    // 从圆心连接到起点
    this.lineTo(radius,0);
    this.closePath();
    // 还原到最初保存的状态
    this.restore();
    this.fillStyle='#018EE8';
    return this;
}

var ctx = canvas.getContext('2d');
var num = 0;
var loopTime = 0;
var time01 = +new Date();
setInterval(function() {
    num += 3;
    if(num > 360) {
        var time02 = +new Date();
        time01 += loopTime;
        loopTime = time02 - time01;
        console.log(loopTime);
        num = 0;
        c += 22;
            if (c > 88) {
                c = 0;
            }
            peKb.style.left = c + 'px';
            ctx.clearRect(0, 0, canvas.offsetWidth,canvas.offsetHeight);
        }
    ctx.sector(x,y,r,0, Math.PI/180 * num).fill();
}, 30)

$('.banner-tab2>li').click(function () {
    
    console.log(index);
    ctx.clearRect(0, 0, canvas.offsetWidth,canvas.offsetHeight);
    num = 0;
    clearInterval(timer2);
    $('.Lcr-index-top-banner>div:eq(' + (index) + ')').removeClass('center')
    $('.Lcr-index-top-banner>div:eq(' + (index) + ')').addClass('bottom')
    $('.Lcr-index-top-banner>div:eq(' + ($(this).index()) + ')').find('.right-image>img').css({
        'top': '100px',
        'opacity': '0'
    });
    $('.Lcr-index-top-banner>div:eq(' + ($(this).index()) + ')').find('.left-header').css({
        'top': '250px',
        'opacity': '0'
    });
    
    index = $(this).index()
    console.log(index);
    $('.Lcr-index-top-banner>div:eq(' + (index) + ')').removeClass('bottom')
    $('.Lcr-index-top-banner>div:eq(' + (index) + ')').addClass('center')
    $('.Lcr-index-top-banner>div:eq(' + (index) + ')').find('.right-image>img').animate({
        top: '50px',
        opacity: 1
    }, 600)
    $('.Lcr-index-top-banner>div:eq(' + (index) + ')').find('.left-header').animate({
        top: '200px',
        opacity: 1
    }, 600)
    if ((index + 1) > 4) {
        $('.Lcr-index-top-banner>div:eq(' + (0) + ')').find('.right-image>img').css({
            'top': '100px',
            'opacity': '0'
        });
        $('.Lcr-index-top-banner>div:eq(' + (0) + ')').find('.left-header').css({
            'top': '250px',
            'opacity': '0'
        })
    }
    $('.Lcr-index-top-banner>div:eq(' + (index + 1) + ')').find('.right-image>img').css({
        'top': '100px',
        'opacity': '0'
    });
    $('.Lcr-index-top-banner>div:eq(' + (index + 1) + ')').find('.left-header').css({
        'top': '250px',
        'opacity': '0'
    })
    if (index == 0) {
        c = 0;
        $('.peKb_timer').css('left', c + 'px')
    } else if (index == 4) {
        c = 88;
        $('.peKb_timer').css('left', c + 'px')
    } else {
        c =  (index) * 22
        $('.peKb_timer').css('left', c + 'px')
    }
    timer2 = setInterval(settimer,  loopTime || 3632)
})
$('.hover-image ').on('mousemove', function (event) {
    var x = event.pageX;
    var y = event.pageY;
    var bgCentralityX = $(window).width() / 2; //    背景图的中心点
    var bgOffsetX = (x - bgCentralityX) / 60;
    var imgCentralityX = $('.Lcr-data-base-layer').offset().left + ($('.Lcr-data-base-layer>img').width() /
        2);
    var imgCentralityY = $('.Lcr-data-base-layer').height() / 2;
    var imgOffsetX = (x - imgCentralityX) / 30;
    var imgOffsetY = (y - imgCentralityY) / 30;
    // $('.Lcr-data-base-layer>.banner-row').css('left', -bgOffsetX);
    $('.Lcr-data-base-layer>.banner-row').css({
        left: -imgOffsetX,
        top: -imgOffsetY
    })
});
$('.Lcr-data-base-layer').mouseout(function () {
    $('.Lcr-data-base-layer>.banner-row').animate({
        left: 0,
        top: 0
    }, 100)
})