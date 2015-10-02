$(document).ready(function() {
    function CompanyViewModel() {
    var self = this;

    self.company = ko.observable('test');
 
    self.products = ko.observableArray([
        { name: 'Product One', price: 120 }
    ]);
 
    self.addProducts = function(_form) {
        self.products.push({ name: _form['name'].value, price: _form['price'].value });
        _form.reset();
    };
 
    self.removeProducts = function() {
        self.products.remove(this);
    }

    self.total = ko.pureComputed(function(){
        return self.products().reduce(function(previous, current){
            return previous + parseFloat(current.price);
        }, 0);
    });
}
 
ko.applyBindings(new CompanyViewModel());
});