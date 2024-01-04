import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchLeadershipList = language => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/about-us/leadership`, {
    params: {language: langParam},
  });
};

const useLeadershipList = () => {
  return useLanguageQuery('leadershipList', fetchLeadershipList);
};

export default useLeadershipList;
