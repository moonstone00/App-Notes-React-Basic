import Button from '../Button'

export default function Header() {
    return (
        <header className='flex items-center justify-between p-6 border-b border-slate-700 shadow-lg shadow-slate-400' >
            <h1 className='text-3xl font-bold' >My Notes.</h1>
            <form className='w-[30%]' >
                <input className='w-full border rounded-sm px-4 py-1' placeholder='Search notes...' />
            </form>
            <Button
                text='Add Note'
                style='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer'
            />
        </header>
    )
}