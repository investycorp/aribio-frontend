import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const usePressReleaseList = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    'pressreleaseList',
    () =>
      axios.get(`https://api.aribio.boundary.team/user/press-release`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('pressreleaseList'),
    },
  );

  return { data, isLoading };
};

export default usePressReleaseList;