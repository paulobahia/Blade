import { http } from "@/config/axios";
import { useQuery } from '@tanstack/react-query';

export async function getHandlers(): Promise<IHandler[]> {
  const response = await http.get('/handlers').then((i) => i.data);
  return response
}

export const useHandlers = () =>
  useQuery({
    queryKey: ["handlers"],
    queryFn: () => getHandlers(),
    initialData: [],
  })