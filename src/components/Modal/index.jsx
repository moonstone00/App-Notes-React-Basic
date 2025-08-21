import React from "react";
import Modal from "react-modal";
import Button from "../Button";

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

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#000000";
    subtitle.style.fontSize = "24px";
    subtitle.style.fontWeight = "bold";
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
          <p className="text-sm text-slate-500" >Sisa karakter: 500</p>
          <form className="w-[400px]" >
            <input className="w-full border px-2 py-1 rounded-sm" placeholder="Ini adalah judul..." />
            <textarea className="w-full min-h-32 border mt-4 px-2 py-1 rounded-sm" placeholder="Ini adalah isi catatan..." />
            <Button text="Simpan" style='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors cursor-pointer mt-4' onClick={closeModal} />
          </form>
        </div>
      </Modal>
    </div>
  );
}
