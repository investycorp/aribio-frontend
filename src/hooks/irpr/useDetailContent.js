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
      onError: (error) => {
        window.alert('Something went wrong. Please try again.');
        window.location.href = `/irpr/${page}`;
      },
      retry: 1,
    },
  );
  //params: { language: language },
  console.log('irprDetailContent data', data);

  return { data, isLoading, refetch };
};

export default useDetailContent;
