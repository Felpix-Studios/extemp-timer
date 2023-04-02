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
      <h2 className="text-center text-2xl font-bold">Speaker {speaker+1} </h2>
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

function RoundConfig({interval, speaker, setInterval, setSpeakers, roundStartTime, setRoundStartTime}) {

  return (
		<div className="grid grid-cols-3 gap-24 m-4 text-center px-24">
			<div>
				<label>Speakers</label>
				<input
					type="number"
					className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					value={speaker}
					onChange={(e) => setSpeakers(parseInt(e.target.value))}
				></input>
			</div>
			<div>
				<label>First Draw Time</label>
        <input type="time" className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" onChange={(e)=>console.log(e.target.value)}></input>
			</div>
			<div>
				<label>Interval (Minute)</label>
				<input
					type="number"
					className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					value={interval}
					onChange={(e) => setInterval(parseInt(e.target.value))}
				></input>
			</div>
		</div>
  );
}

function startRound(){
  console.log("Round Started")
}

function App() {
  const [speakers, setSpeakers] = useState(6)
  const [interval, setInterval] = useState(10)
  const [roundStartTime, setRoundStartTime] = useState(new Date().toLocaleTimeString());

  return (
    <div className="container mx-auto">
      <Title />
      <CurrentTime />
      <RoundConfig interval= {interval} setInterval = {setInterval }speaker = {speakers} setSpeakers = {setSpeakers} roundStartTime={roundStartTime} setRoundStartTime={setRoundStartTime}/>
      <SpeakerList speakers={speakers}/>
    </div>
  )
}

export default App
