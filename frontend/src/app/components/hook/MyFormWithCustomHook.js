'use client';

import useOurForm from "./useOurForm";

export default function MyFormWithCustomHook()
{
    const {
        register,
        handleSubmit,

    } = useOurForm();
    const onSubmit = (data) => console.log(data);
    return (<div>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div>
                <label>Name</label>
                <input {...register("name")} />
            </div>


            {/* include validation with required or other standard HTML validation rules */}
            <div>
                <label>Email</label>
                <input {...register("email")} />
            </div>

            {/* errors will return when field validation fails  */}



            <input type="submit" />

        </form>
    </div>)
}