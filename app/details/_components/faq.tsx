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
}

export const Faq = ({ day }: FaqProps) => {
    const { searchWeatherData, detailsCityName, isLoading } = useVariables()

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
                                Qual a previsão do tempo para {day === 0 ? ' hoje' : ' amanhã'} em {detailsCityName}? </AccordionTrigger>
                            <AccordionContent>
                                A previsão do tempo para {day === 0 ? 'hoje' : 'amanhã'} é de temperaturas entre {Math.floor(searchWeatherData.daily[day].temp.min - 273.15)}° e {Math.floor(searchWeatherData.daily[day].temp.max - 273.15)}°.
                                {searchWeatherData.daily[day].pop > 0 ?
                                    (' Há uma chance de chuva de ' + Math.floor(searchWeatherData.daily[day].pop * 100) + '%.')
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