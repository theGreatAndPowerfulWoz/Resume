$(document).ready(function() {
	$('.one').fadeTo('slow', 1, function() {
    	$('.three').fadeTo('slow', 1, function() {
    		$('.four').fadeTo('slow', 1, function() {
    			$('.two').fadeTo('slow', 1);
    		});
		});
 	});
    $('.two').click(function(){
<<<<<<< HEAD
    	$('.hello').slideUp(1500, function(){
            $('.welcome').fadeTo('slow', 1)
        });
    });    
=======
    	$('*').fadeOut(1500, function(){
    		 window.location.href = 'http://www.iamthewoz.com';
    	});
    });
    
>>>>>>> origin/master
});