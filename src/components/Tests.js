import React, { useState, useEffect } from "react";

const questions = [
  {
    id: 1,
    question: "What is the square root of 49?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "7",
  },
  {
    id: 2,
    question: "What is 234 + 231?",
    options: ["465", "333", "422", "645"],
    correctAnswer: "465",
  },
  {
    id: 3,
    question: "What is 15 multiplied by 4?",
    options: ["45", "50", "55", "60"],
    correctAnswer: "60",
  },
  {
    id: 4,
    question: "What is the result of 30 divided by 5?",
    options: ["2", "5", "6", "10"],
    correctAnswer: "6",
  },
  {
    id: 5,
    question: "What is 8 squared?",
    options: ["8", "16", "24", "64"],
    correctAnswer: "64",
  },
  {
    id: 6,
    question: "What is 25 minus 12?",
    options: ["10", "11", "13", "14"],
    correctAnswer: "13",
  },
  {
    id: 7,
    question: "What is the cube root of 27?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "3",
  },
  {
    id: 8,
    question: "What is 7 times 9?",
    options: ["56", "63", "70", "77"],
    correctAnswer: "63",
  },
  {
    id: 9,
    question: "What is the result of 16 divided by 4?",
    options: ["2", "4", "6", "8"],
    correctAnswer: "4",
  },
  {
    id: 10,
    question: "What is the square root of 144?",
    options: ["12", "16", "18", "24"],
    correctAnswer: "12",
  },
];

export default function Tests() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(180); // 3 minutes

  useEffect(() => {
    if (started && remainingTime > 0) {
      const timer = setTimeout(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [started, remainingTime]);

  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleStart = () => {
    setStarted(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <h2
        style={{
          background: "linear-gradient(270deg, #800080 0%, #ff864c 100%)",
          color: "white",
          margin: "2px",
        }}
      >
        Math Quiz
      </h2>
      {!started && !submitted && <button onClick={handleStart}>Start</button>}
      {started && (
        <div>
          <p>Time Remaining: {formatTime(remainingTime)}</p>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
              {questions.map((question) => (
                <div
                  key={question.id}
                  style={{
                    padding: "10px",
                    border: "solid 2px red",
                    marginRight: "10px",
                    marginBottom: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      background:
                        "linear-gradient(270deg, #800080 0%, #ff864c 100%)",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    <b>{question.question}</b>
                  </p>
                  {question.options.map((option) => (
                    <div key={option} style={{ textAlign: "left" }}>
                      <label>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option}
                          checked={answers[question.id] === option}
                          onChange={() =>
                            handleOptionChange(question.id, option)
                          }
                          style={{ margin: "5px" }}
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <button type="submit" style={{ marginBottom: "10px" }}>Submit</button>
          </form>
        </div>
      )}
      {submitted && (
        <div>
          <h3>Results:</h3>
          <p>
            Score: {calculateScore()} / {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}
