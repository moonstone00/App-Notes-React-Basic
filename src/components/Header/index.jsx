import { useState } from "react";
import ModalComponent from "../Modal";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='flex items-center justify-between p-6 border-b border-slate-700 shadow-lg shadow-slate-400' >
            <h1 className='text-3xl font-bold' >My Notes.</h1>
            <form className='w-[30%]' >
                <input className='w-full border rounded-sm px-4 py-1' placeholder='Search notes...' />
            </form>
            
            <ModalComponent modalIsOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}