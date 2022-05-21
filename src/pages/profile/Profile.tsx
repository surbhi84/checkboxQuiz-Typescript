import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "userRedux";
import { RootState } from "userRedux/store";

export const Profile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => {
    return state.currentUser.user;
  });

  const userInfoData = [
    { tag: "Total Score", value: userInfo.score },
    {
      tag: "Total quiz played",
      value: userInfo.quizPlayed,
    },

    { tag: "Total correct answers", value: userInfo.correctAnswered },
    { tag: "Total incorrect answers", value: userInfo.incorrectAnswered },
  ];

  return (
    <div className="mv-l">
      <div className="flex-center flex-col mg-s">
        <img
          src="/assets/images/HTML.jpg"
          alt="profile image"
          className="avatar-l circle-avatar"
        />
        <p className="heading-text">{userInfo.fname + " " + userInfo.lname}</p>
      </div>

      <div className="flex-center flex-col">
        <div className="flex-center spc-btwn w-30 w-50r bg-prim-li solid-btn ph-1 border-prim mg-xs">
          <p className="heading-text ">Recently played </p>
        </div>

        {userInfo.recentlyPlayed.map((item, index) => (
          <div
            key={index}
            className="bg-prim-li-hover w-30 w-50r border-prim ph-1 mg-xs"
          >
            <p className="heading-text">
              {item.category.title + " " + item.level}
            </p>
          </div>
        ))}

        {userInfoData.map((i) => (
          <div
            key={i.tag}
            className="flex-row spc-btwn w-30 w-50r border-prim ph-1 mg-xs"
          >
            <p className="heading-text">{i.tag}</p>
            <p className="heading-text">{i.value}</p>
          </div>
        ))}
        <button
          onClick={() => {
            localStorage.removeItem("token");
            dispatch(setAuth(false));
          }}
          className="play-btn-style outline-btn text-dec-none med-text mg-s"
        >
          Log out
        </button>
      </div>
    </div>
  );
};
