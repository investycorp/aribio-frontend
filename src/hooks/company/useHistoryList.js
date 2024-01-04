import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchHistoryList = language => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/history`, {params: {language: langParam}});
};

const useHistoryList = () => {
  return useLanguageQuery('historyList', fetchHistoryList);
};

export default useHistoryList;
