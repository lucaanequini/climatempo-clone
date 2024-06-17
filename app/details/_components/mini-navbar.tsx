'use client'

import Link from "next/link"

import { usePathname } from "next/navigation"

import { useState } from "react"


type TabValue = 'today' | 'tomorrow' | 'weekend' | 'twoWeeks';

interface TabProps {
    value: TabValue;
    href: string;
    label: string;
}

export const MiniNavbar = () => {
    const pathname = usePathname()

    const parts = pathname.split('/')
    const segment = parts[2]

    const city = pathname.split('/').pop()?.split('_').shift()
    const state = pathname.split('/').pop()?.split('_')[1]
    const country = pathname.split('/').pop()?.split('_').pop()
    const id = city + '_' + state + '_' + country

    const tabs: TabProps[] = [
        { value: 'today', href: `/details/today/${id}`, label: 'Hoje' },
        { value: 'tomorrow', href: `/details/tomorrow/${id}`, label: 'Amanhã' },
        { value: 'weekend', href: `/details/weekend/${id}`, label: 'Fim de Semana' },
        { value: 'twoWeeks', href: `/details/15/${id}`, label: '15 dias' },
    ];
    return (
        <div className="bg-white my-5 rounded-xl">
            <div className="grid w-full grid-cols-2 md:grid-cols-4 tabs-container items-center">
                {tabs.map((tab) => (
                    <div
                        key={tab.value}
                        className={`tab ${segment === tab.value ? 'bg-blue-500 text-white rounded-xl m-2' : ''}`}
                        data-tab-value={tab.value}
                    >
                        <Link href={tab.href} className="block py-2 px-4 text-center rounded-md">{tab.label}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}