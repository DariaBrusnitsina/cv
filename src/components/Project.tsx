import { Box, Card, Typography } from "@mui/material";
import { useStyles } from "./styles/project";
import LinkIcon from '@mui/icons-material/Link';
import CodeIcon from '@mui/icons-material/Code';

const technologies = [
  {name: 'TypeScript', url: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'},
  {name: 'React', url: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'},
  {name: 'ThreeJS', url: 'https://img.shields.io/badge/ThreeJs-black?style=for-the-badge&logo=three.js&logoColor=white'},
  {name: 'Redux', url: 'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white'},
  {name: 'MUI', url: 'https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white'},
]

interface Project {
  title: string;
  discription: string;
  techs: string[];
}

interface Props {
  project: Project;
}

export default function Project({project}: Props) {
  const { classes } = useStyles();

  return(
    <Card className={classes.projectCard}>
      <Box m={1.5}>
      <Typography variant='h5'>{project.title}</Typography>

      <Box className={classes.technologies}>
        {project.techs.map((name) => <img src={technologies.find(t => t.name === name)?.url} alt="" />)}
      </Box>

      <Typography my={2} color='text.secondary'>{project.discription}</Typography>

      <Box className={
        classes.link}>
      <LinkIcon/>
      <Typography variant='subtitle1' color='text.secondary'><a href="#">Посмотреть проект</a></Typography>
      </Box>

      <Box className={
        classes.link}>
      <CodeIcon/>
      <Typography variant='subtitle1' color='text.secondary'><a href="#">Посмотреть код</a></Typography>
      </Box>


      </Box>

    </Card>
  )
}