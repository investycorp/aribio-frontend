import {useQuery, useQueryClient} from 'react-query';
import axiosInstance from '../axiosInstance';

const useCareerDetail = id => {
  const queryClient = useQueryClient();
  const {data, isLoading, refetch} = useQuery(
    'careerDetailContent',
    () => axiosInstance.get(`/user/career/join-us/${id}`, {}),
    {
      initialData: queryClient.getQueryData('careerDetailContent'),
    },
  );

  return {data, isLoading, refetch};
};

export default useCareerDetail;
