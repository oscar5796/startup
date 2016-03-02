$(document).on('ready', function () {
	
	var fade = function(){
		$('.hello').addClass('fadeIn');
	}

	var dfd = $.Deferred();

	dfd.done(setTimeout(function () {
		$('.Alias').focus();
	}, 3000));
	dfd.resolve(fade()); 

	$('.button').click(function() {
		window.location.href = 'http://bootcamp.aws.af.cm/welcome/yourname';
	});
		 
});

