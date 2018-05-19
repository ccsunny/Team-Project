 var tz = document.getElementById("tz");
 // var mainPart = document.getElementById("mainPart");
 window.onscroll = function () {
     if (scroll().top > 300) {
         tz.style.display = 'block';
         mainPart.style.paddingTop = navBar.offsetHeight + "px";
     } else {
         tz.style.display = 'none';
         mainPart.style.paddingTop = 0;
     }
 };
 function scroll() {
     return {
         top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 300,
         left: window.pageYOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 300
     };
}