import * as React from 'react';
import "../css/dashboard.css";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Components
import DashStat from "../components/dash-stat";
import ListParticipant from "../components/liste-participants";

//import DashboardIcon from '@mui/icons-material/Dashboard';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import CheckCircleIcon from '@mui/icons-material/CheckCircle';
//import SearchIcon from '@mui/icons-material/Search';
import {
  DashboardLayout,
  ThemeSwitcher,
  type SidebarFooterProps,
} from '@toolpad/core/DashboardLayout';
import { createTheme } from '@mui/material/styles';

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
});

function DemoPageContent() {
  return (
    <Box
      sx={{
        py: 4,
        pb: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor : '#f6f8f9',
        fontFamily : 'Open Sans',
      }}
    >
      <Grid container sx={{ mb: 4 , marginLeft: "20px", marginRight : "20px", backgroundImage : 'url(/app/images/back2.png)'  }} className='grid-container  px-4 mx-10 items-center justify-between'>   
       
       <Grid size={8}>
       <Stack direction="row" spacing={2} sx={{ mb: 4 }} className='items-center justify-between'>
            <Typography variant='h4'> Hello Zaza !</Typography>
          
        </Stack>
        </Grid>
        <Grid size={4}>
        <Stack direction="row" spacing={2} sx={{ mb: 4 }} className='items-center justify-between'>
        <div className="suggestion flex items-center justify-center">
                <img src="/app/images/portfolio.png" alt="" width='80px' />
                <div className="notes">
                    <h1 className='text-2xl font-bold' style={{fontSize : "14px", fontFamily : 'Open Sans'}}>Suggestion 1/4</h1>
                    <p className='label-simple' style={{fontSize : "14px"}}>Pour une meilleure présentation de votre offre, personnalisez en mieux les informations importantes de votre annonce.</p>
                </div>
            </div>
          </Stack>
        </Grid>
       
         

      </Grid>


    </Box>
  );
}

const DashboardPage: React.FC = () => {
  return (
    <>
      <DemoPageContent />
                   <DashStat />
                   <ListParticipant />
    </>
  );
};
export default DashboardPage;