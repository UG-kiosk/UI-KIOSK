import { Major } from '@UG/libs/types';
import { useTranslation } from 'react-i18next';

interface MajorDetailsInfoProps {
  major: Major;
}

export const MajorDetailsInfo = ({ major }: MajorDetailsInfoProps) => {
  const { t } = useTranslation();

  if (!major.content) {
    return <p>{t('noResults')}</p>;
  }

  return <div dangerouslySetInnerHTML={{ __html: major.content }}></div>;
};
