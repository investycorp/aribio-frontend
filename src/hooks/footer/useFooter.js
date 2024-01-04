import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchFooter = language => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/company-information`, {
    params: {language: langParam},
  });
};

const useFooter = lan => {
  return useLanguageQuery('footerInfo', fetchFooter);
};

export default useFooter;
