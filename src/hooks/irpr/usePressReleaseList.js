import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../axiosInstance';

const usePressReleaseList = (keyWord, lan, pageNumber) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'pressreleaseList',
    () =>
      axiosInstance.get(`/user/press-release`, {
        params: { keyword: keyWord, language: language, pageNo: pageNumber },
      }),
    {
      initialData: queryClient.getQueryData('pressreleaseList'),
    },
  );

  return { data, isLoading, refetch };
};

export default usePressReleaseList;
