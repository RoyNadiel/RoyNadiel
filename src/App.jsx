import CursorFollower from './components/CursorFollower.jsx';
import Header from './components/layout/Header.jsx';
import SocialBar from './components/layout/SocialBar';
import Hero from './components/layout/Hero';
import Projects from './components/layout/Projects';
import AboutMe from './components/layout/AboutMe';


function App() {

  return (
    <>
     <Header/>
     <SocialBar/>
     <Hero/>
     <Projects/>
     <AboutMe/>
     <CursorFollower/>
    </>
  )
}

export default App
