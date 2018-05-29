import React from 'react';
import { Redirect } from 'react-router-dom';
import SignInForm from '../Forms/SignInForm';

const SignInPage = props => {
  console.log('SignInPage component rendered');
  return (
    <SignInForm/>
  )
};

export default SignInPage;