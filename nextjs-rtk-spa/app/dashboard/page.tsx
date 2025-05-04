'use client';
import {useRouter} from "next/navigation";

export default  function Page()
{
   // await new Promise((resolve) => setTimeout(resolve, 500));
    const router = useRouter();
    console.log('Dashboard');
    let btnHandler = ()=>{
        console.log('btn handler');
        router.push('/dashboard/admin');
    };
    return (<div>
        <h1>Dashboard</h1>
        <button type={"button"} onClick={btnHandler}>Go to admin</button>
    </div>);
}