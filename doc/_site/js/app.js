

jQuery(document).ready(function() {  
		
		// shoping car toggle checked
		$( ".checkcube" ).click(function() {
		  $( this ).toggleClass("checked");
		});


		//fake a

		$( ".fake-a" ).bind('click',function(event) {
			event.stopPropagation();
		  	var url=$(this).data('href');
		  	window.location.href(url);
		  	event.preventDefault();
		});
		
	
});
