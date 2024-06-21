'use client'

import useVariables from "@/hooks/use-variables"

import Image from "next/image"

import { Thermometer, Cloud } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import { useLocation } from "@/hooks/use-location"

export const MainCard = () => {
    const { weatherData, cityName, isLoading, getLocationWeatherData } = useVariables()
    const [detailsPage, setDetailsPage] = useState(false)
    const router = useRouter()
    const { position } = useLocation()

    const onRedirect = () => {
        router.push(`/details/today/${cityName.name}_${cityName.state}_${cityName.country}`)
    }

    useEffect(() => {
        getLocationWeatherData(position)
    }, [position])


    if (weatherData === null || isLoading) {
        return
    }

    return (
        <>
            {cityName && weatherData && !isLoading && (
                <div className="bg-white h-[470px] w-full md:w-1/3 flex flex-col items-center p-7 md:px-14 rounded-xl">
                    <p className="text-lg font-semibold text-center">Tempo agora em: {cityName.name}, {cityName.state}</p>
                    <div className="flex items-center">
                        <Image src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@4x.png`}
                            alt='icon'
                            width={100}
                            height={50}
                        />
                        <p className="text-5xl font-bold">{Math.floor(weatherData.current.temp - 273.15)}°</p>
                    </div>
                    <div className="flex flex-col gap-y-8">
                        <div className="flex gap-x-8">
                            <div className="flex gap-x-2 items-center text-gray-500">
                                <Cloud className="h-4 w-4" />
                                <p>{weatherData.current.weather[0].main}</p>
                            </div>
                            <div className="flex items-center text-gray-500">
                                <Thermometer className="h-4 w-4" />
                                <p>Sensação: {Math.floor(weatherData.current.feels_like - 273.15)}°</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-between text-sm sm:text-base">
                            <div className="flex gap-x-2">
                                <div className="h-5 w-2 bg-green-300 rounded-xl" />
                                <p>VENTO</p>
                            </div>
                            <p>{((weatherData.current.wind_speed) * 3.6).toFixed(2)} km/h</p>
                        </div>
                        <div className="w-full flex justify-between text-sm sm:text-base">
                            <div className="flex gap-x-2">
                                <div className="h-5 w-2 bg-blue-300 rounded-xl" />
                                <p>UMIDADE</p>
                            </div>
                            <p>{(weatherData.current.humidity)} %</p>
                        </div>
                        <Button
                            size='sm'
                            variant='outline'
                            className="w-40 mx-auto bg-blue-600 text-white rounded-full hover:border hover:border-blue-600 hover:text-blue-600"
                            onClick={onRedirect}
                        >
                            Mais detalhes
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}