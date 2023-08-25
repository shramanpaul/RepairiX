import { useMediaQuery } from '@chakra-ui/react';

export const useScreen = () => {
  const isXs = useMediaQuery('(max-width: 30em)');
  const isSm = useMediaQuery('(min-width: 30.0625em) and (max-width: 48em)');
  const isMd = useMediaQuery('(min-width: 48.0625em) and (max-width: 62em)');
  const isLg = useMediaQuery('(min-width: 62.0625em) and (max-width: 80em)');
  const isXl = useMediaQuery('(min-width: 80.0625em)'); 

  if (isXs) return 'xs';
  if (isSm) return 'sm';
  if (isMd) return 'md';
  if (isLg) return 'lg';
  if (isXl) return 'xl';

  return 'xs';
};
