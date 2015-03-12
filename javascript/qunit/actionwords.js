var Actionwords = {
  sut:  CoffeeMachine(),

  assertNoCoffeeIsServed: function () {
    equal(this.sut.get('coffeeServed'), false);
  },
  fillWaterTank: function () {
    this.sut.fillTank()
  },
  emptyCoffeeGrounds: function () {
    this.sut.emptyGrounds();
  },
  fillBeans: function () {
    this.sut.fillBeans();
  },
  shutdownCoffeeMachine: function () {
    this.sut.stop();

  },
  takeCoffees: function (coffee_number) {
    while ((coffee_number > 0)) {
      this.takeACoffee();
      coffee_number = coffee_number - 1;
    }
  },
  takeACoffee: function () {
    this.sut.takeCoffee();
  },
  assertCoffeeServed: function () {
    equal(this.sut.get('coffeeServed'), true);
  },
  startTheCoffeeMachine: function (lang) {
    this.sut.start(lang);
  },
  assertDisplayedMessage: function (message) {
    equal(this.sut.get('message'), message || "");
  }
}