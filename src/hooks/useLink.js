import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const useLinkList = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'linkList',
    () =>
      axios.get(`https://api.aribio.boundary.team/user/link`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('linkList'),
    },
  );

  return { data, isLoading, refetch };
};

export default useLinkList;
