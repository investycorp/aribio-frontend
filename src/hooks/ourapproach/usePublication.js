import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const usePublicationList = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    'publicationList',
    () =>
      axios.get(`https://api.aribio.boundary.team/user/publication`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('publicationList'),
    },
  );

  return { data, isLoading };
};

export default usePublicationList;
