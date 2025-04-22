function doLater(callback) {
    setTimeout(callback(), 1000);
}
function hello() {
    console.log('Hello');
}
//doLater(hello);
doLater(122);
