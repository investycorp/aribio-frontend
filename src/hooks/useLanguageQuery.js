import {useQuery} from 'react-query';
import {useRecoilValue} from 'recoil';
import Language from '../atom/Language';

const useLanguageQuery = (queryKey, queryFn, config = {}) => {
  const language = useRecoilValue(Language);

  return useQuery([queryKey, language], () => queryFn(language), config);
};

export default useLanguageQuery;
