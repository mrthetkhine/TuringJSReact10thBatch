import {console} from "next/dist/compiled/@edge-runtime/primitives";

function Child(props)
{
    console.log('Child prop ',props);
    return <div {...props}>
        Child container
    </div>
}
export default function PropForward(props)
{
    return(<div>
        Parent
        <Child {...props}/>
    </div>)
}