'use client'

import { DailyCard } from "./daily-card"

import useVariables from "@/hooks/use-variables"

import { Spinner } from "@/components/spinner"

export const DailySection = () => {
    const { weatherData, cityName, isLoading } = useVariables()


    const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo', 'Segunda']
    const today = new Date()

    if (weatherData === null || isLoading) {
        return (
            <div className="w-full flex justify-center">
                <Spinner size='lg' />
            </div>
        )
    }

    return (
        <div className="grid flex-wrap gap-x-5 mt-5 sm:grid-cols-2 md:grid-cols-3">
            {cityName && weatherData && !isLoading && (
                <>
                    <DailyCard
                        image={`http://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}@4x.png`}
                        min={((weatherData.daily[0].temp.min) - 273.15).toFixed(0)}
                        max={((weatherData.daily[0].temp.max) - 273.15).toFixed(0)}
                        pop={weatherData.daily[0].pop}
                        weekDay="Hoje"
                    />
                    <DailyCard
                        image={`http://openweathermap.org/img/wn/${weatherData.daily[1].weather[0].icon}@4x.png`}
                        min={Math.floor(weatherData.daily[1].temp.min - 273.15)}
                        max={Math.floor(weatherData.daily[1].temp.max - 273.15)}
                        pop={weatherData.daily[1].pop}
                        weekDay="Amanhã"
                    />
                    <DailyCard
                        image={`http://openweathermap.org/img/wn/${weatherData.daily[2].weather[0].icon}@4x.png`}
                        min={Math.floor(weatherData.daily[2].temp.min - 273.15)}
                        max={Math.floor(weatherData.daily[2].temp.max - 273.15)}
                        pop={weatherData.daily[2].pop}
                        weekDay={weekDays[today.getDay() + 1]}
                    />
                </>
            )}
        </div>
    )
}