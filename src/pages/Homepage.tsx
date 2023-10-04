import { Box, Card, Typography } from "@mui/material"
import img from '../assets/myPhoto.jpg'
import { useStyles } from '../pages/styles/homepage'
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Work from "../components/Work";
import Achievement from "../components/Achievement";

const projects = [
  {title: 'new', discription: 'new prioddaskda'},
  {title: 'new', discription: 'new prioddaskda'},
  {title: 'new', discription: 'new prioddaskda'},
  {title: 'new', discription: 'new prioddaskda'},
]

export const Homepage = () => {
  const { classes } = useStyles();

  return (
  <>
  <Box className={classes.header}>

    <Box className={classes.headerText}>
      <Typography variant="h3" fontWeight="bold">Frontend developer Дарья Брусницына</Typography>
      <Typography mt={3} mb={3} variant="subtitle1" color='text.secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatum reprehenderit et accusamus laboriosam, modi quam ipsa? Perferendis expedita dolores, magnam laudantium facilis quidem dolor cum voluptatem doloremque, aliquam rerum!</Typography>
      <Box className={classes.socials}>
        <TelegramIcon/>
        <EmailIcon/>
        <GitHubIcon/>
        <LinkedInIcon/>
      </Box>
    </Box>
    <img className={classes.img} src={img} alt="react" />
  </Box>

  <Box className={classes.projects}>
    <Typography variant="h5" fontWeight="bold">Примеры проектов</Typography>


    <Box className={classes.projectsWrapper}>

      {projects.map(p => <Card className={classes.projectCard}>{p.title}</Card>)}


    </Box>
  </Box>

  <Box className={classes.projects} >
    <Typography variant="h5" fontWeight="bold">Опыт работы и достижения</Typography>


    <Box className={classes.projectsWrapper}>
      <Work/>
      <Achievement />
    </Box>
  </Box>


  </>


  )
}