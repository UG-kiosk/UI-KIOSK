import { Major } from '@UG/libs/types';
import { useMemo } from 'react';
import { usePrepareMajorDetails } from '../hooks';

interface MajorDetailsInfoProps {
  major: Major;
}

export const MajorDetailsInfo = ({ major }: MajorDetailsInfoProps) => {
  const { prepareMajorDetails } = usePrepareMajorDetails();

  const majorDetails = useMemo(() => prepareMajorDetails(major.content), [major.content, prepareMajorDetails]);

  return <>{majorDetails}</>;
};
