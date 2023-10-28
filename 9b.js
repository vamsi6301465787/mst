// Consider that developer needs to declare a function - getMobileByVendor which accepts 
// string as input parameter and returns the list of mobiles.

function getMobileByVendor(vendor) 
{

    const mobiles = 
    [
        { name: 'Mobile 1', vendor: 'Vendor A' },
        { name: 'Mobile 2', vendor: 'Vendor B' },
        { name: 'Mobile 3', vendor: 'Vendor c' },
    ]

    const mobilesByVendor = mobiles.filter((mobile) => mobile.vendor ===vendor);
    return mobilesByVendor;
}
 

    const vendor = 'Vendor A';
    const mobileList = getMobileByVendor(vendor);
    console.log(`Mobiles by ${vendor}:`, mobileList);