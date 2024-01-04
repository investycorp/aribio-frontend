import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchPressHomeList = language => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/main/pressRelease`, {
    params: {language: langParam},
  });
};

const usePressHomeList = lan => {
  return useLanguageQuery('pressHomeList', fetchPressHomeList);
};

export default usePressHomeList;
