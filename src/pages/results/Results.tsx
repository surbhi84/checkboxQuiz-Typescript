import { QuestionCard } from "components";

export const Results = () => {
  return (
    <div className="mg-m flex-center flex-col">
      <h3> Your SCORE: 40/50</h3>
      {[1, 2, 3, 4].map((i) => (
        <QuestionCard />
      ))}
    </div>
  );
};
