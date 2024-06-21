import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY

const geolocationService = {
    getCityName: async (lat: number, lon: number) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            );
            return response.data[0];
        } catch (error) {
            console.error('Erro ao obter cidade:', error);
            throw error;
        }
    },
    getLonAndLat: async (city: string | undefined, state: string | undefined, country: string | undefined) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=0&appid=${API_KEY}`
            );
            return response.data[0];
        } catch (error) {
            throw new Error('Erro ao obter informações')
        }
    },
    getSuggestions: async (searchTerm: string) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=${API_KEY}`
            );
            return(response.data)
        } catch (error) {
            throw new Error('Erro ao buscar sugestões')
        }
    }
};

export default geolocationService;