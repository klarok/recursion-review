// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // your code here
  let results = [];
  let element = node || document.body;
  
  if (element.className.indexOf(className) > -1) {
    results.push(element); 
  }
  for (let i = 0; i < element.children.length; i++) {
    results = results.concat(getElementsByClassName(className, element.children[i]));
  }
  return results;
};
