'use client'

import useVariables from "@/hooks/use-variables"

export const Alert = () => {
    const { searchWeatherData, isLoading } = useVariables()

    const date = (timestamp: number) => {
        const date = new Date(timestamp * 1000)
        return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })
    }

    if (searchWeatherData === null || isLoading) {
        return
    }

    return (
        <>
            {searchWeatherData && (
                <div className="md:w-[32%] p-5 rounded-xl bg-red-100 ">
                    <p className="text-red-500 font-semibold text-xl">Alertas Climáticos</p>
                    {searchWeatherData.alerts ? (
                        searchWeatherData.alerts.map((alert: any, index: number) => (
                            <div key={index} className="flex flex-col gap-y-5">
                                <p className="font-semibold">{alert.event}</p>
                                <p>{alert.description}</p>
                                <p>{date(alert.start)} até {date(alert.end)}</p>
                            </div>
                        ))) : (
                        <p className="mt-5">Nenhum alerta climático para as próximas 24 horas.</p>
                    )
                    }
                </div >
            )}
        </>
    )
}