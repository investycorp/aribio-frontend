import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../axiosInstance';

const usePipelineList = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    'pipelineList',
    () =>
      axiosInstance.get(`/user/pipeline`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('pipelineList'),
    },
  );

  return { data, isLoading };
};

export default usePipelineList;
