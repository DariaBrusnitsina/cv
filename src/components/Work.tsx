import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const steps = [
  {
    label: 'Paralap (сентябрь 2023 – настоящее время)',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
];

export default function Work() {

  return (
    <Box maxWidth="550px">
      <Typography variant='h5'>Опыт работы: </Typography>

      {steps.map((step) =>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{step.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {step.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
    )}


  </Box>
  );
}
