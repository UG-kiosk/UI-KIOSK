import { Box, Theme } from '@mui/material';
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
})((props: ContentContainerProps & { theme: Theme }) => ({
  marginLeft: props.marginLeft ? `${props.marginLeft}px` : 'auto',
  marginRight: props.marginRight ? `${props.marginRight}px` : 'auto',
  marginTop: props.marginTop ? `${props.marginTop}px` : '150px',
  marginBottom: props.marginBottom ? `${props.marginBottom}px` : '180px',
  width: props.width ? `${props.width}px` : '1080px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

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
