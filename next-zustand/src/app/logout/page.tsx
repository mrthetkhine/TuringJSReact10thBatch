'use client';
import {Button} from "@mui/material";
import ConfirmationDialog from "@/app/components/ConfirmationDialog";
import React, {useState} from "react";


import {redirect} from "next/navigation";
import {useBoundStore} from "@/stores/useBoundStore";

export default function LogoutPage()
{

    const {logout} = useBoundStore();
    const [open, setOpen] = useState(false);
    const confirmHandler =()=>{
        console.log('Confirm ');
        logout();
        redirect('/login');

    };
    const cancelHandler =()=>{
        console.log('Cancel');
    }
    const showConfirmDialog = () => {
        setOpen(true);
    };

    const handleClose = (newValue?: string) => {
        setOpen(false);

    };
    return(<div>
        <ConfirmationDialog
            id="ringtone-menu"
            keepMounted
            title={"Logout?"}
            message={"Are you sure you want to logout"}
            open={open}
            onClose={handleClose}
            okCallBack={confirmHandler}
            cancelCallBack={cancelHandler}
        />
        <Button type="button" variant={"contained"} onClick={showConfirmDialog}>Logout</Button>
    </div>)
}