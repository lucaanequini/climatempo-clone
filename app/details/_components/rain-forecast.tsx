'use client'

import { CloudRain } from "lucide-react"

import useVariables from "@/hooks/use-variables"

export const RainForecast = () => {
    const { searchWeatherData, detailsCityName, isLoading } = useVariables()

    const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']

    const date = (timestamp: number) => {
        const date = new Date(timestamp * 1000)
        return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
    }

    if (searchWeatherData === null || isLoading) {
        return
    }

    return (
        <>
            {searchWeatherData && detailsCityName && (
                <div className="md:max-w-[32%] flex flex-col gap-y-5 bg-white p-5 rounded-xl mt-5">
                    <p className="text-xl font-semibold text-gray-500">Previsão de chuva</p>
                    <div className="flex flex-col gap-y-10">
                        <p>Confira a previsão de chuva prevista para a cidade de
                            <span className="font-semibold text-blue-600"> {detailsCityName}</span>
                            .
                        </p>
                        <div className="grid grid-cols-2 gap-5">
                            {
                                weekDays.map((day, index) => (
                                    <div key={index} className="flex flex-col gap-1 items-center">
                                        <p>{day} - {date(searchWeatherData.daily[index].dt)}</p>
                                        <div className="flex  items-center gap-2">
                                            <CloudRain className="w-6 h-6 text-blue-600" />
                                            <p>{(searchWeatherData.daily[index].pop) * 100}%</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}