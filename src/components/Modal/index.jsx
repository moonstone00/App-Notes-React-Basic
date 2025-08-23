import React from "react";
import Modal from "react-modal";
import Button from "../Button";
import { getInitialData, showFormattedDate } from "../../utils";
import { useAtom } from "jotai";
import { notesAtom } from "../../jotai/atoms"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function ModalComponent() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [notes, setNotes] = React.useState(getInitialData());
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [, setNotesAtom] = useAtom(notesAtom)
  const MAXCHAR = 50

  function handleTitleChange(event) {
    if(event.target.value.length <= MAXCHAR) 
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    try {
      const newNote = {
        id: notes.length + 1,
        title,
        body: content,
        createdAt: showFormattedDate(new Date()),
        archived: false,
      }

      console.log('data', newNote)
      setNotesAtom([...notes, newNote])
    } catch (error) {
      console.error("Error saving note:", error);
    } finally {
      setTitle("")
      setContent("")
      setIsOpen(false)
    }
  }

  function afterOpenModal() {
    subtitle.style.color = "#000000";
    subtitle.style.fontSize = "24px";
    subtitle.style.fontWeight = "bold";
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button text="Add Notes" style='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer' onClick={openModal} />

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Buat Catatan</h2>
        <div className="flex flex-col items-end gap-3" >
          <p className="text-sm text-slate-500" >Sisa karakter: {MAXCHAR - title.length}</p>
          <form onSubmit={handleSubmit} className="w-[400px]" >
            <input value={title} onChange={(event) => handleTitleChange(event)} className="w-full border px-2 py-1 rounded-sm" placeholder="Ini adalah judul..." required />
            <textarea value={content} onChange={(event) => handleContentChange(event)} className="w-full min-h-32 border mt-4 px-2 py-1 rounded-sm" placeholder="Ini adalah isi catatan..." required />
            <Button type="submit" text="Simpan" style='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors cursor-pointer mt-4'  />
          </form>
        </div>
      </Modal>
    </div>
  );
}
