export default function Items({items})
{
    console.log('Items ',items);
    return (<div>
        Total no of item {items.length}
        <ol>
        {
            items.map((item,index)=><li key={index}>
                {item}
            </li>)
        }
        </ol>
    </div>);
}