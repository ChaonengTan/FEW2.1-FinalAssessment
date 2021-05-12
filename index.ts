const data = require('./data.json')
const sl = require('few2.1-string-lib')
const dl = require('@chaonengtan/few2.1-datelibrary/src/index')
const f = require('./functions')
data.forEach((object) => {
    console.log(sl.capitalize(object.first_name),sl.capitalize(object.last_name))
    const purchaseDate = new dl.D(object.purchased)
    console.log('Purchased:',purchaseDate.format('M d, Y'))
    const lastPayment = new dl.D(object.lastpayment)
    console.log('Last Payment:',lastPayment.when())
    console.log(f.formatPhone(object.phone))
    console.log('\n')
});