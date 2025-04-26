
type Person = {
    readonly name: string; 
    age: number,
    address?:string
}
function greet(person: Person) {
    //person.name = "Update";
  console.log( "Hello " + person.name, ' address ',person.address)
}
greet({
    name :"Someone",
    age : 30,
    address:"Somewhere",
})