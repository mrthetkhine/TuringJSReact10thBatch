'use client';
import {redirect} from "next/navigation";

export default async function MovieDetailsPage({
                                             params,
                                         }: {
                                            params: Promise<{ id: string }>
                                        })
{
    const { id } = await params;
    if (id=='null') {
        redirect('/movies');
    }
    return (<div>
        Movie details page id { id}
    </div>);
}