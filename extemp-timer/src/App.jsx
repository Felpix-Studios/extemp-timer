import { useState } from 'react'
import './App.css'

function Title() {
  return (
    <h1 className="text-center text-3xl font-bold">Extemp Timer</h1>
  )
}

function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000)
  return (
    <p className="text-center text-xl font-bold">{time}</p>
  )
}

function Speaker( {speaker} ) {
  
  return (
    <div >
      <h2 className="text-center text-2xl font-bold">Name: </h2>
      <p className="text-left text-xl font-bold">Draw Time: </p>
      <p className="text-left text-xl font-bold">Speak Time: </p>
    </div>
  )
}

function SpeakerList({speakers}) {
  return (
		<div className="grid grid-cols-3 gap-4">
      {Array.from(Array(speakers).keys()).map((speaker) => (
        <Speaker key={speaker} speaker={speaker} />
      ))}
		</div>
  );
}
function App() {
  const [speakers, setSpeakers] = useState(6)
  const [interval, setInterval] = useState(10)

  return (
    <div className="container mx-auto">
      <Title />
      <CurrentTime />
      <SpeakerList speakers={speakers}/>
    </div>
  )
}

export default App
