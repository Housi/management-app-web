import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TextField, FormBox, FormTitle, AppLink } from '@components/ui';
import { Box, Button } from '@material-ui/core';
import { useRouter } from 'next/router';

export const ResetForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();
  const onSubmit = () => router.push(`/reset-password-success`);
  const { t } = useTranslation('auth');

  return (
    <FormBox>
      <FormTitle>{t('resetPassword')}</FormTitle>
      <Box pb={2}>{t('resetPasswordText')}</Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <TextField
            error={errors.email}
            name={'email'}
            type={'email'}
            fullWidth
            inputRef={register({ required: true })}
          />
          <Box py={2}>
            <input type="submit" hidden />
            <Button onClick={handleSubmit(onSubmit)}>
              {t('sendInstructions')}
            </Button>
          </Box>
          <Box>
            {t('rememberPassword')}
            <AppLink href={'/login'}>{t('signIn')}</AppLink>
          </Box>
        </Box>
      </form>
    </FormBox>
  );
};
