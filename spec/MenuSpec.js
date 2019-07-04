// As a customer
// So that I can check if I want to order something
// I would like to see a list of dishes with prices

// As a customer
// So that I can order the meal I want
// I would like to be able to select some number of several available dishes

// As a customer
// So that I can verify that my order is correct
// I would like to check that the total I have been given matches the sum of the various dishes in my order

describe('Menu', function(){
  var menu;

  beforeEach(function() {
    menu = new Menu();
  });

  it('displays a list of dishes with prices', function() {
    menuItems = menu.menuItems;
    expect(menu.display()).toEqual(menuItems);
  });

  it('can select items from the menu', function() {
    expect(menu.selectItem('Roast Chicken', 2)).toEqual({'Roast Chicken': 2});
  });

  it('displays the total', function() {
    menu.selectItem('Roast Chicken', 2);
    menu.selectItem('Roast Beef', 1);
    expect(menu.getTotal()).toEqual('42.85')
  });
});
