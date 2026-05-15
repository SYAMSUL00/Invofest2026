import { Link } from "react-router-dom";

export default function SpeakerIndex() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pembicara</h1>
      <p>Daftar pembicara yang tersedia.</p>

      <Link to="/dashboard/speaker/create" 
        className="inline-block bg-red-900 text-white px-4 py-2 rounded hover:bg-red-900 transition duration-150 mt-4"
        >
        Tambah Pembicara
      </Link>
    </div>
  );
}