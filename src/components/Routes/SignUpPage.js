import React from 'react';
import { Redirect } from 'react-router-dom';
import SignUpForm from '../Forms/SignUpForm';

const SignUpPage = props => {
  console.log('SignUpPage component rendered');
  return (
    <SignUpForm/>
  )
};

export default SignUpPage;