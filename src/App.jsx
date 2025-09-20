import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light');

  return (
    <div className='bg-white relative'>
      <Navbar theme = {theme} setTheme = {setTheme}/>
    </div>
  )
}

export default App
