function Menu(){
  this.menuItems = {
    'Roast Chicken': 13.95,
    'Roast Beef': 14.95,
    'Vegetarian Roast': 11.95 
  }
}

Menu.prototype.display = function () {
  return this.menuItems
};
