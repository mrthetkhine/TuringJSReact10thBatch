'use client'
interface ChildProps {
    handler:()=>void
}
function Child({handler}:ChildProps)
{
    return (<div>
        <h1 onClick={handler}>Click Me</h1>
    </div>);
}
function CallBackDemo()
{
    const handler = ()=>{
        console.log('Parent handler');
    }
    return (<div>
        Parent
        <Child handler={handler}></Child>
    </div>);
}
export default CallBackDemo;