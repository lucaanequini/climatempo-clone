'use client'

import useVariables from "@/hooks/use-variables"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

import { MapPin, ArrowDown, ArrowUp, Droplets, Wind, CloudRainWind } from "lucide-react"

import Image from "next/image"

export const MainCard = () => {
    const pathname = usePathname()
    const cityId = pathname.split('/').pop()?.split('-').shift()?.replace('%20', '-')
    const { getCityNameWeatherData, cityName, isLoading, searchWeatherData } = useVariables()

    const today = new Date()

    useEffect(() => {
        getCityNameWeatherData(cityId)
    }, [pathname])

    return (
        <div className="w-2/3 bg-gray-100 p-5 rounded-xl">
            {cityName && searchWeatherData && !isLoading && (
                <div className="flex flex-col gap-y-5">
                    <div className="flex items-center gap-x-2">
                        <p className="font-semibold text-blue-600 text-xl">
                            Previsão para Hoje {today.toLocaleDateString('pt-BR')} - {cityName.name}
                        </p>
                        <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex gap-x-5">
                        <div className="flex flex-col gap-y-5">
                            <div className="flex gap-x-10">
                                <div className="flex items-center gap-x-2">
                                    <ArrowDown className="h-14 w-14 text-red-500" />
                                    <p className="font-semibold text-5xl text-gray-600">{(searchWeatherData.daily[0].temp.min - 273.15).toFixed(0)}°</p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <ArrowUp className="h-14 w-14 text-green-500" />
                                    <p className="font-semibold text-5xl text-gray-600">{(searchWeatherData.daily[0].temp.max - 273.15).toFixed(0)}°</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <div className="flex justify-between">
                                    <p>Chuva</p>
                                    <div className="flex items-center gap-x-3">
                                        <CloudRainWind className='h-4 w-4' />
                                        <p>{searchWeatherData.daily[0].pop}%</p>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p>Vento</p>
                                    <div className="flex items-center gap-x-3">
                                        <Wind className='h-4 w-4' />
                                        <p>{searchWeatherData.daily[0].wind_speed} km/h</p>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p>Umidade</p>
                                    <div className="flex items-center gap-x-3">
                                        <Droplets className='h-4 w-4' />
                                        <p>{searchWeatherData.daily[0].humidity}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>{searchWeatherData.daily[0].summary}.</p>
                            <Image
                                alt="img"
                                src={`http://openweathermap.org/img/wn/${searchWeatherData.daily[0].weather[0].icon}@4x.png`}
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    )
}