import React from "react";
import { Avatar, Container, Grid, TextField, FormControlLabel, Checkbox, Button, Link} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function SignIn() {
    return (
        <Grid>
            <Container align='center'>
                <Avatar><LockOutlinedIcon/></Avatar>
                <h1>Sign In</h1>
                <TextField label='Email' placeholder='Enter your email' fullWidth required></TextField>
                <TextField label='Password' placeholder='Enter your password' type='password' fullWidth required></TextField>
                <Button type='submit' color='primary' variant="contained" fullWidth>Sign in</Button>
                <FormControlLabel
                    control={
                    <Checkbox name="checkedB" color="primary"/>
                    }
                    label="Remember me"
                 />
                <Link href='#' id="forgotPasswd" >Forgot Password?</Link><br></br>
                <Link href='#' id="newAccount" >Are you new? Create a account!</Link>
            </Container>
        </Grid>
    );
}