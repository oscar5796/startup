function Movie(){
	this.properties ={
		movieName: "",
		mainCharacter: "" 
	};
	this.eventNames = {
		ONPLAY: "onplay",
		ONSTOP: "onstop"
	}; 
	this.events = {

	};
	
}

Movie.prototype = {

	constructor:Movie, 


	addEventListener: function(name, callback){
		if(!this.events[name]){
			this.events[name] = []; 
		}
		this.events[name].push(callback);

	},

	dispatchEvent:function(eventName){
		var event = this.events[eventName]; 
		if(!event){
			console.log("Event doesn´t exist"); 
			return; 
		}
		for (var i = 0; i < event.length; i++) {
			event[i]();
		};
		
	},

	play:function(){

		console.log("Playing "+this.get("movieName")+" ...");
		this.dispatchEvent(this.eventNames.ONPLAY);
	},

	stop:function(){
		console.log("Stopped "+this.get("movieName")+" ...");
		this.dispatchEvent(this.eventNames.ONSTOP);
	},

	set:function(property, value){

		this.properties.property = value;
		console.log(property+' is setting to '+value);

	},

	get:function(property){

		
		return this.properties.property; 
	}
};





terminator = new Movie();
terminator.set("movieName", "Terminator");
console.log(terminator.get("name"));
terminator.addEventListener("onplay", function(){
	console.log("test1");
});
terminator.addEventListener("onstop", function(){
	console.log("Hizo stop"); 
})
terminator.play();
terminator.stop();