import { Divider, Paragraph } from '@UG/libs/components';
import { useMajors } from './useEctsSubjects';
import {
  Box,
  Paper,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { Theme } from '@emotion/react';

const tableBoxStyles: SxProps<Theme> = { display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center' };
const boxStyles: SxProps<Theme> = { display: 'flex', flexDirection: 'column', gap: 5 };

export const EctsSubjects = () => {
  const { ectsSubjectsList, major, speciality, yearText } = useMajors();
  const theme = useTheme();

  const majorsTiles = ectsSubjectsList?.subjectsByYearAndTerm.map((subjectsYear, index) => (
    <Box sx={tableBoxStyles} key={index}>
      <Paragraph>
        {subjectsYear.year} Rok - {subjectsYear.term} semestr
      </Paragraph>
      <TableContainer key={index} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={theme => ({
              backgroundColor: theme.palette.background.paper,
            })}
          >
            <TableRow>
              <TableCell>Przedmiot</TableCell>
              <TableCell align="center">Wykład</TableCell>
              <TableCell align="center">Ćw.Aud.</TableCell>
              <TableCell align="center">Ćw.lab.</TableCell>
              <TableCell align="center">Razem</TableCell>
              <TableCell align="center">For.zal.</TableCell>
              <TableCell align="center">ECTS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={theme => ({ backgroundColor: theme.palette.primary.light })}>
            {subjectsYear?.subjects.map(ectsSubject => (
              <TableRow key={ectsSubject.subject} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {ectsSubject.subject}
                </TableCell>
                <TableCell align="center">{ectsSubject.lectureHours}</TableCell>
                <TableCell align="center">{ectsSubject.recitationHours}</TableCell>
                <TableCell align="center">{ectsSubject.labsHours}</TableCell>
                <TableCell align="center">{ectsSubject.recitationHours + ectsSubject.lectureHours}</TableCell>
                <TableCell align="center">{ectsSubject.pass}</TableCell>
                <TableCell align="center">{ectsSubject.ects}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  ));

  return (
    <Box sx={boxStyles}>
      <Box maxWidth={810}>
        <Paragraph>{speciality || major}</Paragraph>
        <Divider styled={{ marginBottom: 1 }} />
        <Paragraph color={theme.palette.primary.main} fontSize={18}>
          {yearText}
        </Paragraph>
      </Box>
      {majorsTiles}
    </Box>
  );
};
