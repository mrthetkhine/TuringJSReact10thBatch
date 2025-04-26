function fail(msg: string): never {
  throw new Error(msg);
}
let data = fail('Hello');
console.log('data ',data);