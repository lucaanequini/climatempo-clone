'use client'

const TesteLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <main className="mx-2 lg:mx-40 xl:mx-60 2xl:mx-96">
                {children}
            </main>
        </div>
    )
}

export default TesteLayout