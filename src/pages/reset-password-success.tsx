import { GuestLayout } from '@layouts/GuestLayout';
import { ResetSuccess } from '@modules/auth/ResetSuccess';

const ResetSuccessView = () => {
  return (
    <GuestLayout title="URB-E">
      <ResetSuccess />
    </GuestLayout>
  );
};

export default ResetSuccessView;
