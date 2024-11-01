import { useEffect, useState } from 'react'
import './App.css'
import { Backroung, Hero, Navbar } from './Components/Components';
import { heroDatas } from "./Datas/Constants";

function App() {

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1
      })
    }, 3000)
  }, [])
  return (
    <div className='main-body'>
      <Backroung playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        datas={heroDatas}
        heroData={heroDatas[heroCount]}
      />
    </div>
  )
}

export default App
