import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const usePopup = (lan) => {
  const language = !lan || lan !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    'popupInfo',
    () =>
      axios.get(`https://api.aribio.boundary.team/user/main/pop-up`, {
        params: { language: language },
      }),
    {
      initialData: queryClient.getQueryData('popupInfo'),
    },
  );
  console.log('POPUP', data);

  return { data, isLoading, refetch };
};

export default usePopup;
