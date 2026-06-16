import React from 'react'

// import project component


import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

// define function component with type React.FC
const App: React.FC = () => {
  const message = "Design by SEstudio";

  //function component must be return render
  return( 
    <>
      <Header title='Welcome to React application'></Header>
      <Footer message={message}></Footer>
    </>
  )
}

export default App
