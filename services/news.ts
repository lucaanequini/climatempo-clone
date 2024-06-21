import axios from "axios"

export type News = {
    title: string
    description: string
    image_url: string
    article_id: string
    link: string
}

const API_KEY = process.env.NEXT_PUBLIC_WORLDNEWSAPI_KEY

const newsService = {
    getNews: async () => {
        try{
            const response = await axios.get(
                `https://newsdata.io/api/1/latest?country=br&q=temperatura&apikey=${API_KEY}`
            )
            return response.data.results
        } catch (error) {
            throw new Error('Erro ao buscar notícias')
        }
    }
}

export default newsService