import {ReactNode} from "react";
import getAuthToken from "../utils/auth";

interface Props {
    readonly children: ReactNode;
}

export default async function ProtectedRoute({children}:Props)
{
    const auth = await getAuthToken();
    if(!auth)
    {
        return null;
    }
    else
    {
       return( <>
            {children}
        </>)
    }
}