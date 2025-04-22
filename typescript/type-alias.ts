type Point = {
    x : number,
    y : number,
}
type Another = {
    z : number,
}
type Point3D = Point & Another;
let twoD : Point3D = {
    x: 10,
    y : 20,
    z : 100
};
console.log('TwoD ',twoD)

type Amount = number;
let x: Amount = 10;