import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Quiz = () => {
  const [stopWatch, setStopwatch] = useState<number>(30);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  const [selected, setSelected] = useState<string>();

  useEffect(() => {
    let id = setInterval(() => setStopwatch((p: number) => p - 1), 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (stopWatch === 0) {
      clearInterval(intervalId);
    }
  }, [stopWatch]);

  return (
    <div className="flex-center flex-col mg-m">
      <div className="circle-avatar bg-prim-li mg-s pd-xs">{stopWatch}s</div>

      <div className="flex-col mg-xs flex-center">
        <p className=" heading-text">
          Q1-I am a question hasdjasdjakj ankjdsnda hdajksjdkas d oaijsdjasner
          izxuciokzxj
        </p>
        <div className="flex-col gap-md">
          <button
            className="pd-xs play-btn outline-btn  text-center"
            onClick={() => setSelected("Option One")}
            disabled={stopWatch === 0}
          >
            Option One
          </button>
          <button
            className="pd-xs play-btn outline-btn  text-center"
            onClick={() => setSelected("Option two")}
            disabled={stopWatch === 0}
          >
            Option two
          </button>
          <button
            className="pd-xs play-btn outline-btn text-center"
            onClick={() => setSelected("Option three")}
            disabled={stopWatch === 0}
          >
            Option three
          </button>
          <button
            className="pd-xs play-btn outline-btn  text-center"
            onClick={() => setSelected("Option four")}
            disabled={stopWatch === 0}
          >
            Option four
          </button>
        </div>
      </div>
      {/* implemented as link for now */}
      <Link to={"/results"}>
        <button className="bg-prim-li play-btn outline-btn btn-md mg-s">
          Next
        </button>
      </Link>
    </div>
  );
};
