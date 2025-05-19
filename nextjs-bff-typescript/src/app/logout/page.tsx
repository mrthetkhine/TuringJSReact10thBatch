'use client';
import {Button, DialogActions} from "@mui/material";

import React, {useState} from "react";


import {useRouter,redirect} from "next/navigation";
import ConfirmationDialog from "../components/ConfirmationDialog";
import {logoutAction} from "../lib/authActions";

export default function LogoutPage()
{

    let router =useRouter();
    const [open, setOpen] = useState(false);
    const confirmHandler =()=>{
        console.log('Confirm ');

        logoutAction();


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