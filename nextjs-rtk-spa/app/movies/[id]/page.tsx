'use client';
import {redirect, useParams} from "next/navigation";
import {useState} from "react";

export default function MovieDetailsPage({
                                             params,
                                         }: {
                                            params: Promise<{ id: string }>
                                        })
{
    const par = useParams<{ id: string }>()

    return (<div>
        Movie details page id { par.id}
    </div>);
}