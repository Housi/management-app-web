import Head from 'next/head';
import { RouteGuard } from '@components/ui';
import { AppLayout } from '@layouts/AppLayout';
import { Dashboard } from '@modules/dashboard/Dashboard';

const DashboardView = () => {
  return (
    <RouteGuard role={'guest'}>
      <Head>
        <title>{'URB-E Dashboard'}</title>
      </Head>
      <AppLayout>
        <Dashboard />
      </AppLayout>
    </RouteGuard>
  );
};

export default DashboardView;
