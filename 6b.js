// Verify how to execute different functions successfully in the Node.js platform. 

function Name(name)
{
    console.log(`Name : ${name}`);

}
Name("vamsi")



function add(a,b)
{
    return a+b;
}
const result = add(5,5);
console.log(`Sum of 5 + 6 : ${result}`)
console.log("sum : "+result)


const sub = function(a,b)
{
    return a-b;
}
console.log("subtraction of 5 - 5 : ",sub(5,5));



const mul = (a,b)=> a * b
console.log("multple of 5 x 5 : ",mul(5,5));