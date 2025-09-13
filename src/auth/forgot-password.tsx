import { InputWithLabel } from "../components/ui/input-with-label";
import { AppPrimaryButton } from "../components/ui/app-primary-button";
import { HiOutlineMail } from "react-icons/hi";

export const ForgotPassword = () => {
  return (
    <>
      <div className='flex flex-col gap-6 w-full max-w-md'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-center mb-4'>
            <div className='p-4 bg-secondary/10 rounded-full'>
              <HiOutlineMail className='size-8 text-secondary' />
            </div>
          </div>
          <p className='text-4xl font-extrabold text-center'>
            Forgot Password?
          </p>
          <p className='text-lg font-medium text-center text-muted-foreground'>
            No worries! Enter your email address and we'll send you an OTP to
            reset your password.
          </p>
        </div>

        <div className='space-y-4'>
          <InputWithLabel
            id='email'
            type='email'
            label='Email Address'
            placeholder='Enter your registered email'
            required
          />
        </div>

        <AppPrimaryButton
          size='lg'
          variant='secondary'
        >
          Send OTP
        </AppPrimaryButton>

        <p className='text-center text-sm text-muted-foreground'>
          Remember your password?{" "}
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
