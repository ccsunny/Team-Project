var divImg = document.getElementsByClassName('lister');
        for (var j = 0; j < divImg.length; j++) {
        	    divImg[j].onmouseenter = function () {
                clearInterval(this.timer1);
                this.children[0].y = 0;
                
                this.timer = setInterval(function () {
                    this.children[0].y -= 100;
                    this.children[0].style.backgroundPosition = 'center ' + this.children[0].y + 'px';
                    
                    if (this.children[0].y <= -1400) {
                        console.log(this.children[0].y)
                        
                        this.children[0].y=-1400;
                        this.children[0].style.backgroundPosition = 'center '+this.children[0].y+'px';
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }.bind(this), 30)
            }
            divImg[j].onmouseleave = function () {
                clearInterval(this.timer);
                this.timer1 = setInterval(function () {
                    console.log(this.children[0].y)
                    this.children[0].y += 100;
                    this.children[0].style.backgroundPosition = 'center ' + this.children[0].y + 'px';
                    if (this.children[0].y >= 0) {
                        this.children[0].y=0;
                        this.style.backgroundPosition = 'center'+this.children[0].y+'px';
                        clearInterval(this.timer1);
                        this.timer1 = null;
                    }
                }.bind(this), 30)
            }
        
        }