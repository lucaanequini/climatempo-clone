'use client'

import { useState, useEffect } from "react"

import Image from "next/image"

import { Button } from "./ui/button"

import useVariables from "@/hooks/use-variables"


import { Skeleton } from "./ui/skeleton";

export const Navbar = () => {
    const { cityName, weatherData, isLoading } = useVariables()

    return (
        <>
            <div className="w-full bg-blue-600 py-10">
                <div className='mx-2 lg:mx-40 xl:mx-60 2xl:mx-96 flex justify-between items-center'>
                    <div className="w-32 lg:w-40">
                        <Image src='/logo.svg' alt='logo' layout='responsive' width={150} height={400} />
                    </div>
                    <Button variant='default' className="bg-transparent border border-white" >Faça seu Login</Button>
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