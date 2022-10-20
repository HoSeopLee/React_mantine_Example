import React from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';
import Router from '@layouts/router/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Router />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
