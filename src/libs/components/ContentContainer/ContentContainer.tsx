import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface ContentContainerProps {
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  width?: number;
  children: ReactNode[] | ReactNode;
}
const StyledContentContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'marginTop' && prop !== 'marginBottom' && prop !== 'width',
})<ContentContainerProps>`
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft} px` : 'auto')};
  margin-right: ${({ marginRight }) => (marginRight ? `${marginRight} px` : 'auto')};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 150)}px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 150)}px;
  width: ${({ width }) => (width ? `${width}px` : '1080px')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContentContainer = ({
  children,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  width,
}: ContentContainerProps) => {
  return (
    <StyledContentContainer
      width={width}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      data-cy="content-container"
    >
      {children}
    </StyledContentContainer>
  );
};
