function spotifyRequest (){

	document.getElementById('infAlb').innerHTML = " ";

	artist = document.getElementById('artist').value;
	artist = artist.replace(/\s/gi,"+");

	var xhttp = new XMLHttpRequest(); 
	
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4 && xhttp.status == 200) {			
			getInfo(xhttp.response);
			}
		};

	xhttp.open("GET", "https://api.spotify.com/v1/search/?q="+artist+"&type=album", true);
	xhttp.send(); 	

};

function getInfo(xhttpResponse){
	var Jresult = JSON.parse(xhttpResponse);
	var allResult = Jresult.albums.items;

	generateHtmlAdds(allResult);
};
function compileTemplate(template, urlAlb, nameAlb, typeAlb, imageAlb){

	var compiled 	= template.replace(/urlAlb/g, urlAlb);
	compiled 		= compiled.replace(/nameAlb/g, nameAlb);
	compiled 		= compiled.replace(/typeAlb/g, typeAlb);
	compiled 		= compiled.replace(/imageAlb/g, imageAlb);


	return compiled;
};

function generateHtmlAdds(jsonResponse){

	var allAdd = "";
	var template = "<div class = 'disc'><a href='urlAlb' target = '_blank' title = ''><span class='screen'><p class = 'title'><br><br>Name: 'nameAlb'<br><br><br>Album: 'typeAlb' </p></span><img src='imageAlb' ></a></div>"
	var contShow = document.getElementById('infAlb');
	

	for(var i = 0; i < jsonResponse.length; i++){

		var urlAlb 		=	jsonResponse[i].external_urls.spotify;
		var nameAlb 	=	jsonResponse[i].name;
		var imageAlb 	=	jsonResponse[i].images[1].url;
		var typeAlb 	=	jsonResponse[i].album_type;		


	allAdd += compileTemplate( template, urlAlb, nameAlb, typeAlb, imageAlb );

	}
	contShow.innerHTML += allAdd;

};

$(document).on('ready',function(){
	$('.searchButton').on('click',function(){
		spotifyRequest();
	});
});