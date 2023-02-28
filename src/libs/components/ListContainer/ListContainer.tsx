import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface ListContainerProps {
  marginTop?: number;
  marginBottom?: number;
  width?: number;
  children: ReactNode[] | ReactNode;
}
const StyledListContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'marginTop' && prop !== 'marginBottom' && prop !== 'width',
})<ListContainerProps>`
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 150)}px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 150)}px;
  width: ${({ width }) => (width ? `${width}px` : '1080px')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ListContainer = ({ children, marginTop, marginBottom, width }: ListContainerProps) => {
  return (
    <StyledListContainer width={width} marginTop={marginTop} marginBottom={marginBottom} data-cy="list-container">
      {children}
    </StyledListContainer>
  );
};
