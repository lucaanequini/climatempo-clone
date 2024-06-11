import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY

const geolocationService = {
    getCityName: async (lat: number, lon: number) => {
            try {
                const response = await axios.get(
                    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`
                )
                console.log(response.data[0])
                return response.data[0]
            } catch (error) {
                console.error('Erro ao obter cidade:', error);
                throw error;
            }
        }
    }

export default geolocationService