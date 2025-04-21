import {useEffect, useState} from "react";

export default function useFetch(url)
{
    let [loading,setLoading] = useState(false);
    let [data,setData] = useState([]);
    useEffect(()=>{
        setLoading(true);
        fetch(url)
            .then(resp=>resp.json())
            .then(json=>setData(json))
            .then(()=>setLoading(false));

    },[]);


    return [loading,data];
}