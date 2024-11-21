import React, { useState, useEffect } from "react";
import reviews from "./data";
import { Survey } from "./component/Question";

const App = () => {
  const [showSurvey, setShowSurvey] = useState(false);

  useEffect(() => {
    // Delay showing the survey after 3 seconds
    const timer = setTimeout(() => {
      setShowSurvey(true);
    }, 3000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        {/* Welcome Animation */}
        {!showSurvey && (
          <div className="animate-welcome">
            <h1 className="text-5xl font-extrabold text-violet-500">Welcome</h1>
            <div className="bg-violet-500 h-[4px] w-1/4 mt-4 mx-auto"></div>
          </div>
        )}

        {/* Survey Component */}
        {showSurvey && <Survey reviews={reviews} />}
      </div>
    </div>
  );
};

export default App;

