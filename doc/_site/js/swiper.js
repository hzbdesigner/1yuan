

jQuery(document).ready(function() {  
		
  var mySwiper = $('.swiper-container').swiper({
    //Your options here:
    mode:'vertical',
    loop: false,
    pagination: '.pagination',
    grabCursor: true,
    paginationClickable: true
  });
  $('.arrow-prev').on('click', function(e){
    e.preventDefault()
    mySwiper.swipePrev()
  })
  $('.arrow-next').on('click', function(e){
    e.preventDefault()
    mySwiper.swipeNext()
  })
	
});
