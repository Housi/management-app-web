import { useAuth } from '@api/AuthContext';
import { Link, Box } from '@material-ui/core';

export const Dashboard = () => {
  const { user } = useAuth();
  return (
    <>
      {`hi ${user.first_name}`}
      <Box>
        <Link href={process.env.NEXT_PUBLIC_LOGOUT}>logout</Link>
      </Box>
    </>
  );
};
