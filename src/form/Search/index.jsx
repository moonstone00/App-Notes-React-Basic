export default function Search({searchTerm, setSearchTerm, handleSearch}) {
    return (
        <form onSubmit={handleSearch} className='w-[30%]' >
            <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} className='w-full border rounded-sm px-4 py-1' placeholder='Search notes...' />
        </form>
    )
}
