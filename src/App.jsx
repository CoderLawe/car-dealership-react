import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardSection from './components/CardSection'
import CarCardsMain from './components/CarCardsMain'
import Newsletter from './components/Newsletter'


function App() {
  const [count, setCount] = useState(0)

  // How to add routes to different pages in react using the browser router??
  return (
    <>
      <div className="overflow-hidden">
          <Navbar/>
          <Hero />
          <CardSection />
          <CarCardsMain />
          <Newsletter />
      </div>
    </>
  )
}

export default App
