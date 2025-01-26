import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <SignIn signUpUrl="/signup" forceRedirectUrl="/dashboard" />
    </div>
  );
};

export default Login;