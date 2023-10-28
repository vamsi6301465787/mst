// Declarea function - getMobileByManufacturer with two parameters namely manufacturer 
// andid, where manufacturer value should passed as Samsung and id parameter should be optional 
// while invoking the function, if id is passed as 101 then this function should return Moto mobile 
// list and if manufacturer parameter is either Samsung/Apple then this function should return 
// respective mobile list and similar to make Samsung as default Manufacturer. Below mentioned 
// code-snippet would fit into this requirement

function getMobileByManufacturer(manufacturer, id) {
    var mobileData = {
        Samsung: [
            { id: 101, name: 'Samsung Galaxy S10' },
            { id: 102, name: 'Samsung Galaxy Note 20' },
            { id: 103, name: 'Samsung Galaxy A71' }
        ],
        Apple: [
            { id: 201, name: 'iPhone 11' },
            { id: 202, name: 'iPhone 12' },
        ],
        Moto: [
            { id: 301, name: 'Moto G Power' },
            { id: 302, name: 'Moto G Stylus' },
        ],
    };
    if (id !== undefined) {
        for (var _i = 0, _a = mobileData[manufacturer]; _i < _a.length; _i++) {
            var mobile = _a[_i];
            if (mobile.id === id) {
                return [mobile];
            }
        }
        return [];
    }
    if (mobileData[manufacturer]) {
        return mobileData[manufacturer];
    }
    return mobileData['Samsung'];
}

const manufacturer1 = 'Samsung';
const manufacturer2 = 'Apple';
const manufacturer3 = 'Moto';
const id = 101;
console.log(`Samsung Mobiles:`, getMobileByManufacturer(manufacturer1));
console.log(`Apple Mobiles:`, getMobileByManufacturer(manufacturer2));
console.log(`Moto Mobiles:`, getMobileByManufacturer(manufacturer3));
console.log(`Mobile by ID ${id}:`,
getMobileByManufacturer(manufacturer3, id));
