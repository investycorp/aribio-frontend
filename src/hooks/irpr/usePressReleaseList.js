import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchPressReleaseList = (keyWord, language, pageNumber) => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/press-release`, {
    params: {keyword: keyWord, language: langParam, pageNo: pageNumber},
  });
};

const usePressReleaseList = (keyWord, language, pageNumber) => {
  return useLanguageQuery('pressList', fetchPressReleaseList, [keyWord, language, pageNumber]);
};

export default usePressReleaseList;
