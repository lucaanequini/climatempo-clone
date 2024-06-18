import { MiniNavbar } from "../../_components/mini-navbar"
import { MainCard } from "../../_components/main-card"
import { ComparativeCard } from "../../_components/compartive-card"
import { LineChart } from "../../_components/line-chart"
import { Faq } from "../../_components/faq-item"

const TomorrowPage = () => {
    return (
        <div>
            <MiniNavbar />
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
                <MainCard day={1} />
                <ComparativeCard />
            </div>
            <LineChart day={1} />
            <Faq day={1} />
        </div>
    )
}

export default TomorrowPage