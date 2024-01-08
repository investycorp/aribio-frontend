import {useQuery, useQueryClient} from 'react-query';
import axiosInstance from '../axiosInstance';

const useDetailContent = (page, lan, id) => {
  const pageName = page === 'notice' ? 'notice' : 'press-release';
  const queryClient = useQueryClient();
  const {data, isLoading, refetch} = useQuery('irprDetailContent', () => axiosInstance.get(`/user/${pageName}/${id}`), {
    initialData: queryClient.getQueryData('irprDetailContent'),
    onError: error => {
      window.alert('Something went wrong. Please try again.');
      window.location.href = `/irpr/${page}`;
    },
    retry: 1,
  });

  return {data, isLoading, refetch};
};

export default useDetailContent;
