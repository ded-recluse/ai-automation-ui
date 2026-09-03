import { useState } from 'react'
import './App.css'
import { instruments } from './config/instruments'
import type { DailyMarketData } from './types/marketData'

function App() {

  const [selectedInstrument, setSelectedInstrument] = useState(useState('MES'))
  const [ marketData, setMarketData ] = useState<DailyMarketData>({
    date: new Date().toISOString().split('T')[0],
    instrument: 'MES',
    pdh: 0,
    pdl: 0,
    onh: 0,
    onl: 0,
    settlement: 0
  })
  
  return (
    <main>
      <h1>Trading Journal Generator</h1>

      <section>
        <h2>Instrument</h2>
        <div>
          <section>
          <p>Selected:{selectedInstrument}</p>
          {instruments.map((instrument) => (
            <button 
              onClick={() => setSelectedInstrument(instrument.symbol)} key={instrument.symbol}>
              {instrument.symbol}
            </button>
          ))}
          </section>
          <section>
            <h2>Daily Levels</h2>

            <label>
              PDH
              <input type="number" Step="0.01"/>
            </label>

            <label>
              PDL
              <input type="number" Step="0.01"/>
            </label>

            <label>
              ONH
              <input type="number" Step="0.01"/>
            </label>

            <label>
              ONL
              <input type="number" Step="0.01"/>
            </label>

            <label>
              Settlement
              <input type="number" Step="0.01"/>
            </label>
          </section>
        </div>
      </section>
    </main>
  )
}

export default App