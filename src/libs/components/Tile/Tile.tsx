import { styled } from '@mui/material/styles';

interface TileProps {
  content?: string;
  tileWidth?: number;
  url?: string;
}

const StyledTile = styled('div', {
  shouldForwardProp: prop => prop !== 'tileWidth',
})<Pick<TileProps, 'tileWidth'>>`
  height: 560px;
  width: ${({ tileWidth }) => (tileWidth ? `${tileWidth}px` : '1695px')};
  border-radius: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

const StyledLink = styled('a')`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
`;

const StyledParagraph = styled('p')`
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
`;

export const Tile = ({ content, tileWidth, url }: TileProps) => (
  <StyledTile tileWidth={tileWidth}>
    {url ? <StyledLink href={url}>{content}</StyledLink> : <StyledParagraph>{content}</StyledParagraph>}
  </StyledTile>
);
