import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardSection from './components/CardSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
          <Navbar/>
          <Hero />
          <CardSection />
      </div>
    </>
  )
}

export default App
