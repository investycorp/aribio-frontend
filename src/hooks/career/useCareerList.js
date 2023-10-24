import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const useCareerList = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'careerList',
    () =>
      axios.get(`https://api.aribio.boundary.team/user/career/join-us`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('careerList'),
    },
  );

  return { data, isLoading, refetch };
};

export default useCareerList;
