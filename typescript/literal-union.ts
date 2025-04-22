type Status = 'pending' | 'fullfilled' | 'rejected';
let st: Status = 'pending';

console.log('st ',st);

function printId( id: number | string)
{
    if(typeof id== 'string')
    {
        console.log('ID ',id.toUpperCase());
    }
    else
    {
        console.log('ID ',id*2);
    }
}
printId(10);
printId('ID#1111')