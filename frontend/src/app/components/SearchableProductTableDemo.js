'use client'
import {useState} from "react";

let data =[
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "Another", price: "$1", stocked: true, name: "Another Item" },
]
function ProductRow({item})
{
    return (<div>
        <div className={'item-name'}>{item.name} </div>
        <div className={'item-price'}>{item.price} </div>
    </div>);
}
function ProductCategoryRow({items})
{
    return (<div>
        <h3 className={'item-category'}>{items[0] && items[0].category}</h3>
        {
            items.map((item,index)=>(<ProductRow
                key={index}
                item={item}/>)
            )
        }
    </div>);
}
function getDistinctCategory(items)
{
   let categories = items.map(item=>item.category);
   let set = new Set(categories);
   return [...set];
}
export default function SearchableProductTableDemo()
{
    let [items,setItems] = useState(data);
    let [searchText,setSearchText] = useState('');
    let [inStock,setInStock] = useState(false);

    let filterItems = items.filter(item=>item.name.includes(searchText) );
    if(inStock)
    {
        console.log('In stock item');
        filterItems = filterItems.filter(item=>item.stocked);
    }
    let categories = getDistinctCategory(items);
    console.log('category ',categories);
   /* let fruits = filterItems.filter(item=>item.category=='Fruits');
    let vegetable = filterItems.filter(item=>item.category=='Vegetables');*/

    const searchOnChange = (event)=>{
        setSearchText(event.target.value);
    }
    const inStockChangeHandler = (event)=>{
        setInStock(event.target.checked);
    }
    return (<div>
        <form>
            <input type={"text"} value ={searchText}  onChange={searchOnChange}/>
            <div>
                <label>
                    <input type="checkbox" value={inStock}
                           onChange={inStockChangeHandler}/>
                    {' '}
                    Only show products in stock
                </label>
            </div>

        </form>

        <div>
            <div className={'item-name-title'}>Title</div>
            <div className={'item-price-title'}>Price</div>
        </div>

        {
            categories.map(cat=><ProductCategoryRow
                items={filterItems.filter(item=>item.category==cat)}/>)
        }


    </div>)
}