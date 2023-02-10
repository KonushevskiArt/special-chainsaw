import React from 'react';
import i18next from 'i18next'

import Cookies from 'js-cookie'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useTranslation } from "react-i18next";

import Menu from '../Menu';


const Header = () => {
  const { t } = useTranslation();

  const [isShowMenu, setShowMenu] = React.useState(false);


  const currentLanguageCode = Cookies.get('i18next') || 'en'

  const [language, setLanguage] = React.useState(currentLanguageCode);

  const handleChange = (event) => {
    setLanguage(event.target.value);
    Cookies.set('i18next', event.target.value)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setShowMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h2>{t('Currency_list')}</h2>
          </Typography>
          <Box sx={{ minWidth: 120, position: 'absolute', top: '20px', right: '20px', color: 'inherit', border: 'inherit' }}>
            <FormControl fullWidth>
              <InputLabel sx={{color: 'inherit'}} id="demo-simple-select-label">{t("Language")}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label={t("Language")}
                onChange={handleChange}
                size='small'
                sx={{color: 'inherit', borderColor: 'white'}}
              >
                <MenuItem 
                  onClick={ () => i18next.changeLanguage('ru') }   
                  value='ru'>
                  {t('Ru')}
                </MenuItem>
                <MenuItem 
                  onClick={ () => i18next.changeLanguage('en') }   
                  value='en'>
                  {t('Eng')}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu isShowMenu = {isShowMenu} setShowMenu = {setShowMenu} />
    </Box>
  );
};

export default Header;