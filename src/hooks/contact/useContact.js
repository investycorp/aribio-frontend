import {useMutation, useQueryClient} from 'react-query';
import Language from '../../atom/Language';
import {useRecoilValue} from 'recoil';
import axiosInstance from '../axiosInstance';

const useContact = contactData => {
  const language = useRecoilValue(Language);
  const queryClient = useQueryClient();
  const variable = {
    ...contactData,
    language: language === 'ENG' ? 'ENGLISH' : 'KOREAN',
  };

  const postContactData = async () => {
    const {data} = await axiosInstance.post(`/user/contact-us`, variable);
    return data;
  };

  const {mutate, data, isSuccess, isError, isLoading} = useMutation(postContactData, {
    onSuccess: () => {
      queryClient.invalidateQueries('contact');
    },
  });

  return {mutate, data, isSuccess, isError, isLoading};
};

export default useContact;
