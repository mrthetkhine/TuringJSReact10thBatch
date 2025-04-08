'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Box, Button, Input, TextField} from "@mui/material";

const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
}).required();

export default function YupExample()
{
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <Box
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextField
                    {...register("firstName")}
                    label="FirstName"
                    variant="standard"
                    helperText={errors.firstName?.message}/>


            </div>
            <div>
                <TextField
                    {...register("age")}
                    label="Age"
                    variant="standard"
                    helperText={errors.age?.message}/>


            </div>

            <Button variant="contained" type="submit">Button</Button>
        </form>
        </Box>
    );
}