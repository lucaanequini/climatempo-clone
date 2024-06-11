'use client'

import React, { createContext, useState, useEffect } from "react"

import { useLocation } from "@/hooks/use-location"
import weatherService from "@/services/weather"
import geolocationService from "@/services/geolocation"

interface WeatherContextProps {
    weatherData: any | null
    cityName: any | null
    isLoading: boolean
}

export const WeatherContext = createContext<WeatherContextProps>({
    weatherData: null,
    cityName: null,
    isLoading: false
})

export const WeatherContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [cityName, setCityName] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(false)
    const { position } = useLocation()

    useEffect(() => {
        setIsLoading(true)
        if (position) {
            weatherService.getCurrentWeather(position.coords.latitude, position.coords.longitude)
                .then((data: any) => setWeatherData(data))
                .catch((error: any) => console.error('Erro ao obter dados do clima:', error));
            geolocationService.getCityName(position.coords.latitude, position.coords.longitude)
                .then((data) => {
                    setCityName(data)
                    setIsLoading(false)
                })
                .catch((error) => console.error('Erro ao obter cidade:', error))
        }
    }, [position]);

    const providerItems = {
        weatherData,
        cityName,
        isLoading
    }

    return (
        <WeatherContext.Provider value={providerItems}>
            {children}
        </WeatherContext.Provider>
    )
}