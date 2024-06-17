'use client'

import { useEffect } from "react"

import Image from "next/image"

import useVariables from "@/hooks/use-variables"

import { Skeleton } from "./ui/skeleton";

import { useLocation } from "@/hooks/use-location"

import { SearchItem } from "./search"

import Link from "next/link";

export const Navbar = () => {
    const { cityName, weatherData, isLoading, getLocationWeatherData } = useVariables()
    const { position } = useLocation()

    useEffect(() => {
        getLocationWeatherData(position)
    }, [position])

    return (
        <>
            <div className="w-full bg-blue-600 py-10">
                <div className='mx-2 lg:mx-16 xl:mx-48 2xl:mx-80 flex justify-between items-center'>
                    <Link href='/'>
                        <div className="w-32 lg:w-40">
                            <Image src='/logo.svg' alt='logo' layout='responsive' width={150} height={400} />
                        </div>
                    </Link>
                    <SearchItem />
                </div>
            </div>
            <div className="w-full bg-blue-900 h-[100px] flex items-center">
                <div className="mx-2 lg:mx-40 xl:mx-60 2xl:mx-96 flex w-full justify-between items-center text-white">
                    <p className="text-xs sm:text-regular">Clima e Previsão do Tempo</p>
                    {cityName && weatherData && !isLoading && (
                        <div className="flex items-center">
                            <Image src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
                                alt='icon'
                                width={50}
                                height={50}
                            />
                            <p className="text-xs sm:text-regular">
                                {cityName.name}, {cityName.state} / {(weatherData.current.temp - 273.15).toFixed(0)}°
                            </p>
                        </div>
                    )}
                    {isLoading && (
                        <div className="flex items-center gap-x-1">
                            <Skeleton className="h-[50px] w-10" />
                            <Skeleton className="h-4 w-40" />
                        </div>
                    )}
                </div>
            </div >
        </>
    )
}