'use client'

import { Line } from "react-chartjs-2"

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Filler
} from "chart.js"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Filler
)

export const LineChart = () => {
    const data = {
        labels: ['00h', '01h', '02h', '03h', '04h', '05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h'],
        datasets: [
            {
                label: 'Temperatura',
                data: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 40, 10, 13],
                fill: true,
                pointBackgroundColor: 'orange',
                backgroundColor: 'rgba(255, 165, 0, 0.2)',
                borderColor: 'orange'
            },
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: true
            },

        }
    }

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}