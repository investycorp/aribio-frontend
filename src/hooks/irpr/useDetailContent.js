import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const useDetailContent = (page, lan, id) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const pageName = page === 'notice' ? 'notice' : 'press-release';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'irprDetailContent',
    () => axios.get(`https://api.aribio.boundary.team/user/${pageName}/${id}`),
    {
      initialData: queryClient.getQueryData('irprDetailContent'),
    },
  );
  //params: { language: language },

  return { data, isLoading, refetch };
};

export default useDetailContent;
