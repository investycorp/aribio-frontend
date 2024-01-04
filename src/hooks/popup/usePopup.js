import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchPopup = language => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/main/pop-up`, {
    params: {language: langParam},
  });
};

const usePopup = lan => {
  return useLanguageQuery('popupInfo', fetchPopup);
};

export default usePopup;
