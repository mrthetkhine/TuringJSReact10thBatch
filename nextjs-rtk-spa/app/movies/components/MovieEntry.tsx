'use client';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Input, Grid,
} from "@mui/material";
import {useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useSaveMovieMutation} from "@/lib/features/movie/movieApiSlice";
import {Movie} from "@/app/types/movies";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const movieSchema = yup.object({
    title: yup.string().required('Title required'),
    year: yup.number().positive().integer().required(),
    director: yup.object().shape({
        name: yup.string().required('Director name is required'),
        phoneNo: yup.string().required('Director phoneNo is required')
    }),
}).required();

export default function MovieEntry()
{
    const [saveMovie, saveMovieResult] = useSaveMovieMutation();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(movieSchema)
    });
    const onSubmit = (data:any) => {
        console.log(data);
        let movie:Movie = data;
        saveMovie(movie);
        handleClose();

    }

    return(<div>

        <Dialog
            fullWidth
            open={open}
            onClose={handleClose}

        >
            <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle>New Movie</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <TextField
                            {...register("title")}
                            label="Title"
                            variant="standard"
                            fullWidth
                            error={!!errors.title}
                            helperText={errors.title?.message}/>
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("year")}
                            label="Year"
                            variant="standard"
                            fullWidth
                            error={!!errors.year}
                            helperText={errors.year?.message}/>
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("director.name")}
                            label="Director Name"
                            variant="standard"
                            fullWidth
                            error={!!errors.director?.name}
                            helperText={errors.director?.name?.message}/>
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("director.phoneNo")}
                            label="Director PhoneNo"
                            variant="standard"
                            fullWidth
                            error={!!errors.director?.phoneNo}
                            helperText={errors.director?.phoneNo?.message}/>
                    </Grid>

                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Save</Button>
            </DialogActions>
            </form>
        </Dialog>
        <Box component="section" sx={{ p: 2}}>
            <Button variant="contained" onClick={handleClickOpen}>New Movie</Button>

        </Box>
    </div>);
}