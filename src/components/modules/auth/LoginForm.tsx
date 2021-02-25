import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@material-ui/core';
import {
  TextField,
  PasswordField,
  FormBox,
  FormTitle,
  AppLink,
} from '@components/ui';
import GoogleIcon from '@assets/google.svg';

export const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const { t } = useTranslation('auth');

  const onSubmit = (data) => {};

  return (
    <FormBox>
      <FormTitle>{t('loginTitle')}</FormTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display={'flex'} flexDirection={'column'}>
          <TextField
            error={errors.email}
            name={'email'}
            type={'email'}
            inputRef={register({ required: true })}
          />
          <PasswordField
            error={errors.password}
            ref={register({ required: true })}
          />
          <Box mt={1} mb={2}>
            {t('forgotPassword')}
            <AppLink href={'/reset-password'}>{t('resetPassword')}</AppLink>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <input type="submit" hidden />
            <Button onClick={handleSubmit(onSubmit)}>{t('signIn')}</Button>
            <Box px={1}>{t('or')}</Box>
            <a href={process.env.NEXT_PUBLIC_GOOGLE_LOGIN}>
              <Button
                color={'default'}
                startIcon={<GoogleIcon width="19px" height="19px" />}
              >
                {t('googleSignIn')}
              </Button>
            </a>
          </Box>
        </Box>
      </form>
    </FormBox>
  );
};
