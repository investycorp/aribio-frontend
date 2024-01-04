import axiosInstance from '../axiosInstance';
import useLanguageQuery from '../useLanguageQuery';

const fetchPipelineList = language => {
  const langParam = language !== 'KOR' ? 'ENGLISH' : 'KOREAN';
  return axiosInstance.get(`/user/pipeline`, {
    params: {language: langParam},
  });
};

const usePipelineList = lan => {
  return useLanguageQuery('pipelineList', fetchPipelineList);
};

export default usePipelineList;
