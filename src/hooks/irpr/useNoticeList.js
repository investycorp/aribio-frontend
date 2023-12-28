import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../axiosInstance';

const useNoticeList = (keyWord, lan, pageNumber) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'noticeList',
    () =>
      axiosInstance.get(`/user/notice`, {
        params: { keyword: keyWord, language: language, pageNo: pageNumber },
      }),
    {
      initialData: queryClient.getQueryData('noticeList'),
    },
  );

  return { data, isLoading, refetch };
};

export default useNoticeList;
