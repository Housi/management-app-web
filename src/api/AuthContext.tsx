import { createContext, useContext } from 'react';
import { LoaderScreen } from '@ui/LoaderScreen';
import useSWR from 'swr';

export type User = { user?: any };

export const AuthContext = createContext<User>({});

export const AuthProvider = ({ children }) => {
  const { data, error } = useSWR(`/api/users/current`, {
    shouldRetryOnError: false,
  });
  return (
    <AuthContext.Provider
      value={{ user: data ? { ...data, role: 'user' } : { role: 'guest' } }}
    >
      {data || error ? children : <LoaderScreen />}
    </AuthContext.Provider>
  );
};

export const useAuth = (): any => {
  const context = useContext(AuthContext);
  return context;
};
