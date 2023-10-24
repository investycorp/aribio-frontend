import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const useAdvisorList = (lan) => {
  const language = lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    'advisorList',
    () =>
      axios.get(`https://api.aribio.boundary.team/user/about-us/advisor`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('advisorList'),
    },
  );
  console.log(data);

  return { data, isLoading };
};

export default useAdvisorList;
