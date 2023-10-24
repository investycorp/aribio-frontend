import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const useParnerList = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'parnerList',
    () =>
      axios.get(`https://api.aribio.boundary.team/user/partner`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('parnerList'),
    },
  );

  return { data, isLoading, refetch };
};

export default useParnerList;
