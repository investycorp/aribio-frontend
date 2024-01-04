import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchNoticeList = (keyWord, language, pageNumber) => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/notice`, {
    params: {keyword: keyWord, language: langParam, pageNo: pageNumber},
  });
};

const useNoticeList = () => {
  return useLanguageQuery('noticeList', fetchNoticeList);
};

export default useNoticeList;
