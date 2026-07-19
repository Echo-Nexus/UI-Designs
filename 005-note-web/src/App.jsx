import React, { useState } from "react";
import { X } from "lucide-react";
const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({ title, details });

    setTasks(copyTasks);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTasks = [...tasks];
    copyTasks.splice(idx, 1);
    setTasks(copyTasks);
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        className="lg:w-1/2 flex items-start gap-4 p-10 flex-col"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1 className="text-xl font-bold select-none">Add Notes</h1>

        {/* First INPUT FOR HEADING */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="w-full px-5  font-medium py-2 border-2 rounded outline-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />

        {/* DETAILED INPUT */}
        <textarea
          type="text"
          className="w-full px-5 h-20 py-2 border-2 rounded outline-none"
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          required
        />
        <button className="w-full bg-white text-black px-5 py-2 rounded outline-none active:scale-95 select-none">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10 bg-gray-900">
        <h1 className="text-xl font-bold select-none">Recent Notes</h1>
        <div className="h-[90%] overflow-auto flex flex-wrap gap-5 mt-5 pb-4 items-start justify-start">
          {tasks.map((task, idx) => {
            return (
              <div
                className="relative h-52 w-40 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/thumbnails/037/152/684/small_2x/sticky-note-paper-background-free-png.png')] bg-cover text-black py-8 px-4"
                key={idx}
              >
                <h2
                  className="absolute top-5 right-3 cursor-pointer active:scale-95"
                  onClick={() => {
                    deleteNote(idx);
                  }}
                >
                  <X color="#cc0505" />
                </h2>
                <h3 className="text-xl font-bold leading-tight select-none">
                  {task.title}
                </h3>
                <p className="mt-3 leading-tight text-xs text-gray-500 select-none">
                  {task.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;