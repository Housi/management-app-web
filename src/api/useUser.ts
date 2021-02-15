import useSWR, { responseInterface } from 'swr';

type User = any;

export const useUser = (shouldFetch = true): responseInterface<User, Error> =>
  useSWR(shouldFetch ? `/api/users/current` : null);
