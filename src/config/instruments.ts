export type InstrumentConfig = {
  symbol: string
  name: string
  exchange: string
  tickSize: number
  tickValue: number
  timeZone: string
}

export const instruments: InstrumentConfig[] = [
  {
    symbol: 'MES',
    name: 'Micro E-mini S&P 500',
    exchange: 'CME',
    tickSize: 0.25,
    tickValue: 1.25,
    timeZone: 'America/Chicago',
  },
  {
    symbol: 'MGC',
    name: 'Micro Gold',
    exchange: 'COMEX',
    tickSize: 0.1,
    tickValue: 1.0,
    timeZone: 'America/Chicago',
  },
]