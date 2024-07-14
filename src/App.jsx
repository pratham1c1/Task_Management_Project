import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/HomePage/Home'
import Header_test from '@components/Header/Header_test'
// import Header from '@components/Header'
// import Header_sample from '@components/Header_sample'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header_test/>
      <Home />
    </>
  )
}

export default App
