import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchCareerList = language => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/career/join-us`, {
    params: {language: langParam},
  });
};

const useCareerList = () => {
  return useLanguageQuery('careerList', fetchCareerList);
};

export default useCareerList;
