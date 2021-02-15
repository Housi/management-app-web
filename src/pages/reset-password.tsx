import { GuestLayout } from '@layouts/GuestLayout';
import { ResetForm } from '@modules/auth/ResetForm';

const ResetPasswordView = () => {
  return (
    <GuestLayout title="URB-E">
      <ResetForm />
    </GuestLayout>
  );
};

export default ResetPasswordView;
