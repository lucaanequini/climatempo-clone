'use client'

import newsService, { News } from "@/services/news"
import { useEffect, useState } from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

import { Button } from "@/components/ui/button"


export const NewsContainer = () => {
    const [news, setNews] = useState<News[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getNews = async () => {
        setIsLoading(true)
        const news = await newsService.getNews()
        setNews(news)
        setIsLoading(false)
    }

    const onRedirect = (url: string) => {
        window.open(url, '_blank')
    }

    useEffect(() => {
        getNews()
    }, [])


    if (news === null || isLoading) {
        return
    }

    return (
        <>
            {news && !isLoading && (
                <div className="bg-white md:w-2/3 rounded-xl">
                    <Carousel
                        plugins={[Autoplay({
                            delay: 5000,
                        })]}
                    >
                        <CarouselContent>
                            {news.slice(0, 5).map((item, index) => (
                                <CarouselItem key={index}>
                                    <div className="flex flex-col sm:flex-row">
                                        <div className="w-full h-full max-h-[470px]">
                                            <img
                                                src={item.image_url}
                                                alt={item.title}
                                                className="w-full h-[470px] object-cover rounded-xl sm:rounded-r-none order-last sm:order-1"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center sm:items-start gap-y-5 sm:max-w-[200px] p-2">
                                            <p className="font-semibold text-blue-600 text-xl">{item.title}</p>
                                            <Button
                                                size='sm'
                                                variant='outline'
                                                className="w-40 mx-auto bg-blue-600 text-white rounded-full hover:border hover:border-blue-600 hover:text-blue-600"
                                                onClick={() => onRedirect(item.link)}
                                            >
                                                Saiba mais
                                            </Button>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel >
                </div >
            )}
        </>
    )
}