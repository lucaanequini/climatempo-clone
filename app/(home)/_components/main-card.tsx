'use client'

import { Skeleton } from "@/components/ui/skeleton"
import useVariables from "@/hooks/use-variables"

import Image from "next/image"

import { Thermometer, Cloud } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useEffect } from "react"

import { useRouter } from "next/navigation"
import { useLocation } from "@/hooks/use-location"

export const MainCard = () => {
    const { weatherData, cityName, isLoading, getLocationWeatherData } = useVariables()
    const router = useRouter()
    const { position } = useLocation()

    // const cityId = cityName.local_names.io.replace(' ', '')

    const onRedirect = () => {
        router.push(`/details/${cityName.local_names.io.replace(' ', '-')}_${cityName.country}`)
    }

    useEffect(() => {
        getLocationWeatherData(position)
    }, [position])

    return (
        <div className="bg-gray-100 py-14 px-5 md:px-14 rounded-xl flex flex-col items-center h-[470px] w-full sm:w-[500px]">
            {cityName && weatherData && !isLoading && (
                <>
                    <p className="text-lg font-semibold text-center">Tempo agora em: {cityName.name}, {cityName.state}</p>
                    <div className="flex items-center">
                        <Image src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@4x.png`}
                            alt='icon'
                            width={100}
                            height={50}
                        />
                        <p className="text-5xl font-bold">{(weatherData.current.temp - 273.15).toFixed(0)}°</p>
                    </div>
                    <div className="flex flex-col gap-y-8">
                        <div className="flex gap-x-8">
                            <div className="flex gap-x-2 items-center text-gray-500">
                                <Cloud className="h-4 w-4" />
                                <p>{weatherData.current.weather[0].main}</p>
                            </div>
                            <div className="flex items-center text-gray-500">
                                <Thermometer className="h-4 w-4" />
                                <p>Sensação: {(weatherData.current.feels_like - 273.15).toFixed(0)}°</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-between text-sm sm:text-base">
                            <div className="flex gap-x-2">
                                <div className="h-5 w-2 bg-green-300 rounded-xl" />
                                <p>VENTO</p>
                            </div>
                            <p>{(weatherData.current.wind_speed)} km/h</p>
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
                </>
            )}
            {isLoading && (
                <div className="flex flex-col gap-y-8 items-center">
                    <p className="text-lg font-semibold text-center">Tempo agora em:<Skeleton className="w-60 h-4 bg-black" /></p>
                    <div className="flex items-center gap-x-2">
                        <Skeleton className="w-14 h-14 rounded-full bg-black" />
                        <Skeleton className="w-14 h-5 bg-black" />
                    </div>
                    <div className="flex justify-between w-full">
                        <Skeleton className="w-14 h-5 bg-black" />
                        <Skeleton className="w-14 h-5 bg-black" />
                    </div>
                </div>
            )}
        </div>
    )
}