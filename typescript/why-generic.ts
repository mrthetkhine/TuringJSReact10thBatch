type Box = {
    data: number
}

let b1 : Box = {
    data : 10
}
type BoxString = {
    data: string
}
type BoxAny = {
    data :any
}
let b2: BoxAny ={
    data: "Hello",
}
console.log('B2 ',b2.data* 2);