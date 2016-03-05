function Movie(){
	this.properties ={
		name: "",
		mainCharacter: "" 

	};
}

Movie.prototype = {

	constructor:Movie, 

	play:function(){

		console.log("Playing "+this.properties.name+" ...");

	},

	stop:function(){

	},

	set:function(property, value){

		this.properties.property = value;

	},

	get:function(property){

		
		return this.properties.property; 
	}
}

Terminator = new Movie();
Terminator.set("name", "Terminator");
console.log(Terminator.get("name"));