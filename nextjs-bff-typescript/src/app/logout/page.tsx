'use client';
import {Button, DialogActions} from "@mui/material";
import ConfirmationDialog from "@/app/components/ConfirmationDialog";
import React, {useState} from "react";
import {useAppDispatch} from "@/lib/hooks";
import {logout} from "@/lib/features/auth/authSlice";
import {useRouter,redirect} from "next/navigation";

export default function LogoutPage()
{
    const dispatch = useAppDispatch();
    let router =useRouter();
    const [open, setOpen] = useState(false);
    const confirmHandler =()=>{
        console.log('Confirm ');
        dispatch(logout());
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