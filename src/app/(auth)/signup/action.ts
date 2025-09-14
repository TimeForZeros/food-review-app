import { authClient } from '@/lib/auth-client'; //import the auth client
import { hashPassword, authenticate } from '@/lib/auth';
import { redirect } from 'next/navigation';

type SignUpDetails = {
  email: string;
  password: string;
  name: string;
  callbackURL?: string;
};
export const signUp = async ({
  email,
  password,
  name,
  callbackURL = '/dashboard',
}: SignUpDetails) => {
  const { data, error } = await authClient.signUp.email(
    {
      email,
      password,
      name,
      callbackURL,
    },
    {
      // onRequest: (ctx) => {
      //   //show loading
      // },
      onSuccess: (ctx) => redirect(callbackURL),
      onError: (ctx) => {
        console.log(ctx.error);
        // display the error message
        alert(ctx.error.message);
      },
    },
  );
};
