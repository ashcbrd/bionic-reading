export default function Home() {
  return (
    <div className="w-screen h-full flex items-center justify-center flex-col gap-y-6">
      <div className="flex flex-col justify-center items-center gap-y-2">
        <p className="font-black text-8xl text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-yellow-500">
          Empower Your Mind
        </p>
        <p className="font-bold text-5xl ">Bionic Reading for a Digital Age</p>
      </div>
      <div>
        <p className="text-white/50">
          Stay In the Loop: Subscribe for Exclusive Updates and New Features!
        </p>
        <div className="flex gap-x-2">
          <input
            type="text"
            className="w-full bg-white/10 backdrop-blur-md rounded-md p-2"
          />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
