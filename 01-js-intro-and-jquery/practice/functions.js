$(document).on('ready', function () {
	
	var fade = function(){
		$('.hello').addClass('fadeIn');
	}

	var dfd = $.Deferred();

	dfd.done(setTimeout(function () {
		$('.Alias').focus();
	}, 3000));
	dfd.resolve(fade()); 
		 
});