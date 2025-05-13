'use client';
import {Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import Link from "next/link";
import {createMovie} from "../../lib/actions";
import {useActionState} from "react";
import {Movie} from "../../types/movies";

export default function NewMoviePage()
{
    const [state, createMovieAction, pending] = useActionState<any>(createMovie, {});
    console.log('state ',state);
    console.log('pending ',pending);
    return (<div>
        <Dialog   fullWidth
                  open={true}>
            <form action={createMovieAction}>

                <DialogTitle>
                    New Movie
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>

                        <Grid size={12}>
                            <TextField
                                name={"title"}
                                label="Title"
                                variant="standard"
                                fullWidth
                                />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                name={"year"}
                                label="Year"
                                variant="standard"
                                fullWidth
                                />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                name={"director"}
                                label="Director"
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                name={"phoneNo"}
                                label="PhoneNo"
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>

                    <Button type="submit">Save</Button>
                </DialogActions>
            </form>
        </Dialog>

    </div>);
}