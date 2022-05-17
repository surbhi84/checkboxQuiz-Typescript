import { QuestionCard } from "components";
import { Navigate, useLocation } from "react-router-dom";

export const Results = () => {
  const location = useLocation();

  return (
    <>
      {(location.state as { prev: string })?.prev === "/quiz" ? (
        <div className="mg-m flex-center flex-col">
          <h3> Your SCORE: 40/50</h3>
          {[1, 2, 3, 4].map((i) => (
            <QuestionCard />
          ))}
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
