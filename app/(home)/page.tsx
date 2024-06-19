import { DailySection } from "./_components/daily-section"
import { MainCard } from "./_components/main-card"
import { NewsContainer } from "./_components/news-container"

export default function Teste() {
    return (
        <div>
            <div className="mt-5 flex flex-col md:flex-row gap-5">
                <MainCard />
                <NewsContainer />
            </div>
            <DailySection />
        </div>
    )
}