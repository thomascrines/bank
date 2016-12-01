var testArray = [1, 2, 3, 4];
var testArray2 = ['1', '2', '3', '4'];

// testArray.forEach(function(item){
//   console.log('Item: ', item);
// });

// for (var item of testArray) {
//   console.log(item);
// };

var ourForEach = function(array, callOnItem) {
  for(var item of array) {
    callOnItem(item);
  }
};

var callOnItemFunction = function(arrayItem) {
  console.log(arrayItem);
}; 

ourForEach(testArray, callOnItemFunction);

var doubledArray = testArray.map(function(item) {
  return item * 2;
});

console.log('doubled array: ', doubledArray);

  var sum = testArray.reduce(function(accumulator, item) {
    return (accumulator + item);
  }, 0);

  console.log('Sum 1: ', sum);

  var sum = testArray2.reduce(function(accumulator, item) {
    return (accumulator + item);
  }, 0);

  console.log('Sum 2: ', sum);