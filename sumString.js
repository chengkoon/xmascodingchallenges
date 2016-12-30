var sumString = function(string) {
  if (typeof string !== "string") {
    console.log("please input a string");
  }
  else {
    arrOfStrInt = string.split(''); // ['1','2','-','3','4']
    arrOfInt = [];
    for (var i=0; i<arrOfStrInt.length; i++) {
      if (arrOfStrInt[i] === '-') {
        arrOfInt[i] = -arrOfStrInt[i+1]; //applies -ve sign to next integer
        arrOfStrInt.splice(i,1); //removes the -ve sign from the arr
      }
      else {
      arrOfInt[i] = +arrOfStrInt[i];
      }
    }
    console.log(arrOfInt);
    var final = arrOfInt.reduce(function(sum,numbers){
      return sum += numbers
    },0)
    console.log(final);
  }
}
sumString("12-34");
