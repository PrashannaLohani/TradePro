import { InputWithLabel } from "../components/ui/input-with-label";
import { AppCheckbox } from "../components/ui/app-checkbox";
import { Separator } from "../components/ui/separator";
import { AppPrimaryButton } from "../components/ui/app-primary-button";
import { AppGhostButton } from "../components/ui/app-ghost-button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export const Signup = () => {
  return (
    <>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <p className='text-4xl font-extrabold text-center'>Create Account</p>
          <p className='text-lg font-medium text-center'>
            Sign up to start your trading journey
          </p>
        </div>
        <div className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <InputWithLabel
              id='firstName'
              type='text'
              label='First Name'
              placeholder='Enter first name'
              required
            />
            <InputWithLabel
              id='lastName'
              type='text'
              label='Last Name'
              placeholder='Enter last name'
              required
            />
          </div>
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
            placeholder='Create a password'
            required
          />
          <InputWithLabel
            id='confirmPassword'
            type='password'
            label='Confirm Password'
            placeholder='Confirm your password'
            required
          />
          <AppCheckbox
            id='terms'
            label='I agree to the Terms of Service and Privacy Policy'
            required
          />
        </div>

        <AppPrimaryButton
          size='lg'
          variant='secondary'
        >
          Create Account
        </AppPrimaryButton>
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
        <p className='text-center text-sm text-muted-foreground'>
          Already have an account?{" "}
          <a
            href='/login'
            className='text-secondary hover:underline'
          >
            Sign in
          </a>
        </p>
      </div>
    </>
  );
};
