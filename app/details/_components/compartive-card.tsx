'use client'

import useVariables from "@/hooks/use-variables"


export const ComparativeCard = () => {
    const { searchWeatherData, isLoading } = useVariables()


    if (searchWeatherData === null || isLoading) {
        return
    }

    return (
        <>
            {searchWeatherData && (
                <div className="md:w-[32%] p-5 rounded-xl bg-white ">
                    <p className="text-blue-600 font-semibold text-xl">Comparativo</p>
                    <div className="flex flex-col gap-y-5">
                        <table className="table-auto md:text-sm lg:text-base">
                            <th></th>
                            <th>Hoje</th>
                            <th>Amanhã</th>
                            <tr>
                                <td className="p-3 font-semibold text-gray-600">Temperatura Máxima (°)</td>
                                <td className="text-center text-gray-400 font-medium">{Math.floor(searchWeatherData.daily[0].temp.max - 273.15)}</td>
                                <td className="text-center text-gray-400 font-medium">{Math.floor(searchWeatherData.daily[1].temp.max - 273.15)}</td>
                            </tr>
                            <tr >
                                <td className="p-3 font-semibold text-gray-600">Temperatura Mínima (°)</td>
                                <td className="text-center text-gray-400 font-medium">{Math.floor(searchWeatherData.daily[0].temp.min - 273.15)}</td>
                                <td className="text-center text-gray-400 font-medium">{Math.floor(searchWeatherData.daily[1].temp.min - 273.15)}</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-semibold text-gray-600">Chuva</td>
                                <td className="text-center text-gray-400 font-medium">{searchWeatherData.daily[0].pop * 100}%</td>
                                <td className="text-center text-gray-400 font-medium">{searchWeatherData.daily[1].pop * 100}%</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-semibold text-gray-600">Vento (km/h)</td>
                                <td className="text-center text-gray-400 font-medium">{(searchWeatherData.daily[0].wind_speed * 3.6).toFixed(2)}</td>
                                <td className="text-center text-gray-400 font-medium">{(searchWeatherData.daily[1].wind_speed * 3.6).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-semibold text-gray-600">Pressão</td>
                                <td className="text-center text-gray-400 font-medium">{searchWeatherData.daily[0].pressure}hPa</td>
                                <td className="text-center text-gray-400 font-medium">{searchWeatherData.daily[1].pressure}hPa</td>
                            </tr>
                        </table>
                    </div>
                </div >
            )}
        </>
    )
}