import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Newspapers from './components/Newspapers'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Newspapers />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
