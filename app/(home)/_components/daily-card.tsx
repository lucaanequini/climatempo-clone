import Image from "next/image"

import { CloudRainWind } from "lucide-react"

interface DailyCardProps {
    image?: any | null
    min?: any | null
    max?: any | null
    pop?: any | null
    weekDay: string
}

export const DailyCard = ({ image, min, max, pop, weekDay }: DailyCardProps) => {
    return (
        <div className="w-full bg-gray-100 flex pr-5 sm:p-5 rounded-xl">
            <div className="-ml-5 w-40">
                <div className="flex flex-col items-center">
                    <p className="font-semibold">{weekDay}</p>
                    <Image src={image} alt={image} layout="responsive" height={100} width={100} />
                </div>
            </div>
            <div className="w-full flex flex-col justify-center gap-y-5">
                <div className="flex justify-between text-sm">
                    <div className="flex gap-x-2">
                        <div className="h-5 w-2 bg-red-500 rounded-full" />
                        <p>TEMPERATURA</p>
                    </div>
                    <p className="text-gray-600">{min}° {max}°</p>
                </div>
                <div className="flex justify-between text-sm">
                    <div className="flex gap-x-2">
                        <div className="h-5 w-2 bg-yellow-500 rounded-full" />
                        <p>CHUVA</p>
                    </div>
                    <p className="text-gray-600 flex items-center gap-x-5"><CloudRainWind className="w-5 h-5" /> {pop}%</p>
                </div>
            </div>
        </div>
    )
}