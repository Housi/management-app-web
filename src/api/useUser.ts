import useSWR from "swr";

type Response = unknown;

export const useUser = (): Response => useSWR(`/api/users/current`);
