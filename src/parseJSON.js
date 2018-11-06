// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var counter = 0;
  var parseArray = function() {
    var returnedArray = [];
    var currentValue = '';
    for (counter += 1; counter < json.length; counter++) {
      if (json[counter] !== ',' && json[counter] !== ']') {
        currentValue += json[counter];
      }
      else {
        returnedArray.push(parseNumber(currentValue));
        if (json[counter] === ']') {
          break;
        }
        currentValue = '';
      }  
    }
    return returnedArray;
  };
  var parseNumber = function(str) {
    return Number(str);
  };
  
  var parseString = function() {
    var returnedString = '';
  }
  
  var parsedObj;
  for (counter; counter < json.length; counter++) {
    if (json[counter] === '[') {
      parsedObj = parseArray();
      //
    }
  console.log(parsedObj)  
    
}
};
