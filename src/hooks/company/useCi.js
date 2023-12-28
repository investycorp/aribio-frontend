import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../axiosInstance';

const useCi = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    'ci',
    () =>
      axiosInstance.get(`/user/ci`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('ci'),
    },
  );

  return { data, isLoading };
};

export default useCi;
