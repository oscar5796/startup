exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {

  	var dfd = $.Deferred();
    setTimeout(function() {
      dfd.resolve(value);
    }, 10);
    return dfd.promise();
  },

  manipulateRemoteData : function(url) {

  	var deferred = $.Deferred();

    $.ajax({
      // la URL para la petición
      url : url,
 
      // la información a enviar
      
      type : 'GET',
 
      // el tipo de información que se espera de respuesta
      dataType : 'json',
 
      // código a ejecutar si la petición es satisfactoria;
      // la respuesta es pasada como argumento a la función
      success : function(json) {
            var people = $.map(json.people, function (person){
              return person.name;
            });
            deferred.resolve(people.sort());
      },

      // código a ejecutar si la petición falla;
      // son pasados como argumentos a la función
      // el objeto de la petición en crudo y código de estatus de la petición
      error : function(xhr, status) {
        
          deferred.reject('Disculpe, existió un problema');
      },
 
      // código a ejecutar sin importar si la petición falló o no
      complete : function(xhr, status) {
      }

      });

      return deferred.promise();
    
  }
};
