import { useContext } from "react";
import { WeatherContext } from "@/contexts/WeatherContext";

const useVariables = () => {
    return useContext(WeatherContext)
}

export default useVariables