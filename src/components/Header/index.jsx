import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-between p-6 border-b border-black' >
            <h1 className='text-3xl font-bold' >Notes.</h1>
            <form className='w-[30%]' >
                <input className='w-full border rounded-sm px-4 py-1' placeholder='Search notes...' />
            </form>
        </header>
    )
}
