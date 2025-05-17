import React, {useEffect, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

export interface ConfirmationDialogRawProps {
    id: string;
    keepMounted: boolean;
    title:string;
    message: string;
    open: boolean;
    okCallBack: ()=>void;
    cancelCallBack:()=>void;
    onClose: (value?: string) => void;
}

export default function ConfirmationDialog(props: ConfirmationDialogRawProps) {
    const { onClose, title,message, open,okCallBack,cancelCallBack, ...other } = props;


    const handleCancel = () => {
        onClose();
        cancelCallBack();
    };

    const handleOk = () => {
        onClose();
        okCallBack();
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            open={open}
            {...other}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent dividers>
                {message}
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel}>
                    Cancel
                </Button>
                <Button onClick={handleOk}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}
