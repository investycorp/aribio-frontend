import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../axiosInstance';

const usePressHomeList = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'pressHomeList',
    () =>
      axiosInstance.get(`/user/main/pressRelease`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('pressHomeList'),
    },
  );

  return { data, isLoading, refetch };
};

export default usePressHomeList;
