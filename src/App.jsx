import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import DeveloperProfile from './components/DeveloperProfile'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="container"><div className="trace-divider" /></div>
        <Skills />
        <Experience />
        <Projects />
        <div className="container"><div className="trace-divider" /></div>
        <Education />
        <Certifications />
        <Achievements />
        <DeveloperProfile />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
