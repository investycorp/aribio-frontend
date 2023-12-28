import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../axiosInstance';

const useParnerList = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'parnerList',
    () =>
      axiosInstance.get(`/user/partner`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('parnerList'),
    },
  );

  return { data, isLoading, refetch };
};

export default useParnerList;
