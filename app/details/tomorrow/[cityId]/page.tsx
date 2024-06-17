import { MiniNavbar } from "../../_components/mini-navbar"
import { MainCard } from "../../_components/main-card"
import { LineChart } from "../../_components/line-chart"

const TomorrowPage = () => {
    return (
        <div>
            <MiniNavbar />
            <MainCard day={1} />
            <LineChart day={1} />
        </div>
    )
}

export default TomorrowPage