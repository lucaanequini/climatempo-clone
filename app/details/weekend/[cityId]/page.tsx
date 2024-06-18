'use client'

import { MiniNavbar } from "@/app/details/_components/mini-navbar";
import { MainCard } from "../../_components/main-card";
import { Faq } from "../../_components/faq-item";

import { useEffect, useState } from "react";

const WeekendPage = () => {
    const today = new Date()
    const todayWeekday = today.getDay()
    const [missingDays, setMissingDays] = useState(0)

    useEffect(() => {
        if (todayWeekday < 5) {
            setMissingDays(5 - todayWeekday)
        } else if (todayWeekday === 5) {
            setMissingDays(2)
        } else {
            setMissingDays(1)
        }
    })

    return (
        <div>
            <MiniNavbar />
            <div className="flex flex-col gap-y-5">
                <MainCard day={missingDays} weekDay="Sábado" />
                <MainCard day={missingDays + 1} weekDay="Domingo" />
            </div>
            <Faq day={missingDays} weekDay="o fim de semana" />
        </div>
    )
}

export default WeekendPage