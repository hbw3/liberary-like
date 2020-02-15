//constructor
const Mobile = function(model) {
  this.name = model;
  this.price = null;
};

//prototype
Mobile.prototype.price = 1000;
const a = new Mobile("galaxy");

//console.log(a);

//----------------------------------------------------

//prototype inheritence

//super class // parent class
const Nokia = function(model) {
  this.name = model;
};

Nokia.prototype.price = 1000;

//sub class // child class
const Samsung = function(model) {
  this.name = model;
};

//inheritence
Samsung.prototype = Object.create(Nokia.prototype);
//reset constructor good practice
Samsung.prototype.constructor = Samsung;

const b = new Samsung("galaxy");

console.log(b);
