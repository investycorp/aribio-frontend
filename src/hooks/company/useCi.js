import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchCi = language => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/ci`, {
    params: {language: langParam},
  });
};

const useCi = () => {
  return useLanguageQuery('ci', fetchCi);
};

export default useCi;
