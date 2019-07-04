function Menu(){
  this.menuItems = {
    'Roast Chicken': 13.95,
    'Roast Beef': 14.95,
    'Vegetarian Roast': 11.95
  };
  this.order = {};
}

Menu.prototype.display = function () {
  return this.menuItems
};

Menu.prototype.selectItem = function (item, quantity) {
  this.order[item] = quantity
  return this.order
};

Menu.prototype.getTotal = function () {
  var orderTotal = 0;
  for (var item in this.order ) {
    price = this.menuItems[item];
    quantity = this.order[item]
    orderTotal += (price * quantity)
  }
  return orderTotal.toFixed(2);
};
