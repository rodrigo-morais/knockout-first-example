$(document).ready(function() {
    function AppViewModel() {
    var self = this;
 
    self.products = ko.observableArray([
        { name: 'Product One', price: 120 }
    ]);
 
    self.addProducts = function(_form) {
        self.products.push({ name: _form['name'].value, price: _form['price'].value });
    };
 
    self.removeProducts = function() {
        self.products.remove(this);
    }
}
 
ko.applyBindings(new AppViewModel());
});