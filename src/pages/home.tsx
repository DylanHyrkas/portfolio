import React from 'react';
import { Container, Typography } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2">Welcome to My Blog</Typography>
      <Typography variant="body1">
        This is the homepage of my personal blog. Here, you can find the latest posts and updates.
      </Typography>
    </Container>
  );
};

export default HomePage;
