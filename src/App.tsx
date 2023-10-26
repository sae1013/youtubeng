import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import TopBar from '@/components/TopBar';
// import TopBar from './components/TopBar';
function App() {
  return (
    <Suspense>
      <TopBar></TopBar>
      <Outlet></Outlet>
    </Suspense>
  );
}

export default App;
