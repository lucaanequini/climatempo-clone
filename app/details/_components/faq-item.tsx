'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import useVariables from "@/hooks/use-variables"

interface FaqProps {
    day: number
    weekDay?: string
}

export const Faq = ({ day, weekDay }: FaqProps) => {
    const { searchWeatherData, detailsCityName, isLoading } = useVariables()

    const getSmallerTemp = () => {
        if (searchWeatherData.daily[day].temp.min > searchWeatherData.daily[day + 1].temp.min) {
            return searchWeatherData.daily[day + 1].temp.min
        } else {
            return searchWeatherData.daily[day].temp.min
        }
    }

    const getHigherTemp = () => {
        if (searchWeatherData.daily[day].temp.max > searchWeatherData.daily[day + 1].temp.max) {
            return searchWeatherData.daily[day].temp.max
        } else {
            return searchWeatherData.daily[day + 1].temp.max
        }
    }

    const getHigherPop = () => {
        if (searchWeatherData.daily[day].pop > searchWeatherData.daily[day + 1].pop) {
            return searchWeatherData.daily[day].pop
        } else {
            return searchWeatherData.daily[day + 1].pop
        }
    }

    if (searchWeatherData === null || isLoading) {
        return
    }

    return (
        <>
            {searchWeatherData && detailsCityName && (
                <div className="flex flex-col gap-y-5 mt-5">
                    <Accordion type="single" collapsible className="p-5 md:w-2/3 bg-white rounded-xl">
                        <AccordionItem value='item-1'>
                            <AccordionTrigger>
                                Qual a previsão do tempo para {day === 0 ? ' hoje' : weekDay} em {detailsCityName}? </AccordionTrigger>
                            <AccordionContent>
                                A previsão do tempo para {day === 0 ? 'hoje' : weekDay} é de temperaturas entre
                                {day <= 1 ? (
                                    ` ${Math.floor((searchWeatherData.daily[day].temp.min - 273.15))}° e ${Math.floor(searchWeatherData.daily[day].temp.max - 273.15)}°.`
                                ) : (
                                    ` ${(Math.floor(getSmallerTemp() - 273.15))}° e ${(Math.floor(getHigherTemp() - 273.15))}°.`
                                )}
                                {searchWeatherData.daily[day].pop > 0 ?
                                    (` Há uma chance de chuva de ${day >= 1 ? (`${Math.floor(searchWeatherData.daily[day].pop * 100)}%.`) : (`${Math.floor(getHigherPop() * 100)}%.`)}`)
                                    : (
                                        ' Não há previsão de chuva.'
                                    )}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            )}
        </>
    )
}