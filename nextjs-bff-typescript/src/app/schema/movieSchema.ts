import {z} from "zod";

export const movieSchema = z.object({
    title:z.string().min(1,{message:'Title required'}),
    year:z.number().min(1,{message:'Year required'}),
    director:z.string().min(1,{message:'Director required'}),
    phoneNo:z.string().min(1,{message:'Director required'}),
})
export type MovieFormValue = z.infer<typeof movieSchema>;