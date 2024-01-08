import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchPressReleaseList = (keyWord, language, pageNumber) => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const params = {
    ...(keyWord && {keyword: keyWord}), // keyword가 있을 때만 포함시킵니다.
    language: langParam,
    pageNo: pageNumber,
  };

  return axiosInstance.get(`/user/press-release`, {
    params,
  });
};

const usePressReleaseList = (keyWord, language, pageNumber) => {
  return useLanguageQuery('pressList', fetchPressReleaseList, [keyWord, language, pageNumber]);
};

export default usePressReleaseList;
