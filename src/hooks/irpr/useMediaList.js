import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const useMediaList = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'mediaList',
    () =>
      axios.get(`https://api.aribio.boundary.team/user/media-kit`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('mediaList'),
    },
  );

  return { data, isLoading, refetch };
};

export default useMediaList;
