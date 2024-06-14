import axios from "axios";
import { useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY

const weatherService = {
    getCurrentWeather: async (lat: Number, lon: Number) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            );
            return(response.data)
        } catch (error) {
            console.error('Erro ao obter dados do clima:', error);
            throw error;
        }
    }
}

export default weatherService