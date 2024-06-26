'use client'

import useVariables from "@/hooks/use-variables"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

import { MapPin, ArrowDown, ArrowUp, Droplets, Wind, CloudRainWind } from "lucide-react"

import Image from "next/image"
import { Spinner } from "@/components/spinner"


interface MainCardProps {
    day: number
    weekDay?: string
}

export const MainCard = ({ day, weekDay }: MainCardProps) => {
    const pathname = usePathname()

    const cityId = pathname.split('/').pop()?.split('_').shift()
    const state = pathname.split('/').pop()?.split('_')[1]
    const country = pathname.split('/').pop()?.split('_').pop()
    const { getCityNameWeatherData, cityName, isLoading, searchWeatherData, detailsCityName } = useVariables()

    const today = new Date()
    today.setDate(today.getDate() + day)

    useEffect(() => {
        getCityNameWeatherData(cityId, state, country)
    }, [cityId, state, country])

    if (searchWeatherData === null || isLoading) {
        return (
            <div className="w-full flex items-center justify-center">
                <Spinner />
            </div>
        )
    }

    return (
        <>
            {
                cityName && searchWeatherData && !isLoading && (
                    <div className="w-full mt-10 md:mt-0 md:w-2/3 bg-white p-5 rounded-xl">
                        <div className="h-full flex flex-col gap-y-10">
                            <div className="h-full flex flex-col gap-y-10">
                                <div className="flex items-center gap-x-2">
                                    <p className="font-semibold text-blue-600 text-xl">
                                        Previsão para {day === 0 ? 'Hoje' : weekDay} {today.toLocaleDateString('pt-BR')} - {detailsCityName}
                                    </p>
                                    <MapPin className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="flex flex-col lg:flex-row gap-y-10 gap-x-10 xl:gap-x-20 items-center lg:justify-between h-full">
                                    <div className="flex flex-col gap-y-12">
                                        <div className="flex flex-col sm:flex-row gap-10">
                                            <div className="flex items-center gap-x-2">
                                                <ArrowDown className="h-14 w-14 text-red-500" />
                                                <p className="font-semibold text-5xl text-gray-600">{Math.floor(searchWeatherData.daily[day].temp.min - 273.15)}°</p>
                                            </div>
                                            <div className="flex items-center gap-x-2">
                                                <ArrowUp className="h-14 w-14 text-green-500" />
                                                <p className="font-semibold text-5xl text-gray-600">{Math.floor(searchWeatherData.daily[day].temp.max - 273.15)}°</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-y-3">
                                            <div className="flex justify-between">
                                                <p>Chuva</p>
                                                <div className="flex items-center gap-x-3">
                                                    <CloudRainWind className='h-4 w-4' />
                                                    <p>{(searchWeatherData.daily[day].pop) * 100}%</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between">
                                                <p>Vento</p>
                                                <div className="flex items-center gap-x-3">
                                                    <Wind className='h-4 w-4' />
                                                    <p>{(searchWeatherData.daily[day].wind_speed * 3.6).toFixed(2)} km/h</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between">
                                                <p>Umidade</p>
                                                <div className="flex items-center gap-x-3">
                                                    <Droplets className='h-4 w-4' />
                                                    <p>{searchWeatherData.daily[day].humidity}%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <p>{searchWeatherData.daily[day].summary}.</p>
                                        <Image
                                            alt="img"
                                            src={`http://openweathermap.org/img/wn/${searchWeatherData.daily[day].weather[0].icon}@4x.png`}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )

}