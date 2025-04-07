'use client';

import {useForm} from "react-hook-form";

export default function SimpleValidation()
{
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("firstName", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === "required" && (
                <p role="alert">First name is required</p>
            )}

            <input
                {...register("mail", { required: "Email Address is required" })}
                aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p role="alert">{errors.mail.message}</p>}

            <input type="submit" />
        </form>
    )
}