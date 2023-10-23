import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const usePipelineList = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    'pipelineList',
    () =>
      axios.get(`https://api.aribio.boundary.team/user/pipeline`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('pipelineList'),
    },
  );

  return { data, isLoading };
};

export default usePipelineList;
