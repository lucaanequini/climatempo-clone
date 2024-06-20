'use client'
import useVariables from "@/hooks/use-variables"

import Image from "next/image"

import { Thermometer, Cloud, ChevronRight } from "lucide-react"

import { useEffect } from "react"

import { usePathname } from "next/navigation"

export const NowCard = () => {
    const pathname = usePathname()

    const cityId = pathname.split('/').pop()?.split('_').shift()
    const state = pathname.split('/').pop()?.split('_')[1]
    const country = pathname.split('/').pop()?.split('_').pop()
    const { isLoading, searchWeatherData, detailsCityName, getCityNameWeatherData } = useVariables()

    useEffect(() => {
        getCityNameWeatherData(cityId, state, country)
    }, [cityId, state, country])

    if (searchWeatherData === null || isLoading) {
        return
    }

    return (
        <>
            {detailsCityName && searchWeatherData && !isLoading && (
                <div className="bg-white h-[470px] w-full md:w-[32.5%] flex flex-col items-center py-14 px-5 md:px-14 rounded-xl">
                    <p className="text-lg font-semibold text-center">Tempo agora em: {detailsCityName}</p>
                    <div className="flex items-center">
                        <Image src={`http://openweathermap.org/img/wn/${searchWeatherData.current.weather[0].icon}@4x.png`}
                            alt='icon'
                            width={100}
                            height={50}
                        />
                        <p className="text-5xl font-bold">{Math.floor(searchWeatherData.current.temp - 273.15)}°</p>
                    </div>
                    <div className="flex flex-col gap-y-8">
                        <div className="flex gap-x-8">
                            <div className="flex gap-x-2 items-center text-gray-500">
                                <Cloud className="h-4 w-4" />
                                <p>{searchWeatherData.current.weather[0].main}</p>
                            </div>
                            <div className="flex items-center text-gray-500">
                                <Thermometer className="h-4 w-4" />
                                <p>Sensação: {Math.floor(searchWeatherData.current.feels_like - 273.15)}°</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-between text-sm sm:text-base">
                            <div className="flex gap-x-2">
                                <div className="h-5 w-2 bg-green-300 rounded-xl" />
                                <p>VENTO</p>
                            </div>
                            <p>{((searchWeatherData.current.wind_speed) * 3.6).toFixed(2)} km/h</p>
                        </div>
                        <div className="w-full flex justify-between text-sm sm:text-base">
                            <div className="flex gap-x-2">
                                <div className="h-5 w-2 bg-blue-300 rounded-xl" />
                                <p>UMIDADE</p>
                            </div>
                            <p>{(searchWeatherData.current.humidity)} %</p>
                        </div>
                        <div className="w-full flex justify-between text-sm sm:text-base">
                            <div className="flex gap-x-2">
                                <div className="h-5 w-2 bg-green-300 rounded-xl" />
                                <p>PRESSÃO</p>
                            </div>
                            <p>{(searchWeatherData.current.pressure)}hPa</p>
                        </div>
                        <div className="w-full flex justify-center text-sm sm:text-base">
                            <div className="flex items-center gap-x-2">
                                <p className="font-semibold text-blue-600">Previsão para Hoje</p>
                                <ChevronRight className="h-4 w-4 text-blue-600" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}