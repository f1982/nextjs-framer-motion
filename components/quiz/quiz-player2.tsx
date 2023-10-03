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
    <div>
      <h2>Quiz Player</h2>
      {showOver ? (
        <>
          <h1>Game over</h1>
          <button onClick={replay}>Replay</button>
        </>
      ) : (
        <>
          {showQuestion && (
            <div>
              <p>Category: {currentQuiz.category}</p>
              <p>Question: {currentQuiz.question}</p>
              <p>Countdown: {countdown} seconds</p>
            </div>
          )}
          {showAnswer && (
            <div>
              <p>Category: {currentQuiz.category}</p>
              <p>Answer: {currentQuiz.answer}</p>
              <p>Countdown: {countdown} seconds</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuizPlayer;
