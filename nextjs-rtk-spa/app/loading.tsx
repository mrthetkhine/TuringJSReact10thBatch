"use client";
import { Audio } from 'react-loader-spinner'

export default function Loading()
{
    //console.log('loading');
    return ( <Audio
        height="80"
        width="80"
        color="green"
        ariaLabel="loading"

    />);
}