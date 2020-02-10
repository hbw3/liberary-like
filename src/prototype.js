//constructor
const mobile = function(model) {
  this.name = model;
  this.price = null;
};

//prototype
mobile.prototype.price = 1000;
const a = new mobile("galaxy");

//console.log(a);

//----------------------------------------------------

//prototype inheritence

//super class // parent class
const nokia = function(model) {
  this.name = model;
};

nokia.prototype.price = 1000;

//sub class // child class
const samsung = function(model) {
  this.name = model;
};

//inheritence
samsung.prototype = Object.create(nokia.prototype);
//reset constructor good practice
samsung.prototype.constructor = samsung;

const b = new samsung("galaxy");

console.log(b);
