import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchNoticeList = (keyWord, language, pageNumber) => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  const params = {
    ...(keyWord && {keyword: keyWord}), // keyword가 있을 때만 포함시킵니다.
    language: langParam,
    pageNo: pageNumber,
  };

  return axiosInstance.get(`/user/notice`, {
    params,
  });
};

const useNoticeList = (keyWord, language, pageNumber) => {
  return useLanguageQuery('noticeList', fetchNoticeList, [keyWord, language, pageNumber]);
};

export default useNoticeList;
