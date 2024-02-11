import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import App from './App'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Error from './pages/Error';

import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );  