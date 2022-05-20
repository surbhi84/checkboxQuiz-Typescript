import { CategoryModel, Level } from "backend/interfaces";
import { useLocation, Link, Navigate } from "react-router-dom";
import "./rules.css";

export const Rules = () => {
  const location = useLocation();
  const { category = {}, level = "" } =
    (location.state as {
      category: CategoryModel;
      level: Level;
    }) ?? {};

  return (
    <>
      {
        category === {} || level === "" ? (
          <Navigate to="/" />
        ) : (
          //  <!-- Rules div -->
          <div className="rules-div flex-col flex-center text-just">
            <h2 className="prim-text marg-un">checkBox Rules</h2>
            {/* <!-- Rules --> */}
            <ol className="pd-l-none">
              <li className="mg-xs">Each question is worth 10 points.</li>

              <li className="mg-xs">
                Only one answer can be selected for each question.
              </li>

              <li className="mg-xs">
                There is no negative marking for wrong answers.
              </li>

              <li className="mg-xs">
                You will get 30 seconds for answering a easy level question, 45
                seconds for a medium level question and one minute for the hard
                level.
              </li>

              <li className="mg-xs">
                Once the timer expires you can't change your response.
              </li>

              <li className="mg-xs">
                You shouldn't switch tabs or windows, that will take you
                directly to results page with the marking for attempted
                questions.
              </li>

              <li className="mg-xs">
                Do not refresh or you will be disqualified from the quiz.
              </li>
            </ol>
            <label>
              <input type="checkbox" />I agree to checkBox Rules.
            </label>

            <div className="mg-s prim-text">
              Have fun learning and enjoy the quiz 😄
            </div>
            {/* <!-- end of rules --> */}
            <Link
              to="/quiz"
              state={{ prev: "/rules", category, level }}
              replace
              className="play-btn-style outline-btn text-dec-none med-text mg-s"
            >
              Start
            </Link>
          </div>
        )
        //  <!-- end of rules div -->
      }
    </>
  );
};
