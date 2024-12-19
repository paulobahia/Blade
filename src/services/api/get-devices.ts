import { http } from "@/config/axios";
import { useQuery } from '@tanstack/react-query';

export async function getDevices(): Promise<IDevice[]> {
  const response = await http.get('/devices').then((i) => i.data);
  return response
}

export const useDevices = () =>
  useQuery({
    queryKey: ["devices"],
    queryFn: () => getDevices(),
  })