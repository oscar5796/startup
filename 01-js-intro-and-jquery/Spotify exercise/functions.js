$(document).on('ready', function(){
	var xhttp = new XMLHttpRequest();
	$('.searchButton').on('click', function(){
		
		document.getElementById('infAlb').innerHTML = " ";
		xhttp.onreadystatechange = function () {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				
				showConsoleResponse(xhttp.response);
			}

		};

		
		var artist = document.getElementById("artist").value; 
		
		
		var artistWOSpace = artist.replace(/\s/gi,"+");

		xhttp.open("GET", "https://api.spotify.com/v1/search/?q="+artistWOSpace+"&type=album", true);
		xhttp.send(); 

		
	});

	function showConsoleResponse(result){
		var Jresult = JSON.parse(result);
		
		var items = Jresult.albums.items;
		
		var showImages = document.getElementById('infAlb');


		for(var i = 0; i < items.length; i++){
		

			var url_alb = items[i].external_urls.spotify+" ";
			var image_alb = items[i].images[1].url;
			var name_alb = items[i].name;
			var type_alb = items[i].album_type;


	    	var add = "<div class = 'disc'><a href='"+url_alb+"' target = '_blank' title = ''><span class='screen'><p class = 'title'><br><br>Name: "+name_alb+"<br><br><br>Album: "+type_alb+" </p></span><img src='"+image_alb+"' ></a></div>";
			showImages.innerHTML += add;
			
		}
		
	}

});