import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchPartnerList = language => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/partner`, {
    params: {language: langParam},
  });
};

const useParnerList = lan => {
  return useLanguageQuery('parnerList', fetchPartnerList);
};

export default useParnerList;
