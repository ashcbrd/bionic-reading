export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-y-2">
        <p className="text-xs py-1 px-2 border border-white rounded-full opacity-60">
          powered by bionic reading api
        </p>
        <p className="font-black text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-yellow-500">
          Empower Your Mind
        </p>
        <p className="font-bold text-4xl ">Bionic Reading for a Digital Age</p>
      </div>
    </div>
  );
}
