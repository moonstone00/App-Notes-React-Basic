import React from "react";
import Modal from "react-modal";
import Button from "../Button";
import { useAtom } from "jotai";
import { notesAtom } from "../../jotai/atoms"
import AddData from "../../form/AddData";

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
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [notes, setNotesAtom] = useAtom(notesAtom)
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
        createdAt: new Date(),
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
          <AddData title={title} handleTitleChange={handleTitleChange} handleContentChange={handleContentChange} content={content} handleSubmit={handleSubmit} />
        </div>
      </Modal>
    </div>
  );
}