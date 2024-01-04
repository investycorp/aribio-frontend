import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchPublicationList = language => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/publication`, {
    params: {language: langParam},
  });
};

const usePublicationList = lan => {
  return useLanguageQuery('publicationList', fetchPublicationList);
};

export default usePublicationList;
