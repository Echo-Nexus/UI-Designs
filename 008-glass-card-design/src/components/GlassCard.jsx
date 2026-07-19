import React from "react";
import BgImg from "../assets/full-moon-night-sky-snow-covered-foggy-landscape-twilight.png";

const GlassCard = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="w-80 rounded-3xl bg-white/20 border border-white/30 shadow-2xl p-6">
        <img
          src="https://picsum.photos/400/250"
          alt="Image"
          className="rounded-xl mb-4"
        />

        <h1 className="text-3xl font-bold text-white">Glass Card</h1>

        <p className="text-white/80 mt-2">
          This card uses backdrop blur to create a frosted glass effect.
        </p>

        <button className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg">
          Explore
        </button>
      </div>
    </div>
  );
};

export default GlassCard;
