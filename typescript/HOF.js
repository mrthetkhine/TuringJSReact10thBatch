function add(x) {
    return function (y) {
        return x + y;
    };
}
var fun = add;
console.log('Add ', add(2)(4));
