"use client";
import QuizPlayer, { Quiz } from "@/components/quiz/quiz-player2";
import React from "react";
// Mocked quiz data
const mockQuizData: Quiz[] = [
  {
    question: "🐞 🫣",
    answer: "Paris",
    category: "Geography",
  },
  {
    question: "👩 🚀 🫎",
    answer: "4",
    category: "Math",
  },
  {
    question: "🙂💅😘🙋‍♀️",
    answer: "William Shakespeare",
    category: "Literature",
  },
];

export default function Page() {
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizPlayer
        quizData={mockQuizData}
        title="guess the movie"
        questionDurationInSeconds={5} // Adjust the durations as needed
        answerDurationInSeconds={3}
      />
    </div>
  );
}
