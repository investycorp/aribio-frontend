import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../axiosInstance';

const useMediaList = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'mediaList',
    () =>
      axiosInstance.get(`/user/media-kit`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('mediaList'),
    },
  );

  return { data, isLoading, refetch };
};

export default useMediaList;
