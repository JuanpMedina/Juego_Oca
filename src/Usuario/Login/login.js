import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Typography,
    makeStyles,
    Container,
} from "@material-ui/core";
import "./login.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Neuton, sans-serif",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    fuentes: {
        fontFamily: "Neuton, sans-serif",
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Enviar datos de inicio de sesión a la base de datos
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar} style={{ backgroundColor: "#000", color: "#ffff" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" className="sign1">
                    Iniciar Sesión
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo Electronico"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        className="sign"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        className="sign"
                        autoComplete="current-password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <FormControlLabel
                        className="sign"
                        control={<Checkbox value="remember" color="primary" />}
                        label="Acuérdate de mí"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        component={RouterLink}
                        to="/home"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        INGRESAR
                    </Button>
                    <Grid container className="sign2">
                        <Grid item className="sign2">
                            <Link href="#" variant="body2" className="sign2">
                                ¿No tienes una cuenta? Registrate
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
