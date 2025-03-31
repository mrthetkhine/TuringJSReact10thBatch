export function Child()
{
    console.log('Render child');
    return (<div>
        Child
    </div>);
}
export default function Parent()
{
    console.log('Render Parent');
    return(<div>
        Parent
        <Child/>
    </div>)
}