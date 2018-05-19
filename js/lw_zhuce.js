var userName = document.getElementById('userName');
var lw_form = my$('lw_form');
var userPassword = my$('userPassword');
var useragain = my$('useragain');
var teliphone = my$('teliphone');
var lw_container = my$('lw_container');
var div1 = lw_form.children[0];
    div1.onclick = fn1;
var div2 = lw_form.children[1];
    div2.onclick = fn2;
var div3 = lw_form.children[2];
    div3.onclick = fn3;
var div4 = lw_form.children[3];
    div4.onclick = fn4;
    
    // lw_container.onclick = function() {
    //     alert('aaa');
    //     useragain.style.display = 'none';
    //     userPassword.style.display = 'none';
    //     userName.style.display = 'none'; 
    //  }
function fn1 () {
    // userName.style.display = 'block';
    // userPassword.style.display = 'none';
    // useragain.style.display = 'none';
    userName.style.opacity = 1;
    userPassword.style.opacity = 0;
    useragain.style.opacity = 0;
    teliphone.style.opacity = 0;
    
}
function fn2 () {
    userPassword.style.opacity = 1;
     userName.style.opacity = 0;
     useragain.style.opacity = 0;
     teliphone.style.opacity = 0;
}
function fn3 () {
    useragain.style.opacity = 1;
    userPassword.style.opacity = 0;
     userName.style.opacity = 0;
     teliphone.style.opacity = 0;
}
function fn4 () {
    useragain.style.opacity = 0;
    userPassword.style.opacity = 0;
     userName.style.opacity = 0;
     teliphone.style.opacity = 0;
}
// function f5() {
//     alert('aaa');
//     useragain.style.display = 'none';
//     userPassword.style.display = 'none';
//      userName.style.display = 'none';
// }
//获取大盒子
var lw_form5 = document.getElementById('lw_form5');
//获取点击的小盒子
var content = my$('content');
var lw_samll = document.getElementById('lw_samll');
var lw_big = document.getElementById('lw_big');
// console.log(lw_samll);
lw_samll.onmousedown = function(e) {
    // alert('aaa');
    e = e || window.event;
    var x = getPage(e).pageX - lw_form5.offsetLeft - lw_samll.offsetLeft;
    // console.log(x);
    document.onmousemove = function(e) {
                var lw_samllX = getPage(e).pageX - x - lw_form5.offsetLeft;
                //控制滚动条的大小,不让鼠标一出,滚动条不受控制
                lw_samllX = lw_samllX < 0 ? 1:lw_samllX;
                lw_samllX= lw_samllX >270? 271:lw_samllX;
                lw_samll.style.left = lw_samllX + 'px';
                // var barMax = lw_form5.clientHeight - lw_samll.clientHeight;
                lw_big.style.width = lw_samllX + 'px';
                console.log(lw_samllX);
                if(lw_samllX == 271){
                    lw_big.innerText = "验证完成";
                    lw_big.style.textAlign = "center";
                    lw_big.style.color = "white";
                    lw_samll.onmousedown = null;
                    // document.onmousemove = null;

                }

        }
}
document.onmouseup = function(e) {
    e = e || window.event;
    var x = getPage(e).pageX - lw_form5.offsetLeft - lw_samll.offsetLeft;
    document.onmousemove = null;
    var lw_samllX = getPage(e).pageX - x - lw_form5.offsetLeft;
                lw_samllX = lw_samllX < 0 ? 1:lw_samllX;
                lw_samllX= lw_samllX >270? 271:lw_samllX;
                if(lw_samllX  <270){
                    lw_samll.style.left = 1 +'px';
                    lw_big.style.width = 0;
                }else{
                    lw_samll.style.left = lw_samllX + 'px'; 
                    lw_big.style.width = lw_samllX + 'px';
                };
               
}
var lw_input1 = document.getElementById("lw_input1");
var lw_input2 = my$("lw_input2");
var lw_input3 = my$("lw_input3");
var lw_input4 = my$("lw_input4");
console.log(lw_input3);
var userName1 = document.getElementById('userName1');
var userPassword1 = document.getElementById('userPassword1');
var useragain1 = document.getElementById('useragain1');
var teliphone1 = document.getElementById('teliphone1');

addCheck('lw_input1', /^[\u4e00-\u9fa5]{2,4}$/, '请输入2-4个汉字', userName1);
addCheck('lw_input2', /^[a-zA-Z]\w{5,11}$/, '密码设置不符合要求', userPassword1);
addCheck('lw_input3', /^[a-zA-Z]\w{5,11}$/, '两次输入的密码不一致，请重新输入', useragain1);
addCheck('lw_input4', /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, '请输入正确格式，请重新输入', teliphone1);

function addCheck(elementId, reg, tip, user) {
    var element = document.getElementById(elementId);
    element.onblur = function () {
      var span = this.nextElementSibling;
      // 验证
      if (!reg.test(this.value)) {
        user.innerText = tip;
        user.style.color = 'red';
        user.style.opacity = '1';
        user.style.display= 'block';
      } else {
        user.style.opacity = '0';
        user.style.display= 'none';
      }
    }

  }
  lw_input1.onclick = function() {
    userName1.style.opacity= 0;
    userName1.style.display= 'none';
  }
  lw_input2.onclick = function() {
    userPassword1.style.opacity= 0;
    userPassword1.style.display= 'none';
  }
  
  lw_input3.onclick = function() {
    //  alert('aaa');
    useragain1.style.opacity= 0;
    useragain1.style.display= 'none';
  };
  lw_input4.onclick = function() {
    //  alert('aaa');
    teliphone1.style.opacity= 0;
    teliphone1.style.display= 'none';
  }

