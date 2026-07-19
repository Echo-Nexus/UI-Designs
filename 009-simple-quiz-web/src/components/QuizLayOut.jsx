import { useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import {data} from './data'
const QuizLayout = () => {
  // KEEP YOUR DATA ARRAY HERE
  // const data = [...]

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const totalQuestions = data?.length || 0;

  const correct = useMemo(() => {
    return Object.values(answers).filter((a) => a.correct).length;
  }, [answers]);

  const wrong = useMemo(() => {
    return Object.values(answers).filter((a) => !a.correct).length;
  }, [answers]);

  // Prevent NaN error if data array is empty
  const percentage =
    totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0;

  const question = data?.[current];

  // FIX 1: Use useEffect for the auto-advance to prevent the double-skip race condition
  useEffect(() => {
    let timer;
    // If the current question has been answered and it's not the last question
    if (answers[current] && current < totalQuestions - 1) {
      timer = setTimeout(() => {
        setCurrent((prev) => prev + 1);
      }, 700);
    }
    // Cleanup function cancels the timeout if the user manually clicks "Next" or "Prev" early
    return () => clearTimeout(timer);
  }, [answers, current, totalQuestions]);

  const handleAnswer = (option) => {
    if (answers[current]) return;

    const isCorrect = option.name === question.ans.name;

    setAnswers((prev) => ({
      ...prev,
      [current]: {
        selected: option.name,
        correct: isCorrect,
      },
    }));

    // Auto-advance setTimeout removed from here to prevent memory leaks
  };

  const next = () => {
    if (current < totalQuestions - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setAnswers({});
  };

  // Guard against empty data
  if (totalQuestions === 0) return <div>No questions available.</div>;

  if (Object.keys(answers).length === totalQuestions) {
    return (
      <div className="min-h-screen bg-linear-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center p-6">
        <div className="w-full max-w-xl rounded-3xl bg-white shadow-2xl p-10 text-center">
          <h1 className="text-4xl font-bold mb-3">🎉 Quiz Completed</h1>
          <p className="text-gray-500 mb-8">Great job! Here's your result.</p>

          <div className="grid grid-cols-3 gap-5 mb-8">
            <div className="rounded-2xl bg-green-100 p-5">
              <h2 className="text-3xl font-bold text-green-700">{correct}</h2>
              <p>Correct</p>
            </div>

            <div className="rounded-2xl bg-red-100 p-5">
              <h2 className="text-3xl font-bold text-red-700">{wrong}</h2>
              <p>Wrong</p>
            </div>

            <div className="rounded-2xl bg-cyan-100 p-5">
              <h2 className="text-3xl font-bold text-cyan-700">
                {percentage}%
              </h2>
              <p>Score</p>
            </div>
          </div>

          <button
            onClick={restartQuiz}
            className="flex items-center gap-2 mx-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            <RotateCcw size={20} />
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  // FIX 2: Disable Next button if the user hasn't answered the current question yet
  const isNextDisabled = current === totalQuestions - 1 || !answers[current];

  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-500 via-blue-600 to-indigo-700 flex justify-center items-center p-5">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8">
        <div className="flex justify-between items-center mb-6">
          <span className="bg-green-600 text-white px-4 py-2 rounded-full">
            ✅ Correct : {correct}
          </span>

          <span className="bg-indigo-600 text-white px-4 py-2 rounded-full">
            Question {current + 1} / {totalQuestions}
          </span>

          <span className="bg-red-600 text-white px-4 py-2 rounded-full">
            ❌ Wrong : {wrong}
          </span>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-8">
          <div
            className="h-full bg-cyan-600 transition-all duration-500"
            style={{
              width: `${((current + 1) / totalQuestions) * 100}%`,
            }}
          />
        </div>

        <h2 className="text-2xl font-bold mb-8">{question.question}</h2>

        <div className="space-y-4">
          {question.options.map((option) => {
            const answered = answers[current];
            const isSelected = answered?.selected === option.name;
            const isCorrect = option.name === question.ans.name;

            let className =
              "border-2 rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all";

            if (answered) {
              if (isCorrect) {
                className += " bg-green-100 border-green-500";
              } else if (isSelected) {
                className += " bg-red-100 border-red-500";
              } else {
                className += " opacity-70";
              }
            } else {
              className += " hover:border-cyan-500 hover:scale-[1.02]";
            }

            return (
              <div
                key={option.name}
                onClick={() => handleAnswer(option)}
                className={className}
              >
                <div className="w-10 h-10 rounded-full border-2 border-cyan-600 flex items-center justify-center font-bold">
                  {option.name}
                </div>
                <div className="font-medium">{option.des}</div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center mt-10">
          <button
            onClick={prev}
            disabled={current === 0}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl transition ${
              current === 0
                ? "bg-gray-300 cursor-not-allowed text-gray-500"
                : "bg-cyan-600 hover:bg-cyan-700 text-white"
            }`}
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          <div className="text-gray-600 font-medium">
            Answered {Object.keys(answers).length} / {totalQuestions}
          </div>

          <button
            onClick={next}
            disabled={isNextDisabled}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl transition ${
              isNextDisabled
                ? "bg-gray-300 cursor-not-allowed text-gray-500"
                : "bg-cyan-600 hover:bg-cyan-700 text-white"
            }`}
          >
            Next
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizLayout;
