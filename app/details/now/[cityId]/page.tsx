import { MiniNavbar } from "../../_components/mini-navbar"
import { NowCard } from "../../_components/now-card"
import { AlertCard } from "../../_components/alert-card"

const NowPage = () => {
    return (
        <div className="md:h-[68vh]">
            <MiniNavbar />
            <div className="flex flex-col md:flex-row gap-y-5 gap-x-10 justify-center">
                <NowCard />
                <AlertCard />
            </div>
        </div>
    )
}

export default NowPage