// As a customer
// So that I can check if I want to order something
// I would like to see a list of dishes with prices

describe('Menu', function(){
  var menu = new Menu();

  it('displays a list of dishes with prices', function() {
    menuItems = menu.menuItems;
    expect(menu.display()).toEqual(menuItems);
  })
});
