export default function Greeting({show})
{
   /* if(show)
    {
        return <div>
            Hello
        </div>
    }
    else
    {
        return null;
    }*/
    return(<div>
        {show && <h1>Hello</h1>}
    </div>);
}