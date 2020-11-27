import './App.scss';
import Header from './components/Header/Header';
import About from './components/About/About';
import Grid from './components/Grid/Grid';
import How from './components/How/How';
import Cities from './components/Cities/Cities';
import Testimonials from './components/Testimonials/Testimonials';
import Signup from './components/Signup/Signup';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Grid />
      <How />
      <Cities />
      <Testimonials />
      <Signup />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
