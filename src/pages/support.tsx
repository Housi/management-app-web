import Head from 'next/head';
import { RouteGuard } from '@components/ui';
import { AppLayout } from '@layouts/AppLayout';

const SupportView = () => {
  return (
    <RouteGuard exclude={['guest']}>
      <Head>
        <title>{'URB-E Support'}</title>
      </Head>
      <AppLayout>
        <div>{`support`}</div>
      </AppLayout>
    </RouteGuard>
  );
};

export default SupportView;
