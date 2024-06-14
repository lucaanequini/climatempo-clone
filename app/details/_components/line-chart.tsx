'use client'

import useVariables from "@/hooks/use-variables"
import { usePathname } from "next/navigation"

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
import { useEffect } from "react"

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
    const pathname = usePathname()
    const cityId = pathname.split('/').pop()?.split('-').shift()?.replace('%20', '-')
    const { getCityNameWeatherData, searchWeatherData } = useVariables()

    useEffect(() => {
        getCityNameWeatherData(cityId)
    }, [])

    const generateHourLabels = () => {
        const currentHour = new Date().getHours();
        const labels = [];
        for (let i = 0; i < 20; i++) {
            const hour = (currentHour + i) % 24;
            labels.push(`${hour}h`);
        }
        return labels;
    }

    if (searchWeatherData === null) {
        return <div>Carregando...</div>
    }

    const data = {
        labels: generateHourLabels(),
        datasets: [
            {
                label: 'Temperatura',
                data: searchWeatherData.hourly.slice(0, 20).map((hour: any) => (hour.temp - 273.15).toFixed(0)),
                fill: true,
                pointBackgroundColor: 'white',
                backgroundColor: 'rgba(255, 165, 0, 0.2)',
                borderColor: 'orange',
                pointRadius: 5
            },
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false // Adicione esta linha
                },
                min: 5, // valor mínimo
                max: 40, // valor máximo
            }
        },
    }

    return (
        <div className="mt-5 flex flex-col gap-y-5 bg-gray-100 rounded-xl md:w-2/3 p-5">
            <div className="pl-4">
                <p className="font-semibold text-lg">Clima e previsão do tempo hora a hora</p>
                <p className="text-gray-500">
                    <span className="font-semibold">Temperatura</span> Celsius (°C)
                </p>
            </div>
            <div className="h-full">
                <Line data={data} options={options} />
            </div>
        </div>
    )
}