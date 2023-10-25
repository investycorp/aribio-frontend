import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import Language from '../../atom/Language';
import { useRecoilState } from 'recoil';

const useContact = (contactData) => {
  const [language, setLanguage] = useRecoilState(Language);
  const queryClient = useQueryClient();
  const variable = {
    ...contactData,
    language: 'ENGLISH',
  };

  const postContactData = async () => {
    const { data } = await axios.post(`https://api.aribio.boundary.team/user/contact-us`, variable);
    return data;
  };

  const { mutate, data, isSuccess, isError, isLoading } = useMutation(postContactData, {
    onSuccess: () => {
      queryClient.invalidateQueries('contact');
      console.log('success:', data);
    },
  });

  return { mutate, data, isSuccess, isError, isLoading };
};

export default useContact;
