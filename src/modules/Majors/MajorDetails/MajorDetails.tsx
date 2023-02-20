import { Major } from '@UG/libs/types';
import { useMemo } from 'react';
import { usePrepareMajorDetails } from '../hooks';

interface MajorDetailsProps {
  major: Major;
}

export const MajorDetails = ({ major }: MajorDetailsProps) => {
  const { prepareMajorDetails } = usePrepareMajorDetails();

  const majorDetails = useMemo(() => prepareMajorDetails(major.content), [major.content, prepareMajorDetails]);

  return <>{majorDetails}</>;
};
