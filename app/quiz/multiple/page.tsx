"use client";
import QuizPlayer, { Quiz } from "@/components/quiz/quiz-player2";
import React from "react";
// Mocked quiz data
const mockQuizData: Quiz[] = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
    category: "Geography",
  },
  {
    question: "What is 2 + 2?",
    answer: "4",
    category: "Math",
  },
  // {
  //   question: 'Who wrote "Romeo and Juliet"?',
  //   answer: "William Shakespeare",
  //   category: "Literature",
  // },
];

export default function Page() {
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizPlayer
        quizData={mockQuizData}
        questionDurationInSeconds={5} // Adjust the durations as needed
        answerDurationInSeconds={3}
      />
    </div>
  );
}
