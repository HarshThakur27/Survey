import React, { useState } from "react";
import { Card } from "./Card";

export const Survey = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const [comment, setComment] = useState("");

  // Handle answer selection
  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    nextQuestion();
  };

  // Handle comment field change
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Navigate to the next question
  const nextQuestion = () => {
    if (index + 1 < reviews.length) {
      setIndex(index + 1);
    }
  };

  // Navigate to the previous question
  const previousQuestion = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  // Skip current question
  const handleSkip = (questionId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: "Skipped" }));
    nextQuestion();
  };

  // Handle submission
  const handleSubmit = () => {
    // Save answers and comment to local storage
    localStorage.setItem("surveyAnswers", JSON.stringify(answers));
    localStorage.setItem("surveyComment", comment);
    setCompleted(true);

    // Redirect after submission
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  if (completed) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <h2 className="text-2xl font-bold">Thank You for Your Time!</h2>
        <p className="text-gray-500 mt-2">Redirecting to the welcome screen...</p>
      </div>
    );
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card
        review={reviews[index]}
        handleAnswer={handleAnswer}
        currentQuestion={index + 1}
        totalQuestions={reviews.length}
        handleCommentChange={handleCommentChange}
        handleSubmit={handleSubmit}
        comment={comment}
      />

      {/* Navigation Buttons */}
      <div className="flex text-xl mt-5 gap-10 text-violet-400 font-bold mx-auto">
        {/* Previous Button */}
        <button
          onClick={previousQuestion}
          className={`cursor-pointer w-20 bg-gray-600 rounded-lg hover:text-violet-500 ${
            index === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={index === 0}
        >
          Prev
        </button>

        {/* Next or Submit Button */}
        {index + 1 === reviews.length ? null : (
          <button
            onClick={nextQuestion}
            className="cursor-pointer w-20 bg-gray-600 rounded-lg hover:text-violet-500"
          >
            Next
          </button>
        )}

        {/* Skip Button */}
        {index + 1 === reviews.length ? null : (
          <button
            onClick={() => handleSkip(reviews[index].id)}
            className="cursor-pointer w-20 bg-gray-600 rounded-lg hover:text-violet-500"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
};

export default Survey;
