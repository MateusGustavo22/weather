import NextDayCard from "./NextDayCard"
import moment from 'moment';

interface Props {
  forecast: {
    timestamp: number[],
    tempMax: number[],
    tempMin: number[],
    weathercode: number[]
  }
}

export default function NextDays({ forecast }: Props) {
  //Organiza todos arrays do forecast em um unico array
  const forecastArray = []
  for (let i = 0; i < 5; i++) {
    forecastArray.push({ timestamp: forecast.timestamp[i], tempMax: forecast.tempMax[i], tempMin: forecast.tempMin[i], weathercode: forecast.weathercode[i] })
  }

  return (
    <div className="w-full h-max p-1 flex flex-col space-y-8 items-center">
      <span className="font-bold text-color2 text-[20px] text-sans">Proximos dias</span>
      <div className="w-full h-max flex flex-col space-y-6 mt-8 mb-4">
        {forecastArray.map(item => <NextDayCard key={item.timestamp} timestamp={item.timestamp} tempMax={item.tempMax} tempMin={item.tempMin} weathercode={item.weathercode} />)}
      </div>
    </div>
  )
}