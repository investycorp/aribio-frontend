import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../axiosInstance';

const useFooter = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'footerInfo',
    () =>
      axiosInstance.get(`/user/company-information`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('footerInfo'),
    },
  );

  return { data, isLoading, refetch };
};

export default useFooter;
