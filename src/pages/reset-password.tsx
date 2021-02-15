import Head from 'next/head';
import { ResetForm } from '@modules/auth/ResetForm';
import { RouteGuard } from '@components/ui';
import { BrandLayout } from '@layouts/BrandLayout';

const ResetPasswordView = () => {
  return (
    <RouteGuard role={'user'}>
      <Head>
        <title>{'URB-E Reset password'}</title>
      </Head>
      <BrandLayout>
        <ResetForm />
      </BrandLayout>
    </RouteGuard>
  );
};

export default ResetPasswordView;
