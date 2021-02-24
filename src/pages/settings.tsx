import Head from 'next/head';
import { RouteGuard } from '@components/ui';
import { AppLayout } from '@layouts/AppLayout';

const SettingsView = () => {
  return (
    <RouteGuard exclude={['guest']}>
      <Head>
        <title>{'URB-E Settings'}</title>
      </Head>
      <AppLayout>
        <div>{`settings`}</div>
      </AppLayout>
    </RouteGuard>
  );
};

export default SettingsView;
