var movie = (function(){
    var properties = {
        name: "",
        type: ""
    };
    var eventName = {
        ONPLAY: "onplay",
        ONSTOP: "onstop"
    };
    var events = {
        
    };
    
    function dispatchEvent (eventName){
            var event = events[eventName];
            if(!event){
                console.log("Event doesn´t exist");
                return;                 
            } 
            for(var i = 0; i < event.length; i++){
                event[i]();
            }                     
    }
    
    return {
        
        //Public functions
        
        play: function(){
            
            dispatchEvent(eventName.ONPLAY);
        },
        stop: function (){
            dispatchEvent(eventName.ONSTOP);
        },
        set: function (property, value){
            properties.property = value;
            console.log("The "+property+" has changed to "+value);
        },
        get: function(property){
            return properties.property; 
        },
        addEventListener: function(eventName,callback){ 
            if(!events[eventName]){
                events[eventName]=[];
            }
            events[eventName].push(callback);
        },          
    }
})();

movie.set("name","Terminator");
movie.addEventListener("onplay",function(){
    console.log("is playing");
});
movie.addEventListener("onplay", function(){
    console.log("is playing_2");
});
movie.play();