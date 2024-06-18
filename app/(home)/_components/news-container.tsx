'use client'

import newsService, { News } from "@/services/news"
import { useEffect, useState } from "react"

export const NewsContainer = () => {
    const [news, setNews] = useState<News[]>([])

    const getNews = async () => {
        const news = await newsService.getNews()
        setNews(news)
    }

    useEffect(() => {
        getNews()
    }, [])


    return (
        <>
            {news && (
                <div className="bg-white w-full rounded-xl">
                    {news.slice(0, 3).map((item, index) => (
                        <div>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}