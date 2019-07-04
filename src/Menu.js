function Menu(){
  this.menuItems = {
    'Roast Chicken': 13.95,
    'Roast Beef': 14.95,
    'Vegetarian Roast': 11.95
  };
  this.order = [];
}

Menu.prototype.display = function () {
  return this.menuItems
};

Menu.prototype.selectItem = function (item, quantity) {
  this.order.push([item, quantity])
  return this.order
};
