import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../axiosInstance';

const useHistoryList = (lan) => {
  const language = lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    'historyList',
    () =>
      axiosInstance.get(`/user/history`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('historyList'),
    },
  );

  return { data, isLoading };
};

export default useHistoryList;
