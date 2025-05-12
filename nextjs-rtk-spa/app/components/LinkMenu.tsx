import Link from "next/link";
import {Typography} from "@mui/material";

interface LinkMenuProp  {
    url : string;
    label :string;
}
export  default function LinkMenu({url,label}:LinkMenuProp) {
    return <Link

        href={url}
    >
        <Typography component="div" sx={{paddingLeft: 1, paddingRight: 1}}>

            {label}

        </Typography>
    </Link>;
}