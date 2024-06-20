import { MiniNavbar } from "../../_components/mini-navbar"
import { NowCard } from "../../_components/now-card"
import { AlertCard } from "../../_components/alert-card"

const NowPage = () => {
    return (
        <div>
            <MiniNavbar />
            <div className="flex gap-x-10">
                <NowCard />
                <AlertCard />
            </div>
        </div>
    )
}

export default NowPage