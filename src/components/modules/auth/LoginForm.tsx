import { useForm } from 'react-hook-form';
import { Box, Button } from '@material-ui/core';
import { TextField, PasswordField, FormTitle, AppLink } from '@components/ui';
import Image from 'next/image';

export const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {};

  return (
    <>
      <FormTitle>{`Sign in to URB-E`}</FormTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column">
          <TextField
            error={errors.mail}
            name="email"
            type="email"
            inputRef={register({ required: true })}
          />
          <PasswordField
            error={errors.password}
            ref={register({ required: true })}
          />
          <Box display="flex" mt={1} mb={2}>
            {'Forgot password?'}
            <AppLink href={'/reset-password'}>{'Reset Password'}</AppLink>
          </Box>
          <Box display={'flex'}>
            <input type="submit" hidden />
            <Button onClick={handleSubmit(onSubmit)}>{'Sign In'}</Button>
            <Box px={4}>or</Box>
            <a href={`${process.env.NEXT_PUBLIC_API_URL}/login/google&next=`}>
              <Button
                color={'secondary'}
                startIcon={
                  <Image src="/management/google.svg" width={20} height={20} />
                }
              >
                Google
              </Button>
            </a>
          </Box>
        </Box>
      </form>
    </>
  );
};
