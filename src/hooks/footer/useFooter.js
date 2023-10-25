import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const useFooter = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'footerInfo',
    () =>
      axios.get(`https://api.aribio.boundary.team/user/company-information`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('footerInfo'),
    },
  );

  return { data, isLoading, refetch };
};

export default useFooter;
