import {Typography} from "@mui/material";
import Link from "next/link";

interface RouteProps
{
    link:string;
    label:string;
}
export default function Route({link,label}:RouteProps)
{
    return(<Link

        href={link}
    >
        <Typography component="div" sx={{paddingLeft: 1, paddingRight: 1}}>
            {label}
        </Typography>
    </Link>)
}