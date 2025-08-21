import Header from '../Header'

export default function PrimaryLayout({children}) {
    return (
        <>
            <Header/>
            <section className='min-h-screen my-20' >
                {children}
            </section>
        </>
    )
}
