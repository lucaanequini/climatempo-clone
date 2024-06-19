'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const Faq = () => {
    return (
        <div className="flex flex-col gap-y-5 mt-5">
            <Accordion type="single" collapsible className="p-5 md:w-2/3 bg-white rounded-xl">
                <AccordionItem value='item-1'>
                    <AccordionTrigger>
                        O que é clima?
                    </AccordionTrigger>
                    <AccordionContent>
                        <p>Clima é a caracterização das condições atmosféricas de uma determinada região através de registros de um longo período de tempo. Estas condições incluem <span className="font-semibold text-blue-600">temperatura, chuva, pressão atmosférica, umidade do are vento</span>, por exemplo. O clima depende de diversos fatores, como circulação atmosférica, localização geográfica, altitude e proximidade com o oceano.</p>
                        <br />
                        <p>Existe o clima tropical, equatorial, subtropical, temperado, semiárido, árido e outros.</p>
                        <br />
                        <p>As atividades humanas estão provocando mudanças climáticas globais, através do aumento das emissões de gases de efeito estufa. Assim, ocorre o aumento da temperatura média da Terra e a intensificação de eventos climáticos extremos, como tempestades severas e secas mais prolongadas.</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="p-5 md:w-2/3 bg-white rounded-xl">
                <AccordionItem value='item-1'>
                    <AccordionTrigger>
                        Qual a diferença entre clima e tempo?
                    </AccordionTrigger>
                    <AccordionContent>
                        <p>Os conceitos de <span className="font-semibold text-blue-600">tempo</span> e <span className="font-semibold text-blue-600">clima</span> estão relacionados às condições atmosféricas de um determinado local ou região, sendo diferenciados principalmente em relação ao período de tempo considerado.</p>
                        <br />
                        <p>O tempo é o estado atual da atmosfera de um local, que pode mudar de um dia para o outro, ou até mesmo, de uma hora para outra. Por exemplo, quando dizemos “Hoje está chovendo em São Paulo” ou “Amanhã a previsão é de sol e temperaturas amenas” estamos nos referindo ao tempo, que varia de horas, dias a semanas.</p>
                        <br />
                        <p>Já o clima representa a média das variações do tempo por um período mais longo de uma determinada região, tratando-se de meses, estações do ano e anos. Por exemplo, quando dizemos “O inverno no sudeste do Brasil é seco e o verão chuvoso” ou então “A previsão climática é de que a temperatura do ar fique acima da média no sul em agosto”, estamos nos referindo a clima.</p>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    )
}