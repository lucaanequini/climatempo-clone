'use client'

import useVariables from "@/hooks/use-variables"

export const Footer = () => {
    const { isLoading } = useVariables()


    if (isLoading) return


    return (
        <div className="w-full mt-20">
            <div className="flex justify-center py-1">
                <p className="text-gray-500 text-sm">© 2021 Weather App</p>
            </div>
        </div>
    )
}