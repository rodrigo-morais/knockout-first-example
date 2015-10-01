$(document).ready(function() {
    function AppViewModel() {
    var self = this;
 
    self.products = ko.observableArray([
        { name: 'Product One', price: 120 }
    ]);
 
    self.addProducts = function(_name, _price) {
        self.products.push({ name: _name, price: _price });
    };
 
    self.removeProducts = function() {
        self.products.remove(this);
    }
}
 
ko.applyBindings(new AppViewModel());
});