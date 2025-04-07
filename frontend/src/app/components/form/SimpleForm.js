'use client';
import {useState} from "react";

export default function SimpleForm()
{
    let [price,setPrice] = useState('');
    let [quantity,setQuantity] = useState('');
    const priceChangeHandler = (event)=>{
        //console.log('Event ',event);
        setPrice(event.target.value);
    }
    const qtyOnChangeHandler = (event)=>{
        setQuantity(event.target.value);
    }
    console.log('Render');
    return (<div>
        Simple Form
        <form>
            <div>
                <label>Price</label>
                <input type="text"
                       value={price}
                       onChange={priceChangeHandler}/>
            </div>
            <div>
                <label>Quantity</label>
                <input type={"text"}
                       value={quantity}
                       onChange={qtyOnChangeHandler}
                />
            </div>
            <div>
                <label>Total</label>
                Total {price* quantity}
            </div>
        </form>
    </div>);
}