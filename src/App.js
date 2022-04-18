import './App.css';
import Features from './components/Features';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';
import Stories from './components/Stories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Stories />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
