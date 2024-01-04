import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchVideoHomeList = language => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/main/representative`, {
    params: {language: langParam},
  });
};

const useVideoHomeList = () => {
  return useLanguageQuery('videoHomeList', fetchVideoHomeList);
};

export default useVideoHomeList;
