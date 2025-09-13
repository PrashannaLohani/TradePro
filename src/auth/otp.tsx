import { useState } from "react";
import { AppPrimaryButton } from "../components/ui/app-primary-button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../components/ui/input-otp";
import { HiInformationCircle, HiOutlineShieldCheck } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Label } from "../components/ui/label";
import { Alert, AlertDescription } from "../components/ui/alert";

export const OtpAuth = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.toUpperCase() === "TRADE") {
      navigate("/app/dashboard");
    } else {
      alert("Invalid OTP. Please enter the correct OTP.");
    }
  };

  return (
    <>
      <div className='flex flex-col gap-6 w-full max-w-md'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-center mb-4'>
            <div className='p-4 bg-secondary/10 rounded-full'>
              <HiOutlineShieldCheck className='size-8 text-secondary' />
            </div>
          </div>
          <p className='text-4xl font-extrabold text-center'>Verify OTP</p>
          <p className='text-lg font-medium text-center text-muted-foreground'>
            Enter the OTP sent to your email address
          </p>
        </div>

        <form
          onSubmit={handleOtpSubmit}
          className='space-y-6'
        >
          <div className='space-y-4'>
            <Label className='text-sm font-medium text-foreground'>
              OTP Code
            </Label>
            <div className='flex justify-center'>
              <InputOTP
                maxLength={5}
                value={otp}
                onChange={(value) => setOtp(value)}
                containerClassName='gap-4'
              >
                <InputOTPGroup>
                  <InputOTPSlot
                    index={0}
                    className='h-18 w-20 text-lg font-semibold'
                  />
                  <InputOTPSlot
                    index={1}
                    className='h-18 w-20 text-lg font-semibold'
                  />
                  <InputOTPSlot
                    index={2}
                    className='h-18 w-20 text-lg font-semibold'
                  />
                  <InputOTPSlot
                    index={3}
                    className='h-18 w-20 text-lg font-semibold'
                  />
                  <InputOTPSlot
                    index={4}
                    className='h-18 w-20 text-lg font-semibold'
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          <AppPrimaryButton
            size='lg'
            variant='secondary'
            type='submit'
          >
            Verify OTP
          </AppPrimaryButton>
        </form>
        <div>
          <Alert variant='default'>
            <HiInformationCircle />
            <AlertDescription>The OTP is T-R-A-D-E !!!</AlertDescription>
          </Alert>
        </div>

        <div className='text-center'>
          <p className='text-sm text-muted-foreground mb-2'>
            Didn't receive the OTP?
          </p>
          <button
            type='button'
            className='text-sm text-secondary hover:underline'
            onClick={() => alert("OTP resent! Check your email.")}
          >
            Resend OTP
          </button>
        </div>

        <p className='text-center text-sm text-muted-foreground'>
          <a
            href='/login'
            className='text-secondary hover:underline'
          >
            Back to Sign In
          </a>
        </p>
      </div>
    </>
  );
};
