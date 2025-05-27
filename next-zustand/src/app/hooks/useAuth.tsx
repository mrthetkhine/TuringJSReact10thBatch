import {useBoundStore} from "@/stores/useBoundStore";


export default function useAuth()
{
    const {auth} = useBoundStore();
    return auth.token;
}