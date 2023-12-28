import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../axiosInstance';

const useLeadershipList = (lan) => {
  const language = lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    'leadershipList',
    () =>
      axiosInstance.get(`/user/about-us/leadership`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('leadershipList'),
    },
  );

  return { data, isLoading };
};

export default useLeadershipList;
