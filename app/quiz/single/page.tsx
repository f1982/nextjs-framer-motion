import Countdown, { CountdownPlayer } from "@/components/counter";
import Counter from "@/components/counter";
import QuizPlayer from "@/components/quiz/quiz-player";
import App from "@/components/text-player";
import React from "react";

export interface QuizData {
  name: string;
  category: string;
  tag: string;
  description: string;
  question: string;
  answer: string;
}
const quizList: QuizData[] = [
  {
    name: "no 1",
    category: "movie",
    tag: "girl, movie",
    description: "what is movie?",
    question: "👩🚀",
    answer: "rocket girl",
  },
  {
    name: "no 2",
    category: "movie",
    tag: "girl, movie",
    description: "what is movie",
    question: "👩🐞",
    answer: "rocket girl",
  },
  {
    name: "no 3",
    category: "movie",
    tag: "girl, movie",
    description: "what is movie",
    question: "🙇‍♀️🐞",
    answer: "rocket girl",
  },
];

export default function Page() {
  console.log("Page");
  return (
    <div>
      <h1>Page</h1>
      {/* <Counter /> */}

      {/* <QuizPlayer data={quizList} /> */}
      {/* <CountdownPlayer /> */}
      <App />
    </div>
  );
}
