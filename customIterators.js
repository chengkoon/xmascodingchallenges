//------------------------_forEach---------------------------------------------

//It should take two parameters, an array and a callback function. Inside
//the function use a for loop to loop through each of the array elements.
//Invoke the callback function in each loop passing it the element,
//index and array as arguements.

var arr = [5,8,12,27,4];

function thisIsACallback(element, index, array) {
  console.log("The "+index+"th index of this array ["+array+"] contains the integer "+element);
}

arr.forEach(thisIsACallback);

//-------------------------_map------------------------------------------------

//It should take two parameters, an array and a callback function.
//Inside the function use a for loop to loop through each of the array
//elements. Invoke the callback function in each loop passing it the element,
// index and array as arguements. Take whatever this function returns and
//make add it to a new array. At the end of the function return the new array.

var mapArr = arr.map(function(elem) {
  return elem*2;
})
console.log(mapArr);

//---------------------------_reduce------------------------------------------

//It should take three parameters, an array, a callback function and
//an initial 'sum' value. Inside the function use a for loop to loop through
// each of the array elements. Invoke the callback function in each loop
//passing it the sum value and the current element. Take the return value
//of the callback and save it into the sum value.

//Extension: If no iniital sum value is provided, then pass the first two
//elements to the callback instead

var reducedToASum = arr.reduce(function(elem,elem2) {
  return elem+elem2;
},50)
console.log(reducedToASum);

//----------------------------_filter-----------------------------------------

//It should take two parameters, an array and a callback function.
//Inside the function use a for loop to loop through each of the array
//elements. Invoke the callback function in each loop passing it the element,
//index and array as arguements. If this function returns true then add this
//element to a new array. At the end of the function return the new array.

var filteredArr = arr.filter(function(elem) {
  return elem%2===0;
})
console.log(filteredArr);

//------------------------------_every----------------------------------------

//It should take two parameters, an array and a callback function. Inside
//the function use a for loop to loop through each of the array elements.
//Invoke the callback function in each loop passing it the element, index
//and array as arguements. If all callbacks return true then your function
//should also return true, else it should return false.

function callbackForEvery(elem, index, array) {
  return elem%2!==0;
}

console.log(arr.every(callbackForEvery)); //false
console.log([1,3,5,7,9].every(callbackForEvery)); //true
