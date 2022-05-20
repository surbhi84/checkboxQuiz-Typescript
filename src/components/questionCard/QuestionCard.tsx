import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { QuestionModel } from "backend/interfaces";

export const QuestionCard = ({
  ques,
  userScore,
  setUserScore,
  quesNum,
  setQuesNum,
  questions,
}: {
  ques: QuestionModel;
  userScore: number;
  setUserScore: React.Dispatch<React.SetStateAction<number>>;
  quesNum: number;
  setQuesNum: React.Dispatch<React.SetStateAction<number>>;
  questions: Array<QuestionModel>;
}) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>();
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  const [stopWatch, setStopwatch] = useState<number>(30);

  useEffect(() => {
    let id = setInterval(() => setStopwatch((p: number) => p - 1), 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [quesNum]);

  useEffect(() => {
    if (stopWatch === 0) {
      clearInterval(intervalId);
    }
  }, [stopWatch]);

  function nextBtnHandler() {
    setQuesNum((p) => (p <= 5 ? p + 1 : p));
    setSelected("4");
    setStopwatch(30);
    if (selected === ques.correct_option) {
      setUserScore((p) => p + 5);
    }
  }

  function quitBtnHandler() {
    navigate("/results", {
      state: {
        prev: "/quiz",
        userScore: selected === ques.correct_option ? userScore + 5 : userScore,
        questionArray: questions,
        quesNum: quesNum,
      },
      replace: true,
    });
  }

  return (
    <div key={ques.id} className="flex-col mg-xs flex-center">
      <div className="circle-avatar bg-prim-li mg-s pd-xs">{stopWatch}s</div>

      {/* question  */}
      <p className=" heading-text ">
        Q{quesNum + 1}. {ques.statement}
      </p>

      {/* question options */}
      <div className="flex-col gap-md">
        <button
          className={`pd-xs play-btn outline-btn text-center ${
            selected === "0" ? "bg-prim-li" : ""
          } `}
          onClick={() => setSelected("0")}
          disabled={stopWatch === 0}
        >
          {ques["0"]}
        </button>

        <button
          className={`pd-xs play-btn outline-btn text-center ${
            selected === "1" ? "bg-prim-li" : ""
          } `}
          onClick={() => setSelected("1")}
          disabled={stopWatch === 0}
        >
          {ques["1"]}
        </button>

        <button
          className={`pd-xs play-btn outline-btn text-center ${
            selected === "2" ? "bg-prim-li" : ""
          } `}
          onClick={() => setSelected("2")}
          disabled={stopWatch === 0}
        >
          {ques["2"]}
        </button>

        <button
          className={`pd-xs play-btn outline-btn text-center ${
            selected === "3" ? "bg-prim-li" : ""
          } `}
          onClick={() => setSelected("3")}
          disabled={stopWatch === 0}
        >
          {ques["3"]}
        </button>
      </div>

      <div className="flex-center">
        {/* quit button */}
        <button
          className="bg-prim-li play-btn outline-btn btn-md mg-m"
          onClick={quitBtnHandler}
        >
          {quesNum === questions.length - 1 ? "Next" : "Quit"}
        </button>

        {/* next button */}
        <button
          className={`bg-prim-li play-btn outline-btn btn-md mg-m ${
            quesNum === questions.length - 1 ? "d-none" : ""
          }`}
          onClick={nextBtnHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
};
