import { MainCard } from "./_components/main-card"
import { NewsContainer } from "./_components/news-container"

export default function Teste() {
    return (
        <div>
            <div className="mt-2 flex justify-between gap-x-5">
                <MainCard />
                <NewsContainer />
            </div>
        </div>
    )
}