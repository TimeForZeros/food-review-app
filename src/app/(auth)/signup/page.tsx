'use client'; // temp
import React from 'react';
import { signUp } from './action';
import { Button } from '@/components/ui/button';
const SignUp = () => {
  const handleSignUp = () =>
    signUp({ email: 'foo@bar.com', name: 'foo', password: 'barfoooo' });
  return (
    <div>
      <div>SignUp</div>
      <Button onClick={handleSignUp}>Click Me</Button>
    </div>
  );
};

export default SignUp;
