import React from 'react'
import './index.css'
import PreHeader from './Components/PreHeader/PreHeader'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Companies from './Components/Companies/Companies'
import Benefits from './Components/Benefits/Benefits'
const App = () => {
  return (
    <>
      <PreHeader />
      <Header />
      <Hero />
      <Companies />
      <Benefits />
    </>
  )
}

export default App