'use client';

function ListItem({items,render})
{
    return (<div>
        {
            items.map((item,index)=><div>
                {render(item)}
            </div>)
        }
    </div>)
}
function renderDiv(item)
{
    return <div>
        {item}
    </div>
}
function renderHeader(item)
{
    return <h4>
        {item}
    </h4>
}
export default function RenderPropertyDemo()
{

    let items = ['Apple','Orange',"Banana"];
    return <div>
        <ListItem items={items}
                  render={renderHeader}
            />
    </div>
}