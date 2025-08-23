import Card from "../../components/Card";
import PrimaryLayout from "../../components/layouts/PrimaryLayout";
import { useAtom } from "jotai";
import { notesAtom } from "../../jotai/atoms";

export default function Home() {
    const [notes, setNotes] = useAtom(notesAtom);
    const activeNotes = notes.filter(note => !note.archived);
    const arsipNotes = notes.filter(note => note.archived);

    const handleToggleArchive = (id) => {
        setNotes((prevNotes) => 
            prevNotes.map((note) => 
                note.id === id ? { ...note, archived: !note.archived } : note
            )
        )
    }
    
    return (
        <PrimaryLayout>
            <div className="flex flex-col items-center justify-center gap-20"  >
                <div>
                    <h1 className={`${activeNotes.length === 0 && "text-center"} text-3xl font-semibold mb-6`} >Catatan Aktif</h1>
                    <div className={`grid grid-cols-1 ${activeNotes.length !== 0 && "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" } gap-4 items-stretch`}>
                        {
                            activeNotes.length > 0 ? (
                                activeNotes.map((data, index) => (
                                    <Card key={index} {...data} onToggleArchive={() => handleToggleArchive(data.id)} />
                                ))
                            ) : (
                                <p className="text-red-500 text-xl font-semibold" >Catatan Aktif Tidak Tersedia</p>
                            )
                        }
                    </div>
                </div>
                <div>
                    <h1 className={`${arsipNotes.length === 0 && "text-center"} text-3xl font-semibold mb-6`} >Arsip</h1>
                    <div className={`grid grid-cols-1 ${arsipNotes.length !== 0 && "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" } gap-4 items-stretch`}>
                        {
                            arsipNotes.length > 0 ? (
                                arsipNotes.map((data, index) => (
                                    <Card key={index} {...data} onToggleArchive={() => handleToggleArchive(data.id)} />
                                ))
                            ) : (
                                <p className="text-red-500 text-xl font-semibold" >Arsip Tidak Tersedia</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </PrimaryLayout>
    )
}
