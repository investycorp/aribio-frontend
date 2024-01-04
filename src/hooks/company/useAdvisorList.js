import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchAdvisorList = language => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/about-us/advisor`, {
    params: {language: langParam},
  });
};

const useAdvisorList = () => {
  return useLanguageQuery('advisorList', fetchAdvisorList);
};

export default useAdvisorList;
