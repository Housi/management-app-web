import Head from 'next/head';
import { RouteGuard } from '@components/ui';
import { BrandLayout } from '@layouts/BrandLayout';
import { LoginForm } from '@modules/auth/LoginForm';

const LoginView = () => {
  return (
    <RouteGuard exclude={['user']}>
      <Head>
        <title>{'URB-E Login'}</title>
      </Head>
      <BrandLayout>
        <LoginForm />
      </BrandLayout>
    </RouteGuard>
  );
};

export default LoginView;
