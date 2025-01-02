import { Navbar } from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Section2 } from './Components/Section2';
import { Section3 } from './Components/Section3';
import { Section4 } from './Components/Section4';
import { Section5 } from './Components/Section5';
import { Contact } from './Components/Contact';

function App() {

  return (
    <>
      <Navbar />
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Contact/>
    </>
  )
}

export default App
