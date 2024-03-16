import './App.css';
import Home from './pages/Home';
import React from 'react';
import {
  Route ,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Layout from './components/Layout';
import Services from './pages/Services';
import About from './pages/About';
import Login from './pages/Login';
import News from './pages/NewGrid';
import { ChakraProvider } from '@chakra-ui/react'
import NewGrid from './pages/NewGrid';
import Crop from './pages/Crop';
import Soil from './pages/Soil';
import ModernTech from './pages/ModernTech';


function App() {
  
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="services" element={<Services />} />
       <Route path="crop" element={<Crop />} />
       <Route path="soil" element={<Soil />} />
       <Route path="about" element={<About />} />
       <Route path="moderntech" element={<ModernTech />} />
       <Route path="news" element={<NewGrid />} />
       <Route path="login" element={<Login />} />
       <Route path="blog" element={<News />} />
  </Route>
));
  return (
    <div>
      <ChakraProvider>
       <RouterProvider router={router} />
      </ChakraProvider>
    </div>
  );
}

export default App;
