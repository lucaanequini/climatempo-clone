'use client'

import useVariables from "@/hooks/use-variables"

interface ComparativeCardProps {
    day: number
    weekend?: boolean
}


export const ComparativeCard = ({ day, weekend }: ComparativeCardProps) => {
    const { searchWeatherData, isLoading } = useVariables()


    if (searchWeatherData === null || isLoading) {
        return
    }

    return (
        <>
            {searchWeatherData && (
                <div className="md:w-[32%] py-5 px-3 rounded-xl bg-white">
                    <p className="text-blue-600 font-semibold text-xl">Comparativo</p>
                    <div className="flex flex-col gap-y-5">
                        <table className="table-auto md:text-sm lg:text-base">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>{weekend ? ('Sábado') : ('Hoje')}</th>
                                    <th>{weekend ? ('Domingo') : ('Amanhã')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3 font-semibold text-gray-600">Temperatura Máxima (°)</td>
                                    <td className="text-center text-gray-400 font-medium">{Math.floor(searchWeatherData.daily[day].temp.max - 273.15)}</td>
                                    <td className="text-center text-gray-400 font-medium">{Math.floor(searchWeatherData.daily[day + 1].temp.max - 273.15)}</td>
                                </tr>
                                <tr >
                                    <td className="p-3 font-semibold text-gray-600">Temperatura Mínima (°)</td>
                                    <td className="text-center text-gray-400 font-medium">{Math.floor(searchWeatherData.daily[day].temp.min - 273.15)}</td>
                                    <td className="text-center text-gray-400 font-medium">{Math.floor(searchWeatherData.daily[day + 1].temp.min - 273.15)}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-semibold text-gray-600">Chuva</td>
                                    <td className="text-center text-gray-400 font-medium">{searchWeatherData.daily[day].pop * 100}%</td>
                                    <td className="text-center text-gray-400 font-medium">{searchWeatherData.daily[day + 1].pop * 100}%</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-semibold text-gray-600">Vento (km/h)</td>
                                    <td className="text-center text-gray-400 font-medium">{(searchWeatherData.daily[day].wind_speed * 3.6).toFixed(2)}</td>
                                    <td className="text-center text-gray-400 font-medium">{(searchWeatherData.daily[day + 1].wind_speed * 3.6).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-semibold text-gray-600">Pressão</td>
                                    <td className="text-center text-gray-400 font-medium">{searchWeatherData.daily[day].pressure}hPa</td>
                                    <td className="text-center text-gray-400 font-medium">{searchWeatherData.daily[day + 1].pressure}hPa</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div >
            )}
        </>
    )
}