function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
console.log('Arr ', longest([1, 2, 3], [2, 3, 4, 5]));
console.log('Arr ', longest('apple', 'hello'));
//console.log('Arr ',longest(122,456));
