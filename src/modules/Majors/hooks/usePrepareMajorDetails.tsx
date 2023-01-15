import { MajorContent } from '@UG/libs/types';
import { styled } from '@mui/material/styles';
import { useCallback } from 'react';
import { Typography } from '@mui/material';

const StyledSubHeader = styled(Typography, { shouldForwardProp: prop => prop !== 'key' })<{ key: number }>`
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-top: 30px;
  margin-bottom: 20px;
`;

const StyledParagraph = styled(Typography, { shouldForwardProp: prop => prop !== 'key' })<{ key: number }>`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: justified;
`;

const StyledOrderedList = styled('ol', { shouldForwardProp: prop => prop !== 'key' })<{ key: number }>`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: justified;
`;

const StyledUnorderedList = styled('ul', { shouldForwardProp: prop => prop !== 'key' })<{ key: number }>`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: justified;
`;

export const usePrepareMajorDetails = () => {
  const prepareMajorDetails = useCallback((majorDetails: MajorContent[]): JSX.Element[] => {
    return majorDetails.map(({ element, text }, index) => {
      if (element === 'h2') {
        return <StyledSubHeader key={index}>{text}</StyledSubHeader>;
      }

      if (element === 'p') {
        return <StyledParagraph key={index}>{text}</StyledParagraph>;
      }

      if (element === 'ol') {
        return <StyledOrderedList key={index} dangerouslySetInnerHTML={{ __html: text }}></StyledOrderedList>;
      }

      if (element === 'ul') {
        return <StyledUnorderedList key={index} dangerouslySetInnerHTML={{ __html: text }}></StyledUnorderedList>;
      }

      if (text.startsWith('<')) {
        return <div key={index} dangerouslySetInnerHTML={{ __html: text }}></div>;
      }

      // TODO <a> tag

      return <StyledParagraph key={index}>{text}</StyledParagraph>;
    });
  }, []);

  return { prepareMajorDetails };
};
