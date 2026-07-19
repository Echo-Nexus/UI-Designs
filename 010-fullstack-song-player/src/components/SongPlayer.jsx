import {
  ListMusic,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";

const SongPlayer = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center px-5 py-10">

      {/* Top Buttons */}
      <div className="w-full max-w-md flex justify-between mb-6">
        <button className="text-2xl">&#8592;</button>
        <button className="text-2xl">&#9776;</button>
      </div>

      {/* Album */}
      <div className="relative w-72 h-112.5 rounded-b-[170px] overflow-hidden shadow-2xl">

        <img
          src="https://i.pinimg.com/originals/06/62/b9/0662b9941a933116858623bcdab71c01.png"
          alt="Album"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Song Info */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white">
          <h2 className="text-2xl font-bold">Bad Guy</h2>
          <p className="text-sm opacity-80">Billie Eilish</p>
        </div>
      </div>

      {/* Progress */}
      <div className="w-80 mt-8">
        <input
          type="range"
          className="w-full accent-black cursor-pointer"
        />

        <div className="flex justify-between text-sm mt-2 text-gray-600">
          <span>01:04</span>
          <span>03:28</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6 mt-10">

        <Shuffle size={20} />

        <SkipBack size={24} />

        <button className="w-16 h-16 rounded-full bg-black text-white flex justify-center items-center shadow-lg hover:scale-105 transition">
          <Play fill="white" size={28} />
        </button>

        <SkipForward size={24} />

        <ListMusic size={20} />

      </div>
    </main>
  );
};

export default SongPlayer;