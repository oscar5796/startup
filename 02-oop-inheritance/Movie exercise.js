function Movie(){
	this.properties ={
		movieName: "",
		mainCharacter: "" 
	};
	this.statechange = false; 
}

Movie.prototype = {

	constructor:Movie, 

	play:function(){

		console.log("Playing "+this.get("movieName")+" ...");
		this.statechange = true;

	},

	stop:function(){
		console.log("Stopped "+this.get("movieName")+" ...");
		this.statechange = false; 
	},

	set:function(property, value){

		this.properties.property = value;
		console.log(property+' is setting to '+value);

	},

	get:function(property){

		
		return this.properties.property; 
	}
}

function MovieObserver(Movie){

	if(Movie.statechange == true){
		console.log(Movie.get("movieName")+" is playing"); 
	}
	else if (Movie.statechange == false){
		console.log(Movie.get("movieName")+" is stopped");
	}

}

Terminator = new Movie();
Terminator.set("movieName", "Terminator");
console.log(Terminator.get("name"));
Terminator.play(); 
MovieObserver(Terminator);
Terminator.stop();
MovieObserver(Terminator); 