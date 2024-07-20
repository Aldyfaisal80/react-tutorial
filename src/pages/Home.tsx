import { Link } from "react-router-dom"
import { FaLongArrowAltDown } from "react-icons/fa";

export default function Home() {
    return (
        <div className="flex w-full justify-center items-center h-screen">
            <div className="flex justify-center items-center flex-col gap-5">
                <h1 className="text-5xl">Hello World</h1>
                <FaLongArrowAltDown className="text-5xl"/>
                <Link to={'dashboard'} className="text-3xl underline">Dashboard</Link>
            </div>
        </div>
    )
}
