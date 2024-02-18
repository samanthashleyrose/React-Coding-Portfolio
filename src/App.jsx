// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Title from './components/Title.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
    <Title />
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App;