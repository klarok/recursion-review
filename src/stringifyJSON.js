// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  let type = typeof obj;
  let isArray = Array.isArray(obj);
  //check if number
  if (type === 'number' || type === 'boolean' || obj === null) {
    return '' + obj;
  } else if (type === 'string') {
    return '"' + obj + '"';
  } else if (isArray) {
    let arrayString = '[';
    for (let i = 0; i < obj.length; i++) {
      arrayString += stringifyJSON(obj[i]);
      if (i < obj.length - 1) {
        arrayString += ',';
      }
    }
    arrayString += ']';
    return arrayString;
  } else if (type === 'object') {
    let objectString = '{';
    for (let key in obj) {
      if (!(typeof obj[key] === 'function' || obj[key] === undefined)) {
        objectString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      } 
    }
    objectString = (objectString.length === 1) ? objectString : objectString.slice(0, objectString.length - 1);
    objectString += '}';
    return objectString;
  }
  return undefined;
};
