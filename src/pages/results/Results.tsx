import { Navigate, useLocation } from "react-router-dom";

import { QuestionModel } from "backend/interfaces";

export const Results = () => {
  const location = useLocation();
  const { prev, userScore, questionArray, quesNum } =
    (location.state as {
      prev: string;
      userScore: number;
      questionArray: Array<QuestionModel>;
      quesNum: number;
    }) ?? {};

  console.log(questionArray);

  return (
    <>
      {prev === "/quiz" ? (
        <div className="mg-m flex-center flex-col">
          <h3> Your SCORE: {userScore}/25</h3>
          <div className="prim-text">Correct answers are highlighted</div>
          {questionArray
            .filter((p, index) => index <= quesNum)
            .map((ques) => (
              <div className="flex-col flex-center mg-s" key={ques.id}>
                <p className="marg-un heading-text">{ques.statement}</p>
                <div className="flex-col flex-center mg-xs">
                  <div
                    className={`pd-xs play-btn outline-btn mg-xs text-center ${
                      ques.correct_option === "0" ? "bg-prim-li" : ""
                    } `}
                  >
                    {ques["0"]}
                  </div>
                  <div
                    className={`pd-xs play-btn outline-btn mg-xs text-center ${
                      ques.correct_option === "1" ? "bg-prim-li" : ""
                    } `}
                  >
                    {ques["1"]}
                  </div>
                  <div
                    className={`pd-xs play-btn outline-btn mg-xs text-center ${
                      ques.correct_option === "2" ? "bg-prim-li" : ""
                    } `}
                  >
                    {ques["2"]}
                  </div>
                  <div
                    className={`pd-xs play-btn outline-btn mg-xs text-center  ${
                      ques.correct_option === "3" ? "bg-prim-li" : ""
                    } `}
                  >
                    {ques["3"]}
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
