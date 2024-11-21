


import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export const Card = ({
  review,
  handleAnswer,
  currentQuestion,
  totalQuestions,
  handleCommentChange,
  handleSubmit,
  comment,
}) => {
  return (
    <div className="flex flex-col md:relative">
      {/* Question Number */}
      <div className="text-center mt-4 text-slate-500">
        <p className="font-bold">
          Question {currentQuestion}/{totalQuestions}
        </p>
      </div>

      {/* Question Text */}
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>
      <div className="text-center mt-4 text-slate-500">{review.text}</div>

      {/* Conditional Rendering */}
      {currentQuestion === totalQuestions ? (
        <div className="mt-6">
          {/* Comment Text Field */}
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Add your comments here..."
            className="w-full p-3 border-2 border-gray-300 rounded-md mt-3"
          />
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-4"
          >
            Submit Survey
          </button>
        </div>
      ) : currentQuestion === totalQuestions - 1 ? (
        <div className="text-center mt-4 text-slate-500">
          {/* 10-point Rating Scale */}
          {Array.from({ length: 10 }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handleAnswer(review.id, i + 1)}
              className="m-1 px-3 py-1 bg-gray-300 rounded hover:bg-violet-500"
            >
              {i + 1}
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center mt-4 text-slate-500">
          {/* 5-point Rating Scale */}
          {Array.from({ length: 5 }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handleAnswer(review.id, i + 1)}
              className="m-1 px-3 py-1 bg-gray-300 rounded hover:bg-violet-500"
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
