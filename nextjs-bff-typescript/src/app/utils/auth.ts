'use server';
import {cookies} from "next/headers";

export default async function  getAuthToken()
{
    const cookieStore = await cookies()
    let token = await cookieStore.get('auth-token');
    return token?.value;
}