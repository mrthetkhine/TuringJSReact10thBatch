interface TwoD{
    x: number;
    y: number;
}
type Another = TwoD & {
    z: number
}
interface ThreeD extends TwoD{
    z: number;
}
let threeD:Another = {
    x:10,
    y:20,
    z: 30
}
console.log('ThreeD ',threeD);