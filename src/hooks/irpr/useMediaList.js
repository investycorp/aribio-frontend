import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchMediaList = language => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/media-kit`, {
    params: {language: langParam},
  });
};

const useMediaList = lan => {
  return useLanguageQuery('mediaList', fetchMediaList);
};

export default useMediaList;
