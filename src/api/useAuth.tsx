import useSWR from 'swr';
import { createContext, useState, useContext, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Loader } from '@ui/Loader';
import { useIsMounted } from '@hooks/useIsMounted';
import { APIClient } from '@api/client';

export type User = { user?: any };
export type AuthContext = { googleLogin?: () => void } & User;

export const AuthContext = createContext<AuthContext>({});

export const AuthProvider = ({ children }) => {
  const [activeHandler, registerHandler] = useState<any>();
  const isMounted = useIsMounted();
  const router = useRouter();
  const { data, error, mutate } = useSWR(
    activeHandler ? `/api/users/current` : null
  );

  const setupUnauthorizedHandler = (): void => {
    if (activeHandler) APIClient.interceptors.response.eject(activeHandler);
    const handler = APIClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) router.push(`/sign-in`);
        else return Promise.reject(error);
      }
    );
    registerHandler(handler);
  };

  const googleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_GOOGLE_LOGIN}`;
  };

  useMemo(() => {
    if (isMounted) {
      setupUnauthorizedHandler();
      mutate();
      return (): void => APIClient.interceptors.response.eject(activeHandler);
    }
  }, [isMounted]);

  return (
    <AuthContext.Provider value={{ user: data, googleLogin }}>
      {data || error ? children : <Loader />}
    </AuthContext.Provider>
  );
};

export const useAuth = (): any => {
  const context = useContext(AuthContext);
  return context;
};
