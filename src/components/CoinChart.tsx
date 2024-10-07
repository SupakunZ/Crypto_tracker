import { CoinContext } from '@/app/context/CoinProvider';
import getLast7DaysDates from '@/app/helpers/getLast7DaysDates';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useContext } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  name: string,
  data: number[]
}


export const CoinChart = ({ name, data }: Props) => {

  const { currency } = useContext(CoinContext)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: `Last 7d ${name || 'coin'} price`,
        color: 'rgba(51, 65, 85, 0.9)'
      },
      tooltip: {
        displayColors: false,
        backgroundColor: 'rgba(15, 23, 42, 0.8)'
      }
    }
  }

  const config = {
    labels: getLast7DaysDates(),
    datasets: [
      {
        label: currency,
        data: data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <Line options={options} data={config} />
  )
}
