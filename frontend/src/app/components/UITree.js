import {console} from "next/dist/compiled/@edge-runtime/primitives";

function ChildA()
{
    console.log('Render child A');
    return (<div>
        Child A
    </div>);
}
function ChildB()
{
    console.log('Render child B');
    return (<div>
        Child B
        <GrandChild/>
    </div>);
}
function GrandChild()
{
    console.log('Render GrandChild');
    return (<div>
        GrandChild
    </div>);
}
export default function UITree()
{
    console.log('Render UI Tree');
    return (<div>
        UI Tree
        <ChildA/>
        <ChildB/>
    </div>);
}