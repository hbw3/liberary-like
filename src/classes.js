class First {
  constructor() {
    this.name = "A";
    this.phone = 97131315257;
    this.address;
    this.city;
  }

  add() {
    this.address = "badri bagh";
  }

  update() {
    this.address = "14, badri bagh";
  }
}

const FirstInstance = new First();
console.log(FirstInstance);
