import axios from "axios"

export type News = {
    title: string
    description: string
    url: string
}

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY

const newsService = {
    getNews: async () => {
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=${API_KEY}`
            )
            console.log(response.data.articles)
            return response.data.articles
        } catch (error) {
            console.error("Erro ao buscar notícias:", error)
        }
    }
}

export default newsService