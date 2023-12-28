import {useQuery, useQueryClient} from 'react-query';
import axiosInstance from '../axiosInstance';

const useAdvisorList = lan => {
  const language = lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const {data, isLoading} = useQuery(
    'advisorList',
    () =>
      axiosInstance.get(`/user/about-us/advisor`, {
        params: {language: language},
      }),
    {
      initialData: queryClient.getQueryData('advisorList'),
    },
  );

  return {data, isLoading};
};

export default useAdvisorList;
