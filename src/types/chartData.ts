export type ChartTimeframe = '5m' | '15m' | '1h' | '4h' | '1d';

export type ChartData = {
    timeframe: ChartTimeframe;
    file: File | null;
}