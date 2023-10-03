import { QuizData } from "@/app/quiz/single/page";
import { time } from "console";
import React, { useEffect, useState } from "react";

interface QuizProps {
  data: QuizData;
  duration: number;
  onTimeUp?: () => void;
}

const intervalDuration = 1000;

export default function QuizPresent({
  data,
  duration = 300,
  onTimeUp,
}: QuizProps) {
  const [currentTime, setCurrentTime] = useState<number>(duration);

  console.log("QuizPresent been render");

  // useEffect(() => {
  //   setCurrentTime(duration);
  // }, [duration, onTimeUp]);

  useEffect(() => {
    console.log("set interval");

    const interval = setInterval(() => {
      setCurrentTime((seconds: number) => {
        if (seconds > 0) {
          console.log("counting seconds: ", seconds);
          return seconds - 1;
        } else {
          clearInterval(interval);
          if (onTimeUp) {
            console.log("onTimeUp seconds: ", seconds);
            onTimeUp();
          }
          return 0;
        }
      });
    }, intervalDuration);
    return () => {
      console.log("clean interval");
      return clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>QuizPresent</h1>
      <div>{data.description}</div>
      <div>{data.question}</div>
      <div>{data.answer}</div>
      <DigitalMode current={currentTime} total={duration} />
    </div>
  );
}

const DigitalMode = ({
  current,
  total,
}: {
  current: number;
  total: number;
}) => {
  return (
    <div>
      {hhmmss(current)
        .split(":")
        .map((segment: string, index: number) => {
          return (
            <span key={index}>
              {index !== 0 && <span>:</span>}
              <span>{segment}</span>
            </span>
          );
        })}
    </div>
  );
};

function pad(num: number) {
  return ("0" + num).slice(-2);
}

function hhmmss(secs: number) {
  const minutes = Math.floor(secs / 60);
  secs = secs % 60;
  // const hours = Math.floor(minutes / 60)
  // minutes = minutes % 60
  return `${pad(minutes)}:${pad(secs)}`;
  // return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`
}
