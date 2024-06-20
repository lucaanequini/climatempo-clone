import { MainCard } from "../../_components/main-card"
import { MiniNavbar } from "../../_components/mini-navbar"
import { AlertCard } from "../../_components/alert-card"
import { LineChart } from "../../_components/line-chart"
import { RainForecast } from "../../_components/rain-forecast"
import { Faq } from "../../_components/faq-item"


const CityIdPage = () => {
    return (
        <div className="h-screen">
            <MiniNavbar />
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
                <MainCard day={0} />
                <AlertCard />
            </div>
            <div className="flex flex-col md:flex-row justify-between">
                <LineChart day={0} />
                <RainForecast />
            </div>
            <Faq day={0} />
        </div>
    )
}

export default CityIdPage