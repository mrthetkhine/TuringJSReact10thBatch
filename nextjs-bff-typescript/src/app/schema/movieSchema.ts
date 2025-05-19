import {z} from "zod";

export const movieSchema = z.object({
    _id:z.string(),
    title:z.string().min(1,{message:'Title required'}),
    year:z.coerce.number().min(1,{message:'Year required'}),
    director:z.string().min(1,{message:'Director required'}),
    phoneNo:z.string().min(1,{message:'Director required'}),
})
export type MovieFormValue = z.infer<typeof movieSchema>;