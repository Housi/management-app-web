import { useForm } from 'react-hook-form';
import { TextField, FormBox, FormTitle, AppLink } from '@components/ui';
import { Box, Button } from '@material-ui/core';
import { useRouter } from 'next/router';

export const ResetForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();
  const onSubmit = () => router.push(`/reset-password-success`);

  return (
    <FormBox>
      <FormTitle>{`Reset Password`}</FormTitle>
      <Box
        pb={2}
      >{`Enter your email and we’ll send you a link to reset your password.`}</Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <TextField
            error={errors.email}
            name="email"
            type="email"
            fullWidth
            inputRef={register({ required: true })}
          />
          <Box py={2}>
            <input type="submit" hidden />
            <Button onClick={handleSubmit(onSubmit)}>Send Instructions</Button>
          </Box>
          <Box>
            {`Remember your password? `}
            <AppLink href={'/sign-in'}>Sign In</AppLink>
          </Box>
        </Box>
      </form>
    </FormBox>
  );
};
