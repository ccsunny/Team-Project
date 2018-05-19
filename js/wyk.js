var erweima = document.getElementsByClassName('erweima')[0];
var computer = document.getElementsByClassName('computer')[0];
var banner = document.getElementsByClassName('banner-r')[0];
var blockbox = document.getElementsByClassName('blockbox')[0];
erweima.onclick = function(){
	 banner.style.opacity = 0;
	 blockbox.style.opacity = 1;
  banner.className = banner.className.replace('hidden', 'show');
	 blockbox.className = blockbox.className.replace('show', 'hidden');

}
computer.onclick = function(){
	  blockbox.style.opacity = 0;
	banner.style.opacity = 1;
	 blockbox.className = blockbox.className.replace('hidden', 'show');
	 banner.className = banner.className.replace('show', 'hidden');
}