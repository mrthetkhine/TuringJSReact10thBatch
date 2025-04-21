'use client';
import {useEffect} from "react";

export function useAuth()
{
    return {auth:false};
}
export function withAuth(Component)
{
    return (props)=>{
        let {auth}=useAuth();
        return auth? <Component  {...props} />: <h1> 401 UnAuthenticated</h1>;
    }
}
export function Page1()
{
    return (<div>
        Page 1
    </div>);
}
function Page2()
{
    return (<div>
        Page 2
    </div>);
}
let AuthPage1 = withAuth(Page1);
let AuthPage2 = withAuth(Page2);
export default function AuthDemo()
{
    return (<div>
        <AuthPage1/>
        <AuthPage2/>
    </div>);
}