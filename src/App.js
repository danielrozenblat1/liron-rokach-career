
import './App.css';
import ByMe from './components/ByMe/ByMe';
import ContactForm from './components/form/Form';
import AboutMe from './components/me/Me';
import SyllabusComponent from './components/silabusss/Silabus';
import NavBarNew from './CourseNav/NavBarNew';
import HeroSection from './screens/FirstScreen';
import ForthScreen from './screens/ForthScreen';
import SecondScreen from './screens/SecondScreen';
import SixthScreen from './screens/SixthScreen';
import ThirdScreen from './screens/ThirdScreen';

function App() {
  return <>
  <NavBarNew/>
  <HeroSection/>
  <SecondScreen/>
  <ThirdScreen/>
  <AboutMe/>
 <ForthScreen/>
 <SixthScreen/>
 <ByMe/>
  </>
}

export default App;
