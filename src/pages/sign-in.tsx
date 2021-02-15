import { LoginForm } from '@modules/auth/LoginForm';
import { GuestLayout } from '@layouts/GuestLayout';

const SignInView = () => {
  return (
    <GuestLayout title="URB-E">
      <LoginForm />
    </GuestLayout>
  );
};

export default SignInView;
