'use client'

import React, { createContext, useState } from "react"

import weatherService from "@/services/weather"
import geolocationService from "@/services/geolocation"

interface WeatherContextProps {
    weatherData: any | null
    searchWeatherData: any | null
    cityName: any | null
    detailsCityName: any | null
    isLoading: boolean
    getLocationWeatherData: (position: GeolocationPosition | null) => void
    getCityNameWeatherData: (cityName: string | undefined, state: string | undefined, country: string | undefined) => void
}

export const WeatherContext = createContext<WeatherContextProps>({
    weatherData: null,
    searchWeatherData: null,
    cityName: null,
    detailsCityName: null,
    isLoading: false,
    getLocationWeatherData: () => { },
    getCityNameWeatherData: () => { },
})

export const WeatherContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [searchWeatherData, setSearchWeatherData] = useState<any>(null)
    const [cityName, setCityName] = useState<any>(null)
    const [detailsCityName, setDetailsCityName] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(false)

    const getLocationWeatherData = async (position: GeolocationPosition | null) => {
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
    }

    const getCityNameWeatherData = async (city: string | undefined, state: string | undefined, country: string | undefined) => {
        setIsLoading(true)
        try {
            const response = await geolocationService.getLonAndLat(city, state, country);
            if (response) {
                const lat = response.lat
                const lon = response.lon
                const cityWeatherData = await weatherService.getCurrentWeather(lat, lon);
                setSearchWeatherData(cityWeatherData);
                setDetailsCityName(response.name)
                setIsLoading(false)
                console.log(cityWeatherData)
                return cityWeatherData;
            }
        } catch (error) {
            console.error('Erro ao obter dados do clima da cidade:', error);
            throw error;
        }
    }

    const providerItems = {
        weatherData,
        searchWeatherData,
        cityName,
        detailsCityName,
        isLoading,
        getLocationWeatherData,
        getCityNameWeatherData
    }

    return (
        <WeatherContext.Provider value={providerItems}>
            {children}
        </WeatherContext.Provider>
    )
}