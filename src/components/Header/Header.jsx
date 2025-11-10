import logo from "../../assets/assets/logo.svg";
export default function Header({ route }) {
  return (
    <header className="flex items-center mb-12 justify-between">
      <div className="flex items-center">
        <img src={logo} className="h-10" alt="Logo" />
      </div>
      <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
        <button
          onClick={() => route("create")}
          className="hover:text-zinc-200 font-medium text-zinc-200 cursor-pointer transition-all"
        >
          Create Image
        </button>
        <button
          onClick={() => route("download")}
          className="hover:text-zinc-200 cursor-pointer transition-all"
        >
          Downloaded
        </button>
      </ul>
    </header>
  );
}
