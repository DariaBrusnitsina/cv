import Box from '@mui/material/Box';
import { useStyles } from './styles/footer';

export default function Footer() {
  const { classes } = useStyles();


  return (
    <footer className={classes.footer}>
      <Box className={classes.footerNav}>
        <p>Главная</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </Box>
    </footer>

  );
}