function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
doSomething(null);
doSomething('apple');

function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}
liveDangerously(10);
