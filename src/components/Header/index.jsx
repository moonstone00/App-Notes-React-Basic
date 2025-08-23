import { useState } from "react";
import ModalComponent from "../Modal";
import { useAtom } from "jotai";
import { searchAtom } from "../../jotai/atoms";
import Search from "../../form/Search";

export default function Header() {
    const [searchTerm, setSearchTerm] = useAtom(searchAtom);
    const [isOpen, setIsOpen] = useState(false);

    const handleSearch = (event) => {
        event.preventDefault();
        // console.log(filteredNotes)
    }

    return (
        <header className='flex items-center justify-between p-6 border-b border-slate-700 shadow-lg shadow-slate-400' >
            <h1 className='text-3xl font-bold' ><span className="text-red-500" >My</span> <span className="text-yellow-500" >Notes.</span></h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
            <ModalComponent modalIsOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}