import {useQuery} from 'react-query';
import {useRecoilValue} from 'recoil';
import Language from '../atom/Language';

const useLanguageQuery = (queryKey, queryFn, queryArgs = [], config = {}) => {
  const language = useRecoilValue(Language);

  return useQuery([queryKey, language, ...queryArgs], () => queryFn(...queryArgs, language), config);
};

export default useLanguageQuery;
