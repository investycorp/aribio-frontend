import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const useHistoryList = (lan) => {
  const language = lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    'historyList',
    () =>
      axios.get(`https://api.aribio.boundary.team/user/history`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('historyList'),
    },
  );

  return { data, isLoading };
};

export default useHistoryList;
