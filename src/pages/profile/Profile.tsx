import { useDispatch } from "react-redux";
import { setAuth } from "userRedux";

export const Profile = () => {
  const dispatch = useDispatch();

  return (
    <div className="mv-l">
      <div className="flex-center flex-col mg-s">
        <img
          src="/assets/images/HTML.jpg"
          alt="profile image"
          className="avatar-l circle-avatar"
        />
        <p className="heading-text">Prerit Gupta</p>
      </div>

      <div className="flex-center flex-col">
        <div className="flex-center spc-btwn w-30 w-50r bg-prim-li solid-btn ph-1 border-prim mg-xs">
          <p className="heading-text ">Recently played </p>
        </div>
        {["HTML quiz", "CSS quiz"].map((item) => (
          <div className="bg-prim-li-hover w-30 w-50r border-prim ph-1 mg-xs">
            <p className="heading-text">{item}</p>
          </div>
        ))}
        {dummyData.map((i) => (
          <div className="flex-row spc-btwn w-30 w-50r border-prim ph-1 mg-xs">
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

const dummyData = [
  { tag: "Total Score", value: 30 },
  {
    tag: "Total quiz played",
    value: 3,
  },

  { tag: "Total correct answers", value: 12 },
  { tag: "Total incorrect answers", value: 3 },
];
