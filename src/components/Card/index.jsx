import useEqualHeight from "../../hooks/useEqualHeight";
import Button from "../Button";

export default function Card({ title, body, createdAt }) {
  useEqualHeight(".card")

  return (
    <div className="card w-[300px] border rounded-lg flex flex-col overflow-hidden">
      <div className="flex-1 px-4 pt-4">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-slate-500 text-xs mt-1 mb-2.5">
          {createdAt}
        </p>
        <p className="text-sm">{body}</p>
      </div>

      <div className="w-full flex items-center justify-center border-t mt-4">
        <Button
          text="Hapus"
          style="w-full bg-red-500 text-white py-1 cursor-pointer"
        />
        <Button
          text="Arsipkan"
          style="w-full bg-yellow-500 text-white py-1 cursor-pointer"
        />
      </div>
    </div>
  );
}
