import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchLinkList = language => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/link`, {
    params: {language: langParam},
  });
};

const useLinkList = lan => {
  return useLanguageQuery('linkList', fetchLinkList);
};

export default useLinkList;
