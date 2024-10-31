import { useEffect, useState } from 'react'
import './App.css'
import { Backroung, Hero, Navbar } from './Components/Components';

function App() {

  let heroDatas = [
    { text1: "Petit text en inftro", text2: "Un text pour monterer le style de texte" },
    { text1: "Petit text en inftro 2 du nom ", text2: "Un text pour monterer le style de texte 2 du nom " },
    { text1: "Petit text title du nom ", text2: "Un text pour monterer le style de content " },
  ]
  const [heroCount, setHeroCount] = useState(1);
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
        heroData={heroDatas[heroCount]}
      />
    </div>
  )
}

export default App
