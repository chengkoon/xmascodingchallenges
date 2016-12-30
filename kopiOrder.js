var KopiOrder = function(order) {
  order = order.split(' ');

  this.kopi = 5;
  this.sugar = 2;
  this.ice = false;
  this.condensedMilk = 1;
  this.evaporatedMilk = 0; //by default, 1 unit of condensedMilk and no evaporatedMilk;
  if (order.includes('gah')) { //assuming gah is always followed by 'dai'
    this.condensedMilk = 2;
  }
  if (order.includes('si')) {
    this.condensedMilk = 0;
    this.evaporatedMilk = 1;
  }
  if (order.includes('o')) {
    this.condensedMilk = 0;
  }
  if (order.includes('siew')) { //assuming siew is always followed by 'dai'
    this.sugar = 1;
  }
  if (order.includes('kosong')) {
    this.sugar = 0;
  }
  if (order.includes('gau')) {
    this.kopi = 7;
  }
  if (order.includes('po')) {
    this.kopi = 3;
  }
  if (order.includes('peng')) {
    this.ice = true;
  }
  this.water = 10 - this.kopi - this.condensedMilk - this.evaporatedMilk;
}

var stepCounter = 0;
var addSteps = function() {
  stepCounter++;
  return stepCounter;
}

KopiOrder.prototype.steps = function() {

  if (this.ice) {
    console.log("Step "+addSteps()+": Fill empty cup with ice.");
  }
  console.log("Step "+addSteps()+": Pour in " + this.kopi + "/10 of the cup with coffee.");
  if (this.condensedMilk) {
    console.log("Step "+addSteps()+": Pour in " + this.condensedMilk + "/10 of the cup with condensed milk.");
  }
  if (this.evaporatedMilk) {
    console.log("Step "+addSteps()+": Pour in " + this.evaporatedMilk + "/10 of the cup with evaporated milk.");
  }
  if (this.sugar) {
    console.log("Step "+addSteps()+": Add " + this.sugar + " cubes of sugar.");
  }
  console.log("Step "+addSteps()+": Pour in " + this.water + "/10 of the cup with water.");
  console.log("Ready to serve!");
}

var kopi2 = new KopiOrder("kopi o kosong");
console.log(kopi2);
kopi2.steps();







//
