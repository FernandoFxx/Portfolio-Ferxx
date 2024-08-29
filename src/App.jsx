import AboutMe from "./components/AboutMe"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Footer from "./components/Footer"
import NavBar  from "./components/NavBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <AboutMe />
      <Skills />
      <Education/>
      <Projects />
      <Footer />
    </>
  )
}

export default App
