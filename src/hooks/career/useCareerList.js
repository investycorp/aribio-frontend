import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../axiosInstance';

const useCareerList = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'careerList',
    () =>
      axiosInstance.get(`/user/career/join-us`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('careerList'),
    },
  );

  return { data, isLoading, refetch };
};

export default useCareerList;
