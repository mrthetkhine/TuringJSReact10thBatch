import React from "react";
import useAuth from "@/app/hooks/useAuth";

interface ProtectedRouteProps{
    children:React.ReactNode
}
export default function ProtectedRoute({children}:ProtectedRouteProps)
{
    const auth = useAuth();
    if(auth)
    {
        return <>
            {children}
        </>
    }
    else{
        return null;
    }
}