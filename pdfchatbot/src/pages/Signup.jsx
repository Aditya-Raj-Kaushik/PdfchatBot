import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const Signup = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <SignUp signInUrl="/login" forceRedirectUrl={"/dashboard"} />
    </div>
  );
};

export default Signup