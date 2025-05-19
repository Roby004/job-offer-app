import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import NavbarCli from "../components/navbar-cli";
import {
  Modal,
  Box,
  Typography,
  Button,
  Stack,
  Grid,
} from '@mui/material';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};


const jobs = [
  {
    id: 1,
    title: 'React Developer Needed',
    description: 'We are seeking an experienced React developer...',
    company: 'Tech Solutions Inc.',
    requirements: [
      '3+ years experience in React',
      'Strong understanding of RESTful APIs',
      'Experience with Tailwind CSS',
    ],
    profile: 'Intermediate',
    budget: 300,
  },
  {
    id: 2,
    title: 'UI/UX Designer for Mobile App',
    description: 'Join our team to design a modern UI for a job app...',
    company: 'Designify',
    requirements: [
      'Experience in mobile UX design',
      'Portfolio of past projects',
      'Familiarity with Figma',
    ],
    profile: 'Entry',
    budget: 150,
  },
];

const JobDetailsPage = () => {
     const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

    const handleOpen = () => setOpen(true);
  const handleProceed = () => {
    setOpen(false);
    navigate('/employe/test');
  };

  const job = jobs.find((j) => j.id === parseInt(id ?? ""));

  if (!job) return <div className="p-8">Job not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-6 pt-2" style={{ fontFamily: 'Open Sans', marginTop: "0px" }}>
        <NavbarCli />
                  <Link to="/" className="max-w-4xl mx-50 p-6 mt-6 text-green-600 hover:underline my-4">&larr; Retour aux offres </Link>

            <div className="max-w-4xl mx-auto p-6 mt-6 font-sans text-gray-800 bg-white rounded-lg shadow-md flex flex-row">
        <div className="lside ml-10" style={{ width: '70%' , minWidth: '50%'}}>

             <h1 className="text-2xl font-bold text-green-700">{job.title}</h1>
        <p className="text-sm text-gray-600 mt-1">Company: {job.company}</p>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Job Description</h2>
          <p className="text-gray-700 mt-2">{job.description}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Requirements</h2>
          <ul className="list-disc ml-5 text-gray-700 mt-2">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Profile: {job.profile} | Budget: ${job.budget}
        </div>
          <Button variant="contained"  onClick={handleOpen} className="mt-8" sx={{marginTop: '20px', backgroundColor: '#0a8051', color: 'white', '&:hover': { backgroundColor: '#45a049' } }}>
        Postuler
      </Button>
        </div>
        <div id="rside">
            <Stack spacing={2} className="bg-white p-4 rounded shadow-md">
                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , backgroundColor: '#f6f8f9', padding: '20px', borderRadius: '10px' }}>
                    <h2 className="text-lg font-semibold">Matching</h2>
                    <p className="text-gray-700 mt-2">cet offre, correspond à votre profil de : </p>
                    <p className="text-gray-700 mt-2"> 60%</p>
                  
                </Grid>
                <h2 className="text-lg font-semibold">Similar Jobs</h2>
                <ul className="list-disc ml-5 text-gray-700 mt-2">
                    {jobs
                    .filter((j) => j.id !== job.id)
                    .slice(0, 3)
                    .map((similarJob) => (
                        <li key={similarJob.id}>
                        <Link to={`/employe/jobDetail/${similarJob.id}`} className="text-blue-600 hover:underline">
                            {similarJob.title}
                        </Link>
                        </li>
                    ))}
                </ul>
            </Stack>
        </div>
       

     

     
      </div>

       <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-title">
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
            Vous devez effectuer un test pour pouvoir postuler
          </Typography>
          <Button
            onClick={handleProceed}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Procéder
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default JobDetailsPage;
