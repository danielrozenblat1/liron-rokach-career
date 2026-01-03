
import './App.css';
import ByMe from './components/ByMe/ByMe';
import ContactForm from './components/form/Form';
import AboutMe from './components/me/Me';
import PrivacyPolicy from './components/privacy/Privacy';
import SyllabusComponent from './components/silabusss/Silabus';
import NavBarNew from './CourseNav/NavBarNew';
import HeroSection from './screens/FirstScreen';
import ForthScreen from './screens/ForthScreen';
import SecondScreenNew from './screens/NewSecondScreen';
import SecondScreen from './screens/SecondScreen';
import SixthScreen from './screens/SixthScreen';
import ThirdScreen from './screens/ThirdScreen';

function App() {
  return <>
  <NavBarNew/>
  <HeroSection/>
  <SecondScreenNew/>
  {/* <ThirdScreen/> */}
  <AboutMe/>
 <ForthScreen/>
 <SixthScreen/>
       <PrivacyPolicy
                ownerName="לירון רוקח"
                email="Liron8915@gmail.com"
                phone="+972 50-670-4555"
                domain="https://lironrokach-career.co.il/"
              />
 <ByMe/>
  </>
}

export default App;
