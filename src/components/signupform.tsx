// src/components/SignUpForm.tsx
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Button, TextField, Typography } from '@mui/material';

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters long'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Password confirmation is required'),
  });

const SignUpForm: React.FC = () => {
  const handleSubmit = async (values: { username: string; email: string; password: string }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      alert(response.data.message);
    } catch (error: any) {
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Typography variant="h4">Create an Account</Typography>
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
            name="email"
            label="Email"
            fullWidth
            type="email"
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
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
          <Field
            as={TextField}
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            fullWidth
            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword}
          />
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
