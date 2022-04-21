import Features from './components/Features';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sections from './components/Sections';
import Stories from './components/Stories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sections />
      <Stories />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
