import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStyles } from '../components/styles/navigation'
import { Card } from '@mui/material';


export default function Navigation() {
  const { classes } = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const [alignment, setAlignment] = useState(location.pathname);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
    navigate(newAlignment);

  };

  const children = [
    <ToggleButton value="/" key="/">
      Главная
    </ToggleButton>,
    <ToggleButton value="/about" key="/about">
      Проекты
    </ToggleButton>,
        <ToggleButton value="/about" key="/about">
        Проекты
      </ToggleButton>,
          <ToggleButton value="/about" key="/about">
          Проекты
        </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Card className={classes.navigation}>
      <ToggleButtonGroup size="large" {...control} aria-label="Large sizes">
        {children}
      </ToggleButtonGroup>
    </Card>
  );
}