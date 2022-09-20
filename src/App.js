import Header from './header/Header';
import Section1 from './section1/Section1';
import Designs from './designs/Designs';
import People from './people/People';
import Brands from './brands/Brands';
import Projects from './projects/Projects';
import Stat from './statistics/Stat';
import Blogs from './blogs/Blogs';
import Footer from './footer/Footer';





// import Button from './hooks';
import './App.css';



function App() {
  return (
    <div className="App">

      <Header/>
      <Section1/>
      <Designs/>
      <People/>
      <Brands/>
      <Projects/>
      <Stat/>
      <Blogs/>
      <Footer/>
     
    </div>
  );
}

export default App;


