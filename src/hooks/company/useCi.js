import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const useCi = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    'ci',
    () =>
      axios.get(`https://api.aribio.boundary.team/user/ci`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('ci'),
    },
  );

  return { data, isLoading };
};

export default useCi;
