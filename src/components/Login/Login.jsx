import React, { useGlobal } from 'reactn';


import { withFormik } from 'formik'
import * as Yup from 'yup'

import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'


const Login = props => {
    const {
        values,
        handleChange,
        errors,
        touched
    } = props;
    console.log(props)
    return (
        <div>
            <Grid container justify='center' alignContent='center'>
                <Grid item xs={6} md={4}>
                    <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '30px' }}>
                        <Typography variant="headline" gutterBottom>
                            Signup
                        </Typography>
                        
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Username</InputLabel>
                            <Input
                                name='username'
                                value={values.username}
                                onChange={handleChange}
                                autoComplete="off"
                                fullWidth
                            />
                            {touched[values.username] && <FormHelperText>{errors.username}</FormHelperText>}
                        </FormControl>

                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Password</InputLabel>
                            <Input
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                fullWidth
                            />
                            {touched.password && <FormHelperText>{errors.password}</FormHelperText>}
                        </FormControl>

                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Email</InputLabel>
                            <Input
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                                fullWidth
                            />
                            {touched.email && <FormHelperText>{errors.email}</FormHelperText>}
                        </FormControl>

                        <FormControl fullWidth margin='normal'>
                            <Button
                                color='primary'
                                type='submit'
                            >
                                Signup
                                </Button>
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

const formikForm = withFormik({
    mapPropsToValues() {
        return {
            username: '',
            password: '',
            email: ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("need")
            .min(6, "6 kt"),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must have min 8 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid')
    })
})(Login);


export default formikForm;

