const DetailsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <main className="mx-2 lg:mx-16 xl:mx-48 2xl:mx-80">
                {children}
            </main>
        </div>
    )
}

export default DetailsLayout