import Layout from './Layout';
import Header from './components/layout/Header';
import SocialBar from './components/layout/SocialBar';
import Hero from './components/layout/Hero';
import Projects from './components/layout/Projects';
import AboutMe from './components/layout/AboutMe';


function App() {

  return (
    <>
     <Layout>
      <Header/>
      <SocialBar/>
      <Hero/>
      <Projects/>
      <AboutMe/>
     </Layout>
    </>
  )
}

export default App
