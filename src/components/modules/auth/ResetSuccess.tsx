import { useTranslation } from 'react-i18next';
import { FormBox, FormTitle, AppLink } from '@components/ui';
import { Box, Button, Typography } from '@material-ui/core';

export const ResetSuccess = () => {
  const { t } = useTranslation('auth');

  return (
    <FormBox>
      <FormTitle>{t('resetSuccessTitle')}</FormTitle>

      <Box>
        <Typography>{t('resetSuccessInfo')}</Typography>
        <Box py={2}>
          <a href="mailto:" target="_blank">
            <Button>{t('openEmail')}</Button>
          </a>
        </Box>
        <Box>{t('notReceivedTitle')}</Box>
        <Box>
          {t('notReceivedText')}
          <AppLink href={'/reset-password'}>{t('notReceivedPrompt')}</AppLink>
        </Box>
      </Box>
    </FormBox>
  );
};
