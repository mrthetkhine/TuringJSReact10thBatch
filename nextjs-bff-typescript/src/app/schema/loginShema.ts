import {z} from "zod";

export const loginSchema = z.object({

    username:z.string().min(1,{message:'Username required'}),
    password:z.string().min(1,{message:'Password required'}),

})
export type LoginFormValue = z.infer<typeof loginSchema>;