import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const useLeadershipList = (lan) => {
  const language = lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    'leadershipList',
    () =>
      axios.get(`https://api.aribio.boundary.team/user/about-us/leadership`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('leadershipList'),
    },
  );

  return { data, isLoading };
};

export default useLeadershipList;
