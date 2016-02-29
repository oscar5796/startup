exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(i = 0; i< arr.length; i++){
      if(arr[i] == item){
        return i; 
      }
    }
    return -1;
  },

  sum : function(arr) {

    var sum = 0; 
    
    for(i = 0; i < arr.length; i++){

      sum = sum + arr[i];

    }

    return sum;

  },

  remove : function(arr, item) {

    var arr_rem = [];

    for(i = 0 ; i < arr.length ; i++){
      if(arr[i] != item){
        arr_rem.push(arr[i]);
      }
    }
    return arr_rem;

  },

  removeWithoutCopy : function(arr, item) {

    for(i = 0 ; i < arr.length ; i++){
      if(arr[i] ==  item){
        var t = i; 
        for(t ; t < arr.length ; t++){
          arr.splice(t,1,arr[t+1]);
        }
        arr.pop();
        i = i - 1;
      } 
    }
    return arr; 

/*    for(i = 0 ; i < arr.length ; i++){
      if(arr[i] === item){
        arr.splice(i,1);
        arr.length = arr.length - 1;
        i = i - 1;
        
      }
    }
    return arr;*/
  }, 

  append : function(arr, item) {

    arr.push(item);

    return arr; 

  },

  truncate : function(arr) {

    arr.pop();
    return arr; 

  },

  prepend : function(arr, item) {

    arr.unshift(item);
    return arr;

  },

  curtail : function(arr) {

    arr.shift();
    return arr; 

  },

  concat : function(arr1, arr2) {
    var arr = [];
    arr = arr1.concat(arr2); 
    return arr; 

  },

  insert : function(arr, item, index) {

    arr.splice(index , 0 , item);
    return arr; 

  },

  count : function(arr, item) {
    var c = 0; 
    for(i = 0 ; i < arr.length ; i++){
      if (arr[i] === item){
        c++; 
      }
    }
    return c; 
  },

  duplicates : function(arr) {

    var dup = []; 
     
    for(i = 0 ; i < arr.length ; i++){
      var c = 1;
      var t = 0; 
      for(t ; t < arr.length ; t++){
        if((arr[i] === arr[t])&&(i != t)){
          c++;
        }
      }
      if(c > 1){
        var p = 0; 
        var rep = 0
        for(p ; p < dup.length ; p++){     
          if(arr[i] === dup[p]){
            rep ++;
          }
        }
        if(rep == 0){
          dup.push(arr[i]);  
        }
      }
    }
    return dup; 
  },

  square : function(arr) {

    var arr_sq = []; 
    for (i = 0 ; i < arr.length ; i++) {
      arr_sq.push(arr[i]*arr[i]);
    }
    return arr_sq;

  },

  findAllOccurrences : function(arr, target) {

    var occ = []; 

    for (i = 0 ; i < arr.length ; i++) {

      if(arr[i] === target) {

        occ.push(i);

      }

    }

    return occ; 

  }
};

