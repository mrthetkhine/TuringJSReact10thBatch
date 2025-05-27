'use client';
import React, {useEffect} from 'react';

import {useRouter} from "next/navigation";

import { usePathname } from 'next/navigation';
import useAuth from "@/app/hooks/useAuth";

function IsAuth<T>(Component: React.ComponentType<T>) {
    return (props: T) => {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const router = useRouter();
        const auth = useAuth();
        const login = auth;
        const pathname = usePathname();

        console.log('Path name ',pathname);
        useEffect(()=>{
            if (!login) {
                router.push('/login?redirectUrl='+pathname);
            }
        },[]);


        return (
            <>
                <Component {...props!} />
            </>
        );
    };
}

export default IsAuth;