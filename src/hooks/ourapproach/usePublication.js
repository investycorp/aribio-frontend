import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../axiosInstance';

const usePublicationList = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    'publicationList',
    () =>
      axiosInstance.get(`/user/publication`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('publicationList'),
    },
  );

  return { data, isLoading };
};

export default usePublicationList;
