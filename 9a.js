// File Operations Create a text file src.txt and add the following data to it. Mongo, Express, 
// Angular, Node.

const fs = require('fs');
const data = 'Mongo, Express, Angular, Node.\n';
fs.writeFile('src111.txt', data, (err) => {
if (err) {
console.error('Error writing to src.txt:', err);
} else {
console.log('src.txt has been created and data has been added.');
}
});