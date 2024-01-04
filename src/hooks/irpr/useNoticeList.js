import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchNoticeList = (keyWord, language, pageNumber) => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/notice`, {
    params: {keyword: keyWord, language: langParam, pageNo: pageNumber},
  });
};

const useNoticeList = (keyWord, language, pageNumber) => {
  return useLanguageQuery('noticeList', fetchNoticeList, [keyWord, language, pageNumber]);
};

export default useNoticeList;
