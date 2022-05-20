import { Navigate, useLocation } from "react-router-dom";

import { QuestionModel } from "backend/interfaces";

export const Results = () => {
  const location = useLocation();
  const { prev, userScore, questionArray, quesNum, selectedArr } =
    (location.state as {
      prev: string;
      userScore: number;
      questionArray: Array<QuestionModel>;
      quesNum: number;
      selectedArr: Array<string>;
    }) ?? {};

  return (
    <>
      {prev === "/quiz" ? (
        <div className="mg-m flex-center flex-col">
          <h3> Your SCORE: {userScore}/25</h3>

          {questionArray
            .filter((p, index) => index <= quesNum)
            .map((ques, index) => (
              <div className="flex-col flex-center mg-sm" key={ques.id}>
                <p className="mg-xs heading-text">
                  Q{index + 1}. {ques.statement}
                </p>
                <div className="flex-col flex-center mg-xs">
                  <>
                    {(["0", "1", "2", "3"] as ["0", "1", "2", "3"]).map(
                      (e, i) => {
                        return (
                          <div
                            key={e}
                            className={`pd-xs play-btn outline-btn mg-xs text-center ${
                              ques.correct_option === selectedArr[index] &&
                              ques.correct_option === e
                                ? "bg-prim-li"
                                : ques.correct_option === e
                                ? "bg-green-col"
                                : selectedArr[index] === e
                                ? "bg-red-col"
                                : ""
                            } `}
                          >
                            {ques[e]}
                          </div>
                        );
                      }
                    )}
                  </>
                </div>
              </div>
            ))}
          <ul className="prim-text">
            <li>
              Correct selected answers are highlighted in purple unless you
              missed it then its green.
            </li>
            <li>Incorrect selected answers are highlighted in red.</li>
          </ul>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
