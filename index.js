var data = require('./data.json');
var sl = require('few2.1-string-lib');
var dl = require('@chaonengtan/few2.1-datelibrary/src/index');
var f = require('./functions');

data.forEach(function (object) {
    console.log(sl.capitalize(object.first_name), sl.capitalize(object.last_name));
    var purchaseDate = new dl.D(object.purchased);
    console.log('Purchased:', purchaseDate.format('M d, Y'));
    var lastPayment = new dl.D(object.lastpayment);
    console.log('Last Payment:', lastPayment.when());
    console.log(f.formatPhone(object.phone));
    console.log('\n');
});
