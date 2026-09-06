import { useState } from 'react'
import './App.css'
import { instruments } from './config/instruments'
import type { DailyMarketData } from './types/marketData'

function App() {

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
            <p>Selected:{marketData.instrument}</p>
            {instruments.map((instrument) => (
              <button
                onClick={() => setMarketData({ ...marketData, instrument: instrument.symbol })}
                key={instrument.symbol}
              >
                {instrument.symbol}
              </button>
            ))}
          </section>
          <section>
            <h2>Daily Levels</h2>

            <label>
              PDH
              <input
                type="number"
                step="0.01"
                value={marketData.pdh}
                onChange={(e) =>
                  setMarketData({ ...marketData, pdh: Number(e.target.value) })
                }
                onFocus={(e) => e.target.select()}
              />
            </label>

            <label>
              PDL
              <input
                type="number"
                step="0.01"
                value={marketData.pdl}
                onChange={(e) =>
                  setMarketData({ ...marketData, pdl: Number(e.target.value) })
                }
                onFocus={(e) => e.target.select()}
              />
            </label>

            <label>
              ONH
              <input
                type="number"
                step="0.01"
                value={marketData.onh}
                onChange={(e) =>
                  setMarketData({ ...marketData, onh: Number(e.target.value) })
                }
                onFocus={(e) => e.target.select()}
              />
            </label>

            <label>
              ONL
              <input
                type="number"
                step="0.01"
                value={marketData.onl}
                onChange={(e) =>
                  setMarketData({ ...marketData, onl: Number(e.target.value) })
                }
                onFocus={(e) => e.target.select()}
              />
            </label>

            <label>
              Settlement
              <input
                type="number"
                step="0.01"
                value={marketData.settlement}
                onChange={(e) =>
                  setMarketData({
                    ...marketData,
                    settlement: Number(e.target.value),
                  })
                }
                onFocus={(e) => e.target.select()}
              />
            </label>
          </section>
        </div>
      </section>
    </main>
  );
}

export default App