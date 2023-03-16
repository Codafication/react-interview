import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
  Link,
} from "react-router-dom";

import One from "./questions/1";
import OnePointOne from "./questions/1Point1";
import Two from "./questions/2";
import Four from "./questions/4";
import Three from "./questions/3"; // Flexbox CSS
import styled from "styled-components";

const cssTestSample = require("./assets/css-test.png");
const codaLogo = require("./assets/codafication-logo-light.png");

const QuestionField = styled.div`
  background-color: #f2cc85;
`;

const StyledButton = styled.button`
  background-color: #4d7298;
  color: #fff;
  display: inline-block;
  border-radius: 8px;
  border: 2px solid #77a6b6;
  height: 42px;
  width: 100%;
  font-size: 24px;
  margin: 20px;
  margin-top: 110px;
  cursor: pointer;
`;

const questions = [
  {
    instructions: [
      `There is a 'list' variable which is currently unused. Iterate this list Array and print the contained strings as <p> elements below.`,
    ],

    exercise: <One />,
  },
  {
    instructions: [
      `Use the list from the previous question. In addition, sort this array alphabetically in reverse order`,
    ],

    exercise: <OnePointOne />,
  },
  {
    instructions: [
      "Using React state, make the 'Toggle' button below toggle the visibility of the div below it.",
    ],
    exercise: <Two />,
  },
  {
    instructions: [
      "In this task, the list items are the buttons for a site. They should be laid out as a row, with an equal amount of space between each item.",
      "Your final result should look like the image below:",
    ],
    instructionsImagePath: cssTestSample,
    exercise: <Three />,
  },
  {
    instructions: [
      "Currently, items are printed from the 'list' variable no matter what.",
      "This task is to implement a text filter, using an HTML input, that will filter the items to display only the items containing the text entered into the input.",
      "For example, if I type 't', it should show items Two & Three, but if I type 'th', only Three should show.",
    ],
    exercise: <Four />,
  },
];

const Question = (props: any) => {
  const params = useParams();
  if (!params.number) throw new Error("No question number provided");
  const questionNumber = parseFloat(params.number);
  const question = questions[questionNumber - 1];
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ height: "600px" }}>
        <img
          src={codaLogo}
          style={{ height: "10%", width: "20%" }}
          alt="task"
        ></img>
        <h1>Question #{questionNumber}</h1>
        <QuestionField className="instructions">
          {question.instructions.map((instruction) => (
            <p key={instruction}>{instruction}</p>
          ))}
        </QuestionField>
        {question.instructionsImagePath && (
          <div>
            <img
              src={question.instructionsImagePath}
              style={{ height: "100%", width: "100%" }}
              alt="task"
            ></img>
          </div>
        )}
        <div style={{ backgroundColor: "#ccf0e9" }}>
          <section className="exercise">{question.exercise}</section>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        {questionNumber !== 1 && (
          <Link to={"/question/" + (questionNumber - 1)}>
            <StyledButton>Prev</StyledButton>
          </Link>
        )}
        {questionNumber !== questions.length && (
          <Link to={"/question/" + (questionNumber + 1)}>
            <StyledButton>Next</StyledButton>
          </Link>
        )}
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <img
          src={codaLogo}
          style={{ height: "100%", width: "20%" }}
          alt="task"
        ></img>
        <h1>Technical Assessment Test</h1>
        <h2>
          The test will have five questions and you have 45 minutes to complete
          the test.
        </h2>
        <h3>Click 'Begin Test' below to start the test. Good luck!</h3>
        <a href="question/1">
          <StyledButton>Begin Test</StyledButton>
        </a>
      </div>
    ),
  },
  {
    path: "question/:number",
    element: <Question />,
  },
]);

const App = () => {
  return (
    <main className="app">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
