import Navbar from './Navbar'


export default function Layout({ children }) {
    return (
        <>
            <div className="">
                <Navbar />
            </div>
            <main>{children}</main>
        </>
    )
}