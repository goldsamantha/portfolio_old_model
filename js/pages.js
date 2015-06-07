var pages = ["spotlight", "vuid","muvr","jyve", "print", "more"]; 

var findNext = function(name){
  var i =0;
  for (i;i<pages.length; i++){
    if (pages[i] == name){
      if (i+1 >= pages.length ){
        return pages[0];
      }
      else{
        return pages[i+1];
      }
    }
  }
};


var findPrev = function(name){
  var i =0;
  for (i;i<pages.length; i++){
    if (pages[i] == name){
      if (i==0 ){
        return pages[pages.length-1];
      }
      else{
        return pages[i-1];
      }
    }
  }
};
