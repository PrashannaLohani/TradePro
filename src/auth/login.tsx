import { useNavigate } from "react-router-dom";
import { InputWithLabel } from "../components/ui/input-with-label";
import { AppCheckbox } from "../components/ui/app-checkbox";
import { Separator } from "../components/ui/separator";
import { AppPrimaryButton } from "../components/ui/app-primary-button";
import { AppGhostButton } from "../components/ui/app-ghost-button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/otp");
  };

  return (
    <>
      <div className='flex flex-col gap-6 w-full max-w-md'>
        <div className='flex flex-col gap-2'>
          <p className='text-4xl font-extrabold text-center'>Welcome Back</p>
          <p className='text-lg font-medium text-center'>
            Sign in to your Trading Account
          </p>
        </div>
        <div className='space-y-4'>
          <InputWithLabel
            id='email'
            type='email'
            label='Email'
            placeholder='Enter your email'
            required
          />
          <InputWithLabel
            id='password'
            type='password'
            label='Password'
            placeholder='Enter your password'
            required
          />
          <div className='flex items-center justify-between'>
            <AppCheckbox
              id='remember-me'
              label='Remember me'
            />
            <a
              href='/forgot-password'
              className='text-sm text-secondary'
            >
              Forgot Password?
            </a>
          </div>

          <AppPrimaryButton
            size='lg'
            variant='secondary'
            onClick={handleSignIn}
          >
            Sign In
          </AppPrimaryButton>
        </div>
        <Separator />
        <div className='flex items-center gap-3'>
          <AppGhostButton
            size='md'
            className='flex-1'
          >
            <FcGoogle />
            Google
          </AppGhostButton>
          <AppGhostButton
            size='md'
            className='flex-1'
          >
            <FaApple />
            Apple
          </AppGhostButton>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <p className='text-sm font-medium'>Don't have Account?</p>
          <a
            href='/signup'
            className='text-sm font-medium text-secondary'
          >
            Sign up
          </a>
        </div>
      </div>
    </>
  );
};
