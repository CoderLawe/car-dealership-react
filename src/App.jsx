import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardSection from './components/CardSection'
import CarCardsMain from './components/CarCardsMain'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
          <Navbar/>
          <Hero />
          <CardSection />
          <CarCardsMain />
      </div>
    </>
  )
}

export default App
