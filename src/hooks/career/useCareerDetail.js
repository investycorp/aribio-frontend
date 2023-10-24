import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const useCareerDetail = (lan, id) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'careerDetailContent',
    () => axios.get(`https://api.aribio.boundary.team/user/career/join-us/${id}`),
    {
      initialData: queryClient.getQueryData('careerDetailContent'),
    },
  );
  //params: { language: language },

  return { data, isLoading, refetch };
};

export default useCareerDetail;
