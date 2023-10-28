// Declare an interface named - Product with two properties like productId and productName 
// with the number and string datatype and need to implement logic to populate the Product 
// details.
function getProductDeatils(productObject) {
    return "product Name : " + productObject.productName;
}
var productObject = { productId: 101, productName: "mobile111111111" };
var productDeatils = getProductDeatils(productObject);
console.log(productDeatils);
