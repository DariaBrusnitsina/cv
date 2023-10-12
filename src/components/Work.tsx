import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useStyles } from './styles/work';

const work = [
  {
    name: 'Paralap',
    start: 'сентябрь 2023',
    end: 'настоящее время',
    total: calculateWorkDuration('сентябрь 2023', 'настоящее время'),
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    name: 'GoodWork',
    start: 'август 2022',
    end: 'июль 2023',
    total: calculateWorkDuration('август 2022 ', 'июль 2023'),
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
];

function calculateWorkDuration(startDateStr: string, endDateStr: string) {
  const startDateParts = startDateStr.split(' ');
  const endDateParts = endDateStr.split(' ');

  const startDate = new Date(Number(startDateParts[1]), getMonthNumber(startDateParts[0]), 1);
  let endDate

  if (endDateStr === "настоящее время") {
    endDate = new Date();
  } else {
    endDate = new Date(Number(endDateParts[1]), getMonthNumber(endDateParts[0]), 1);

  }

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
      years--;
      months += 12;
  }

  return years* 12 + months + 1;
}

function getMonthNumber(monthStr: string) {
  const months = [
      'январь', 'февраль', 'март', 'апрель',
      'май', 'июнь', 'июль', 'август',
      'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
  ];
  return months.indexOf(monthStr.toLowerCase());
}


function getTotalYears(months: number) {
  let totalYears = Math.floor(months/12)
  let totalMonths = months - totalYears*12




  let result = `${totalYears} ${totalMonths}`


  return result

}


export default function Work() {
  const { classes } = useStyles();
  let totalS = work.reduce((sum, w) => sum += w.total, 0)
  console.log(totalS)



  return (
    <Box maxWidth="400px" className={classes.work}>
      <Box sx={{display: 'flex', alignItems: 'center', columnGap: '15px', color: 'gray'}} mb={2}>
      <BusinessCenterIcon/>
      <Typography variant='subtitle1'> Опыт работы{}</Typography>
      <Typography variant='subtitle1'>{getTotalYears(totalS)}</Typography>

      </Box>


      {work.map((w) =>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"

          >
            <Box className={classes.accordionSummary}>
              <Typography variant="subtitle1">{w.name}</Typography>
              <Typography variant="subtitle2" color="text.secondary">{w.start} – {w.end}</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {w.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
    )}


  </Box>
  );
}
