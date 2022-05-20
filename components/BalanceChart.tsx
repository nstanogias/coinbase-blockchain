import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const data = {
  labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Noz', 'Dec', 'Jan'],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#3773f5',
      borderColor: '#3773f5',
      borderDash: [],
      borderDashOffset: 0.0,
      pointBorderColor: '#3773f5',
      pointBackgroundColor: '#3773f5',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#3773f5',
      pointHoverBorderColor: '#3773f5',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Wrapper = styled.div``;

const BalanceChart = () => {
  return (
    <Wrapper>
      <Line data={data} options={options} width={400} height={150} />
    </Wrapper>
  );
};

export default BalanceChart;
