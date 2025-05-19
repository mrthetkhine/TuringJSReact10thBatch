import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import axios from "axios";
import axiosInstance from "./app/axiosInstance";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    console.log('Middleware ',request.url);
    const cookieStore = await cookies()
    let authToken = cookieStore.get('auth-token');
    //console.log('Auth token ',authToken);
    let url = new URL(request.url);
    console.log('middleware Request ',url.pathname);
    if(!authToken?.value)
    {
        let redirectUrl = new URL('/login', request.url)
        await cookieStore.set("redirectUrl", url.pathname);
        return NextResponse.redirect(redirectUrl);

    }
    else
    {
        try {

            let resp  = await axiosInstance.post('/api/verify/verifyToken');
            let tokenResponse = resp.data;
            console.log('Token Response ',tokenResponse);
            return NextResponse.next();
        }
        catch(err)
        {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/movies/:path*',
        '/about'],
}