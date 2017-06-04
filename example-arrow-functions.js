//  var names = ["Mohamed","Zerkane","Slashinkov"];

// names.forEach(function (name) {
//     console.log('forEach', name);
// });

// /* ES6 SYNTAX */

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });


// names.forEach((name) => console.log(name));

// Arrow functions return automaticly the value

// var returnMe = (name) => name + '!';
// console.log(returnMe("Mohamed"));

// var person = {
//     name: "Mohamed",
//     greet: function () {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name)
//         })
//     }
// }

// person.greet();

// Challenge Area

function add (a, b) {
    return a + b;
};

console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
    return a + b;
};

console.log(addStatement(5,8));

var addExpression = (a, b) => a + b;

console.log(addExpression(2,5));