import { useForm } from 'react-hook-form';
import { Box, Button } from '@material-ui/core';
import {
  TextField,
  PasswordField,
  FormBox,
  FormTitle,
  AppLink,
} from '@components/ui';

export const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {};

  return (
    <FormBox>
      <FormTitle>{`Sign in to URB-E`}</FormTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column">
          <TextField
            error={errors.email}
            name="email"
            type="email"
            inputRef={register({ required: true })}
          />
          <PasswordField
            error={errors.password}
            ref={register({ required: true })}
          />
          <Box mt={1} mb={2}>
            {'Forgot password? '}
            <AppLink href={'/reset-password'}>{'Reset Password'}</AppLink>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <input type="submit" hidden />
            <Button onClick={handleSubmit(onSubmit)}>{'Sign In'}</Button>
            <Box px={1}>or</Box>
            <a href={process.env.NEXT_PUBLIC_GOOGLE_LOGIN}>
              <Button
                color={'default'}
                startIcon={
                  <img src={'/google.svg'} width="19px" height="19px" />
                }
              >
                Sign in with Google
              </Button>
            </a>
          </Box>
        </Box>
      </form>
    </FormBox>
  );
};
