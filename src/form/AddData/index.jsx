import Button from "../../components/Button";

export default function AddData({title, handleTitleChange, handleContentChange, content, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit} className="w-[400px]" >
            <input value={title} onChange={(event) => handleTitleChange(event)} className="w-full border px-2 py-1 rounded-sm" placeholder="Ini adalah judul..." required />

            <textarea value={content} onChange={(event) => handleContentChange(event)} className="w-full min-h-32 border mt-4 px-2 py-1 rounded-sm" placeholder="Ini adalah isi catatan..." required />
            <Button type="submit" text="Simpan" style='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors cursor-pointer mt-4'  />
        </form>
    )
}
