import React from "react";
import { Avatar, Container, Grid, TextField, Button, Link} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function SignUp() {
    return (
        <Grid>
            <Container align='center'>
                <Avatar><LockOutlinedIcon/></Avatar>
                <h1>Sign Up</h1>
                <TextField label='Name' placeholder='Name' fullWidth required></TextField>
                <TextField label='LastName' placeholder='LastName' fullWidth required></TextField>
                <TextField label='Email' placeholder='Email' fullWidth required></TextField>
                <TextField label='Password' placeholder='Password' type='password' fullWidth required></TextField>
                <Button type='submit' color='primary' variant="contained" fullWidth>Create</Button>
                <p>Already have an account?</p>
                <Link href='#' id="newAccount" >Go and sign in!</Link>
            </Container>
        </Grid>
    );
}