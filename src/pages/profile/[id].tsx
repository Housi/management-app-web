import Head from 'next/head';
import { useRouter } from 'next/router';
import { RouteGuard } from '@components/ui';
import { AppLayout } from '@layouts/AppLayout';

const ProfileView = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <RouteGuard exclude={['guest']}>
      <Head>
        <title>{'URB-E Support'}</title>
      </Head>
      <AppLayout>
        <div>{`Profile id: ${id}`}</div>
      </AppLayout>
    </RouteGuard>
  );
};

export default ProfileView;
