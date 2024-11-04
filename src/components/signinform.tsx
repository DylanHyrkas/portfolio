import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Button, TextField, Typography } from '@mui/material';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const SignInForm: React.FC = () => {
  const handleSubmit = async (values: { username: string; password: string }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', values);
      alert(response.data.message);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Typography variant="h4">Sign In</Typography>
          <Field
            as={TextField}
            name="username"
            label="Username"
            fullWidth
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
          />
          <Field
            as={TextField}
            name="password"
            type="password"
            label="Password"
            fullWidth
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <Button type="submit" variant="contained" color="primary">
            Sign In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
