import {useEffect, useState} from "react";

export default function useOurForm()
{
    let formData = {};
    let [data,setData] = useState({

    });
    function handleSubmit(onSubmit)
    {
        return (event)=>{
            event.preventDefault();
            console.log('Handle Submit');
            //alert('Handle Submit');
            onSubmit(data);
        }
    }
    useEffect(()=>{
        console.log('Form Data ',formData);

    },[])

    function register(fieldName)
    {
        console.log('Register ',fieldName);
        formData[fieldName] = '';

        const onChangeHandler = (event)=>{
            setData({
                ...data,
                [fieldName]: event.target.value,
            })
        }
        return {
            value: data[fieldName],
            onChange:onChangeHandler,
        }
    }
    return{
        handleSubmit,
        register,
    }
}