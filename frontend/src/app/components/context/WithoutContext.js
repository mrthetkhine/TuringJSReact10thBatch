function GrandChild({message})
{
    return <div>
        Message in grand child {message}
    </div>
}
function Child({message})
{
    return(<div>
        Child
        <GrandChild message={message}/>
    </div>)
}
function Parent({message})
{
    return(<div>
        Parent
        <Child message={message}/>
    </div>)
}
export default function WithoutContext()
{

    return(<div>
        <Parent message={'Hello'}/>
    </div>)
}