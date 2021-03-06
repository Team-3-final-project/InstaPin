import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Link as Goes } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { userRegist } from '../store/actions/userAction'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';
import Navbar from '../components/navbarhome'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{fontFamily: 'Montserrat', fontWeight: 700}}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        InstaPin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory()
  const [user, setUser] = useState({
      username: null,
      email: null,
      password: null
  })

  const handleOnChange = (e) => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const doSubmit = (e) => {
      e.preventDefault()
      const { username, email, password } = user
      if (!username || !email || !password) {
          return Swal.fire({
            title: 'Please fill all fields!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            },
            icon: 'error'
          })
      }
      dispatch(userRegist(user))
      history.push('/')
  }

  return (
    <>
    <Navbar />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography style={{fontFamily: 'Montserrat', fontWeight: 700}} component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => doSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handleOnChange(e)}
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Usename"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handleOnChange(e)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handleOnChange(e)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            style={{fontFamily: 'Montserrat', fontWeight: 700}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Goes to="/login" variant="body2" style={{fontFamily: 'Montserrat', fontWeight: 700}}>
                Already have an account? Sign in
              </Goes>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}
