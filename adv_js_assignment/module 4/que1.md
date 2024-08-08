
WHAT IS JSON?

JSON (JavaScript Object Notation) is a simple text format used for storing and exchanging data. It’s easy to read and write for humans and easy for machines to parse and generate.

Uses of JSON

APIs:    JSON is commonly used to format responses from APIs. Web applications can parse JSON data to update the user interface or perform other actions.

Configuration Files:     JSON is often used in configuration files for applications and services because of its readability and simplicity.

Data Storage:   Some databases and storage solutions use JSON to store and exchange data.



JavaScript provides built-in methods to work with JSON:

JSON.stringify(): Converts a JavaScript object into a JSON string.

let obj = { name: "John", age: 30 };
let jsonString = JSON.stringify(obj);
console.log(jsonString); // {"name":"John","age":30}


JSON.parse(): Converts a JSON string into a JavaScript object.

let jsonString = '{"name":"John","age":30}';
let obj = JSON.parse(jsonString);
console.log(obj.name); // John