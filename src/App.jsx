import { useState } from 'react'

import './App.css'
import ContactBanner from './ContactBanner'
import Nav from './Nav'
import Slider from './Slider'
import Search from './Search'

function App() {
  const [count, setCount] = useState("hdsj")

  return (
    <div>
        <ContactBanner />
        <Nav />
        <Slider />
        <Search />
    </div>
  )
}

export default App
