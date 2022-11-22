import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar_home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:"black"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
            Pokemon
          </Typography>
          <ButtonBase color="inherit">Sobre</ButtonBase>
        </Toolbar>
      </AppBar>
    </Box>
  );
}