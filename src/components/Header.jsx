import Divider from "./Divider";

export default function Header() {
    return <div className="flex w-full items-center flex-col justify-center p-10 gap-2">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 pacifico-regular">Alian Hakim</h1>
        <p className="montserrat-regular">Portofolio Proyek</p>
        <Divider />
    </div>
}