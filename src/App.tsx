// import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
// import { useState } from 'react'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Container className='mb-4'>
      <h1>SHOPPING CART</h1> 
        <Routes>
          <Route path = '/' element = {<Home />}></Route>
          <Route path = '/store' element = {<Store />}></Route>
          <Route path = '/about' element = {<About />}></Route>
        </Routes>
      </Container>
    </>
    
  )
}

export default App
