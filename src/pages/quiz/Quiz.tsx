import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "userRedux/store";

import { getQuestions } from "apiCalls";
import { CategoryModel, Level, QuestionModel } from "backend/interfaces";
import { QuestionCard } from "components";

export const Quiz = () => {
  const location = useLocation();

  const { category, level, prev } =
    (location.state as {
      category: CategoryModel;
      level: Level;
      prev: string;
    }) ?? {};

  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Array<QuestionModel>>([]);
  const [quesNum, setQuesNum] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [selectedArr, setSelectedArr] = useState<Array<string>>([]);
  const [time, setTime] = useState(NaN);
  const user = useSelector((state: RootState) => state.currentUser);

  function onVisibiltyChange() {
    navigate("/results", {
      state: {
        prev: "/quiz",
        userScore: userScore,
        questionArray: questions,
        quesNum: quesNum,
        category: category,
        selectedArr: selectedArr,
      },
    });
  }

  useEffect(() => {
    document.addEventListener("visibilitychange", onVisibiltyChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibiltyChange);
  }, []);

  useEffect(() => {
    window.onbeforeunload = () => {
      navigate("/");
    };
    return () => {
      window.onbeforeunload = () => {};
    };
  }, []);

  interface timerDetails {
    level: Level;
    time: number;
  }

  useEffect(() => {
    (async function () {
      const response = await getQuestions(user.encodedToken, {
        category: category.title,
        level: level,
      });
      setQuestions(response.data.questions);
      const timerDet = category.timer_detail.find(
        (i) => i.level === level
      ) as timerDetails;
      setTime(timerDet?.time);
    })();
  }, []);

  const questionElements = questions?.map((ques, i) => (
    <QuestionCard
      ques={ques}
      setQuesNum={setQuesNum}
      quesNum={quesNum}
      userScore={userScore}
      setUserScore={setUserScore}
      questions={questions}
      category={category}
      selectedArr={selectedArr}
      setSelectedArr={setSelectedArr}
      time={time}
    />
  ));

  return (
    <>
      {prev === "/rules" ? (
        <div className="flex-center flex-col mg-m">
          <>{questionElements[quesNum]}</>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
