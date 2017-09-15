window.onload = function(){
	// 输入框的占位符
	var search = document.getElementById('search');
	search.onfocus = function(){
		var text = search.value;
		if(this.value == text){
			this.value = '';
		}
	}
	search.onblur = function(){
		var text = search.value;
		if(this.value == ''){
			this.value = '请输入商品';
		}else{
			this.value = text;
		}
	}

	// 侧边导航部分
	var content = document.querySelector('#content');
	var sideNav = document.querySelector('.side-nav');
	var liArr = sideNav.children;
	var contentArr = content.children;
	for(var i = 0 ; i <= liArr.length - 1  ; i ++){
		liArr[i].index = i;
		liArr[i].onmouseover = function(){
			for(var j = 0 ; j <= contentArr.length - 1 ; j++){
				contentArr[j].style.display = 'none';
			}
			content.style.display = 'block';
			contentArr[this.index].style.display = 'block';
		}
	}
	sideNav.onmouseleave = function(){
		content.style.display = 'none';
	}


	// 轮播图部分
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true,
        paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    });


	// tab切换部分
	var title = document.getElementById('title');
	var tj = document.getElementById('tj');
	var titleArr = title.children;
	var tjArr = tj.children;
	for(var i = 0 ; i <= titleArr.length - 1 ; i++){
		titleArr[i].index = i;
		titleArr[i].onclick = function(){
			for(var j  = 0 ; j <= tjArr.length - 1 ; j++){
				tjArr[j].style.display = 'none';
				titleArr[j].children[0].classList.remove('active');
			}
			this.children[0].classList.add('active');
			tjArr[this.index].style.display = 'block';
		}
	}
}