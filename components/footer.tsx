'use client'

import useVariables from "@/hooks/use-variables"

import Link from "next/link"

export const Footer = () => {
    const { isLoading } = useVariables()


    if (isLoading) return


    return (
        <div className="w-full mt-20">
            <div className="flex justify-center py-1">
                <p className="text-gray-500 text-sm">
                    <Link
                        href='https://www.linkedin.com/in/luca-anequini-antoniazzi/'
                        className="hover:border-b border-gray-500"
                        target="_blank"
                    >
                        Luca Anequini Antoniazzi
                    </Link> © 2024 Weather App
                </p>
            </div>
        </div>
    )
}