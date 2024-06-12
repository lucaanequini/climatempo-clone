import Link from "next/link"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export const MiniNavbar = () => {
    return (
        <Tabs className="py-5">
            <TabsList className='grid w-full grid-cols-4'>
                <TabsTrigger value="today"><Link href='/'>Hoje</Link></TabsTrigger>
                <TabsTrigger value="tomorrow"><Link href='/'>Amanhã</Link></TabsTrigger>
                <TabsTrigger value="weekend"><Link href='/'>Fim de Semana</Link></TabsTrigger>
                <TabsTrigger value="twoWeeks"><Link href='/'>15 dias</Link></TabsTrigger>
            </TabsList>
        </Tabs>

    )
}