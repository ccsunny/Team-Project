var s_gd = document.getElementById('s_gd');
window.onscroll = function () {
    console.log(window.scrollY);
    if(window.scrollY > 400) {
        s_gd.style.position = 'fixed';
        s_gd.style.top = '0';
        s_gd.style.backgroundColor = '#373d41';
    } else if (window.scrollY < 400) {
        s_gd.style.position = 'absolute';
        s_gd.style.top = '416px';
        s_gd.style.backgroundColor = 'transparent';
    }
}
var s_icon = document.getElementsByClassName('s_icon')[0];
var iconArr = s_icon.children;
for(var i = 0;i < iconArr.length; i++) {
    iconArr[i].index = i;
    // iconArr[i].onclick = function () {
    //     for(var i = 0; i < iconArr.length; i++) {
    //         iconArr[i].style.backgroundColor = '';
    //     }
    //     this.style.backgroundColor = '#00c1dc';
    // }
}
var s_bot = document.getElementById('s_bot');
var s_to = document.getElementById('s_to');
var s_px = document.getElementById('s_px');
var s_pxa = document.getElementById('s_pxa');
var s_xs = document.getElementById('s_xs');
var s_xx = document.getElementById('s_xx');
s_bot.onclick = function () {
    s_icon.style.top = '-400px';
    iconArr[5].style.backgroundColor = '#00c1dc';
    s_px.style.display = 'none';
    s_xs.style.display = 'block';
    s_xx.style.display = 'none';
    s_pxa.style.display = 'block';
}
s_to.onclick = function () {
    s_icon.style.top = '400px';
}
var s_ying = document.getElementById('s_ying');
var s_gj = document.getElementById('s_gj');
var s_fh= document.getElementById('s_fh');
var s_jk = document.getElementById('s_jk');
var s_xf = document.getElementById('s_xf');
var s_hn = document.getElementById('s_hn');
var s_zb = document.getElementById('s_zb');
var s_ld = document.getElementById('s_ld');
var s_gl = document.getElementById('s_gl');
var s_hk = document.getElementById('s_hk');
var s_xl = document.getElementById('s_xl');
var s_a = document.getElementById('s_a');
var s_b = document.getElementById('s_b');
var s_c = document.getElementById('s_c');
var s_d = document.getElementById('s_d');
var s_e = document.getElementById('s_e');
var s_f = document.getElementById('s_f');
var s_h = document.getElementById('s_h');
var s_i = document.getElementById('s_i');
var s_j = document.getElementById('s_j');
var s_k = document.getElementById('s_k');
s_gj.onclick = function () {
    s_ying.style.backgroundImage = 'url(../S_images/2.png)';
    s_b.style.display = 'none';
    s_c.style.display = 'none';
    s_d.style.display = 'none';
    s_e.style.display = 'none';
    s_f.style.display = 'none';
    s_h.style.display = 'none';
    s_i.style.display = 'none';
    s_j.style.display = 'none';
    s_k.style.display = 'none';
    s_a.style.display = 'block';
    
}
s_fh.onclick = function () {
    s_ying.style.backgroundImage = 'url(../S_images/35.png)';
    s_a.style.display = 'none';
    s_c.style.display = 'none';
    s_d.style.display = 'none';
    s_e.style.display = 'none';
    s_f.style.display = 'none';
    s_h.style.display = 'none';
    s_i.style.display = 'none';
    s_j.style.display = 'none';
    s_k.style.display = 'none';
    s_b.style.display = 'block';
}
s_jk.onclick = function () {
    s_ying.style.backgroundImage = 'url(../S_images/36.png)';
    s_a.style.display = 'none';
    s_b.style.display = 'none';
    s_d.style.display = 'none';
    s_e.style.display = 'none';
    s_f.style.display = 'none';
    s_h.style.display = 'none';
    s_i.style.display = 'none';
    s_j.style.display = 'none';
    s_k.style.display = 'none';
    s_c.style.display = 'block';
}
s_xf.onclick = function () {
    s_ying.style.backgroundImage = 'url(../S_images/37.png)';
    s_a.style.display = 'none';
    s_b.style.display = 'none';
    s_c.style.display = 'none';
    s_e.style.display = 'none';
    s_f.style.display = 'none';
    s_h.style.display = 'none';
    s_i.style.display = 'none';
    s_j.style.display = 'none';
    s_k.style.display = 'none';
    s_d.style.display = 'block';
}
s_hn.onclick = function () {
    s_ying.style.backgroundImage = 'url(../S_images/38.png)';
    s_a.style.display = 'none';
    s_b.style.display = 'none';
    s_c.style.display = 'none';
    s_d.style.display = 'none';
    s_f.style.display = 'none';
    s_h.style.display = 'none';
    s_i.style.display = 'none';
    s_j.style.display = 'none';
    s_k.style.display = 'none';
    s_e.style.display = 'block';
}
s_zb.onclick = function () {
    s_ying.style.backgroundImage = 'url(../S_images/39.png)';
    s_a.style.display = 'none';
    s_b.style.display = 'none';
    s_c.style.display = 'none';
    s_e.style.display = 'none';
    s_d.style.display = 'none';
    s_h.style.display = 'none';
    s_i.style.display = 'none';
    s_j.style.display = 'none';
    s_k.style.display = 'none';
    s_f.style.display = 'block';
}
s_ld.onclick = function () {
    s_ying.style.backgroundImage = 'url(../S_images/40.png)';
    s_a.style.display = 'none';
    s_b.style.display = 'none';
    s_c.style.display = 'none';
    s_e.style.display = 'none';
    s_d.style.display = 'none';
    s_f.style.display = 'none';
    s_i.style.display = 'none';
    s_j.style.display = 'none';
    s_k.style.display = 'none';
    s_h.style.display = 'block';
}
s_gl.onclick = function () {
    s_ying.style.backgroundImage = 'url(../S_images/41.png)';
    s_a.style.display = 'none';
    s_b.style.display = 'none';
    s_c.style.display = 'none';
    s_e.style.display = 'none';
    s_d.style.display = 'none';
    s_f.style.display = 'none';
    s_h.style.display = 'none';
    s_j.style.display = 'none';
    s_k.style.display = 'none';
    s_i.style.display = 'block';
}
s_hk.onclick = function () {
    s_ying.style.backgroundImage = 'url(../S_images/42.png)';
    s_a.style.display = 'none';
    s_b.style.display = 'none';
    s_c.style.display = 'none';
    s_e.style.display = 'none';
    s_d.style.display = 'none';
    s_f.style.display = 'none';
    s_i.style.display = 'none';
    s_h.style.display = 'none';
    s_k.style.display = 'none';
    s_j.style.display = 'block';
}
s_xl.onclick = function () {
    s_ying.style.backgroundImage = 'url(../S_images/43.png)';
    s_a.style.display = 'none';
    s_b.style.display = 'none';
    s_c.style.display = 'none';
    s_e.style.display = 'none';
    s_d.style.display = 'none';
    s_f.style.display = 'none';
    s_i.style.display = 'none';
    s_j.style.display = 'none';
    s_h.style.display = 'none';
    s_k.style.display = 'block';
}
