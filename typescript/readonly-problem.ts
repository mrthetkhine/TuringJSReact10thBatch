interface Home {
  readonly resident: { name: string; age: number };
}
let h : Home= {
    resident : {
        name : "TK",
        age : 40
    }
}
/*
h.resident = {

}
*/
h.resident.name = "Another";
console.log('H ',h);