'use client';
import {useForm} from "react-hook-form";

export default function SaleForm()
{
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const formValues = watch();
    console.log('Form values ',formValues);
    const onSubmit = (data) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Price</label>
                <input  {...register("price")} />
            </div>
            <div>
                <label>Qty</label>
                <input  {...register("qty")} />
            </div>
            <div>
            <label>Total</label>
                {formValues.price * formValues.qty}
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    )
}