import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../axiosInstance';

const usePopup = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'popupInfo',
    () =>
      axiosInstance.get(`/user/main/pop-up`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('popupInfo'),
    },
  );

  return { data, isLoading, refetch };
};

export default usePopup;
