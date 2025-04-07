'use client';

import { useForm, Controller } from "react-hook-form"
import {Button, Grid, Input, TextField} from "@mui/material";

export default function HookFromWithMUI()
{
    const { control,
            watch,
            handleSubmit,
            reset,
        setValue,
    } = useForm({
        defaultValues: {
            price: "",
            quantity: "",
        },
    })

    const onSubmit = (data) => console.log(data)
    const formValues = watch();
    console.log('Render MUI React Hook form');
    return(<div container>
        React Hook Form with MUI

        <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>

                <Grid size={12}>
                    <Controller
                        name="price"
                        control={control}
                        render={({ field }) => <TextField {...field} label="Price" variant="filled" />}
                    />
                </Grid>
                <Grid size={12}>
                    <Controller
                        name="quantity"
                        control={control}
                        render={({ field }) => <TextField {...field} label="Quantity" variant="filled" />}
                    />
                </Grid>
                <Grid size={12}>
                    Total {formValues.price * formValues.quantity}
                </Grid>
                <Grid size={12}>
                    <div>
                        <button type={"button"} onClick={()=>reset()}>Reset</button>
                        &nbsp;
                        <button type={"button"} onClick={()=>setValue('quantity',100)}>Update</button>
                    </div>
                    <Button type="submit" variant="outlined">Submit</Button>
                </Grid>

        </Grid>
    </form>
    </div>);
}