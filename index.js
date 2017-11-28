$(document).ready(function() {
	$('.one').fadeTo('slow', 1, function() {
    	$('.three').fadeTo('slow', 1, function() {
    		$('.four').fadeTo('slow', 1, function() {
    			$('.two').fadeTo('slow', 1);
    		});
		});
 	});
    $('.two').click(function(){
    	$('.hello').slideUp(1500, function(){
            $('.welcome').fadeTo('slow', 1)
        });
    });    
});