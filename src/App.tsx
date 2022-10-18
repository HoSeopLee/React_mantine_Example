import React from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';
import Router from '@layouts/router/Router';

function App() {
  return (
    <MantineProvider>
      <Router />
    </MantineProvider>
  );
}

export default App;
