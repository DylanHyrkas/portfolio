import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2">About Me</Typography>
      <Typography variant="body1">
        I’m a passionate developer who enjoys writing about programming, technology, and more.
      </Typography>
      {/* Add additional sections about your background, skills, etc. */}
    </Container>
  );
};

export default AboutPage;
