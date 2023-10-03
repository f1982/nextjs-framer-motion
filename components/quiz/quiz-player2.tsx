import React, { useEffect, useState } from "react";

export interface Quiz {
  question: string;
  answer: string;
  category: string;
}

interface QuizPlayerProps {
  quizData: Quiz[];
  questionDurationInSeconds: number;
  answerDurationInSeconds: number;
}

const QuizPlayer: React.FC<QuizPlayerProps> = ({
  quizData,
  questionDurationInSeconds,
  answerDurationInSeconds,
}) => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [countdown, setCountdown] = useState(questionDurationInSeconds);
  const [showOver, setShowOver] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);

      if (countdown === 0) {
        if (showQuestion) {
          setShowQuestion(false);
          setShowAnswer(true);
          setCountdown(answerDurationInSeconds);
        } else {
          nextQuiz();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [
    countdown,
    showQuestion,
    showAnswer,
    questionDurationInSeconds,
    answerDurationInSeconds,
  ]);

  const nextQuiz = () => {
    if (currentQuizIndex < quizData.length - 1) {
      setCurrentQuizIndex((prevIndex) => prevIndex + 1);
      setShowQuestion(true);
      setShowAnswer(false);
      setCountdown(questionDurationInSeconds);
    } else {
      // Display ending screen, provide a button to play again
      // You can implement this part according to your UI design
      setShowOver(true);
    }
  };

  const replay = () => {
    console.log("relay");
    setShowOver(false);
    setCurrentQuizIndex(0);
    setShowQuestion(true);
    setShowAnswer(false);
    setCountdown(questionDurationInSeconds);
  };

  const currentQuiz = quizData[currentQuizIndex];

  return (
    <div className="w-screen h-full flex-1 flex flex-col bg-slate-50">
      <h2 className="right-10 top-10">Quiz @ Emojiu.cc</h2>
      {showOver ? (
        <>
          <h1>Game over</h1>
          <button onClick={replay}>Replay</button>
        </>
      ) : (
        <>
          <h1 className="text-4xl">Number:{currentQuizIndex + 1}</h1>
          {showQuestion && (
            <QuestionView
              question={currentQuiz.question}
              percentage={countdown / questionDurationInSeconds}
            />
          )}
          {showAnswer && (
            <>
              <AnswerView answer={currentQuiz.answer}></AnswerView>
              <p>
                Countdown: {countdown}/{answerDurationInSeconds} seconds
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};

const QuestionView = ({
  question,
  percentage,
}: {
  question: string;
  percentage: number;
}) => {
  return (
    <div className="w-full flex-1 flex flex-col gap-9 justify-center items-center bg-slate-100">
      <p className="text-3xl">{question}</p>
      <p>{percentage * 100}% seconds</p>
      <ProgressBar progress={percentage} />
    </div>
  );
};

const AnswerView = ({ answer }: { answer: string }) => {
  return (
    <div className="w-full flex-1 flex flex-col gap-9 justify-center items-center bg-slate-100">
      <p className="text-3xl">Answer: {answer}</p>
    </div>
  );
};

// src/components/ProgressBar.tsx
// import React from 'react';
// import classNames from 'classnames';

interface ProgressBarProps {
  progress: number; // Progress percentage (0-100)
  color?: string; // Custom color (optional)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  const progressBarStyle = {
    width: `${progress * 100}%`,
  };

  return (
    <div className="w-[300px] rounded-xl border-yellow-300 border-4">
      <div
        className="h-9 rounded-lg bg-gray-300"
        style={progressBarStyle}
      ></div>
    </div>
  );
};

export default QuizPlayer;
