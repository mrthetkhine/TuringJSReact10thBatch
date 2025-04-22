function hello() {
    console.log('Hello');
}
hello();
function add(a, b) {
    return a + b;
}
console.log('Add(2,3) ', add(2, 3));
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (name) { return console.log('Name ', name); });
