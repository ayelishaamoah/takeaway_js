// As a customer
// So that I can check if I want to order something
// I would like to see a list of dishes with prices
//
// As a customer
// So that I can order the meal I want
// I would like to be able to select some number of several available dishes


describe('Menu', function(){
  var menu = new Menu();

  it('displays a list of dishes with prices', function() {
    menuItems = menu.menuItems;
    expect(menu.display()).toEqual(menuItems);
  })

  it('can select items from the menu', function() {
    expect(menu.selectItem('Roast Chicken', 2)).toContain(['Roast Chicken', 2])
  })
});
