import React from 'react'
import './index.css'
import PreHeader from './Components/PreHeader/PreHeader'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Companies from './Components/Companies/Companies'
const App = () => {
  return (
    <>
      <PreHeader />
      <Header />
      <Hero />
      <Companies />
    </>
  )
}

export default App