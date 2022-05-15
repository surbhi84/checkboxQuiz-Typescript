import { useLocation, Link } from "react-router-dom";

export const Rules = () => {
  const location = useLocation();
  const { category, level } = location.state as {
    category: string;
    level: string;
  };

  return (
    <>
      {/* <!-- Rules div --> */}
      <div className="rules-div flex-col flex-center main text-just">
        <h2 className="prim-text marg-un">checkBox Rules</h2>
        {/* <!-- Rules --> */}
        <ol>
          <li className="mg-xs">Each question is worth 10 points.</li>
          <li className="mg-xs">
            Only one answer can be selected for each question.
          </li>
          <li className="mg-xs">
            You will get 30 seconds for answering a easy level question, 45
            seconds for a medium level question and one minute for the hard
            level.
          </li>
          <li className="mg-xs">
            There is no negative marking for wrong answers.
          </li>
        </ol>
        <label>
          <input type="checkbox" />I agree to checkBox Rules.
        </label>
        {/* <!-- end of rules --> */}
        <Link
          onClick={() => console.log("category:", category, "level:", level)}
          to="/quiz"
          className="play-btn-style outline-btn text-dec-none med-text mg-s"
        >
          Lets go!
        </Link>
      </div>
      {/* <!-- end of rules div --> */}
    </>
  );
};
