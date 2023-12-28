import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../axiosInstance';

const useLinkList = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'linkList',
    () =>
      axiosInstance.get(`/user/link`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('linkList'),
    },
  );

  return { data, isLoading, refetch };
};

export default useLinkList;
