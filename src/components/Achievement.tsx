import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

const steps = [
  {
    label: 'Участие в проекте SA lab «Игра „Жизнь“. Клеточные автоматы в искусстве, науке, архитектуре и играх»',
    description: `В ходе практических заданий были рассмотрены клеточные автоматы — математические модели, которые могут быть использованы для создания сложных и самоорганизующихся систем в различных областях науки и искусства, в том числе для творческих проектов, комплексных симуляций, трехмерных пространств, генерации уровней и поведения игровых персонажей. Итогом курса стала игра “Mushroom hunting" (см. CA game), представляющая собой интерактивный лес, созданный с использованием клеточных автоматов. `,
    link: 'https://salab.org/workshop_game_of_life',
    linkTitle: 'Страница итоговых проектов курса'
  },
  {
    label: 'Участие в Кокос Hackathon 2023',
    description:
      'В рамках проекта был разработан сервис для определения тематики веб-ресурса и автоматизации сбора информации о веб-сайтах клиентов и их конкурентах с целью улучшения стратегии продвижения. Моя роль в команде заключалась в разработке frontend-части приложения, где я создавала интерфейс для выполнения двух основных задач: определения тематики страниц сайта и сохранения информации о сайтах в таблицу для последующего получения подробных данных.',
    link: 'https://codenrock.com/users/53248/certificates/99',
    linkTitle: 'Сертификат участника'
  },
];

export default function Achievement() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 550 }}>
      <Typography variant='h5'>Достижения </Typography>

      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>

              {step.link && <Link target="_blank" href={step.link}>{step.linkTitle}</Link>}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}