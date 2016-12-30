var numDatabase = {
  zero : 0,
  one : 1,
  two : 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  plus: 'plus',
  minus: 'minus',
  times: 'times'
}

function engCalc (string) {

  var arr = string.split(' ');
  var subResult;
  var indexOp;
  var beforeOp;
  var afterOp;

  for (var i=0; i<arr.length; i++) {
    arr[i] = numDatabase[arr[i]];
  } // arr is now [ 1, 'plus', 2, 'times', 5, 'times', 10 ]
  while (arr.includes('times')) {
    indexOp = arr.indexOf('times');
    beforeOp = indexOp - 1;
    afterOp = indexOp + 1;
    subResult = arr[beforeOp]*arr[afterOp];
    arr.splice(beforeOp,3,subResult);
  }
  while (arr.includes('plus')) {
    indexOp = arr.indexOf('plus');
    beforeOp = indexOp - 1;
    afterOp = indexOp + 1;
    subResult = arr[beforeOp]+arr[afterOp];
    arr.splice(beforeOp,3,subResult);
  }
  while (arr.includes('minus')) {
    indexOp = arr.indexOf('minus');
    beforeOp = indexOp - 1;
    afterOp = indexOp + 1;
    subResult = arr[beforeOp]-arr[afterOp];
    arr.splice(beforeOp,3,subResult);
  }
  console.log(string + " is: " + arr);
}
engCalc("two plus two times five times ten minus five times two");
