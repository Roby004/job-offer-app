// DashboardLayout.tsx
import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, Link, BrowserRouter } from 'react-router';
import {
  Box, CssBaseline, Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  AppBar, Toolbar, Typography, IconButton, Avatar, Menu, MenuItem, Tooltip, Stack
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import RuleRoundedIcon from '@mui/icons-material/RuleRounded';
import MenuIcon from '@mui/icons-material/Menu';
import LogoIcon from '../images/logo-icon.png';
import { useLocation } from 'react-router-dom';



const drawerWidth = 240;

const menuItems = [
  { text: 'Tableau de bord', path: '/recruteur/dashboard', icon: <HomeRoundedIcon /> },
  { text: 'Talent Matcher', path: '/recruteur/talent_matcher', icon: <RuleRoundedIcon /> },
  { text: 'Évaluation', path: '/recruteur/evaluation', icon: <RuleRoundedIcon /> },
];

export default function DashboardLayout() {
 const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);
  const handleProfilClick = () => {
   // navigate('/recruteur/profil');
    handleClose();
  };
  const handleLogout = () => {
   // navigate('/auth/signin');
    handleClose();
  };
  const location = useLocation();

  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Top App Bar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#fff', color: '#333' }}>
        <Toolbar>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ flexGrow: 1 }}>
            <img src={LogoIcon} alt="Logo" width="30px" height="30px" />
            <Typography variant="h6" noWrap>
              Key Predict
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Tooltip title="Mes sociétés">
              <IconButton color="inherit">
                <Typography variant="body2">Mes sociétés</Typography>
              </IconButton>
            </Tooltip>

            <Avatar src="/app/images/avatar1.png" sx={{ cursor: 'pointer' }} onClick={handleAvatarClick} />

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem >
               <Link to={'/recruteur/profil'} style={{ textDecoration: 'none', color: '#333' }}>
               Profil
              </Link> </MenuItem>
              <MenuItem onClick={handleLogout}>
              <Link to={'/auth/signin'} style={{ textDecoration: 'none', color: '#333' }}>
                <Typography variant="body2">Déconnexion</Typography>
              </Link>
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <nav>
  <Drawer variant="permanent" sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#f4f4f4',
        },
      }}>
        <Toolbar />
        <List>
          {menuItems.map(({ text, path, icon }) => (
            <NavLink
              to={path}
              key={path}
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? '#1976d2' : '#333'
              })}
            >
              <ListItemButton selected={location.pathname === path}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </NavLink>
          ))}
        </List>
      </Drawer>
      </nav>
    

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f6f8f9', minHeight: '100vh' }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
