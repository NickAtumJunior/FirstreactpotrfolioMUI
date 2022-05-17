

import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';

function App() {



  return (
    <div className='dummy-main'>
      <Home/>
        <center><h1 className='sub-head-text' >Always Available For Freelance</h1></center>
       <About/>
       <center><h1 className='sub-head-text'>Always Provide <span>Free</span> Consultant For <span>Design</span></h1></center>
       <Services/>
       <Portfolio/>
       <Contact/>
     
    </div>
  );
}

export default App;
