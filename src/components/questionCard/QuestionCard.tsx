import { useEffect, useRef, useState } from "react";

export const QuestionCard = () => {
  const [stopWatch, setStopwatch] = useState<number>(30);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  const [selected, setSelected] = useState<string>();

  useEffect(() => {
    let id = setInterval(() => setStopwatch((p: number) => p - 1), 1000);
    console.log(id, "[]");
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (stopWatch === 0) {
      clearInterval(intervalId);
    }
  }, [stopWatch]);

  return (
    <div className="flex-center flex-col main">
      <div className="circle-avatar bg-prim-li mg-s pd-xs">{stopWatch}s</div>

      <p className="med-text mg-xs">Q1-I am a question</p>
      <div className="flex-col mg-xs">
        <button
          className="pd-xs play-btn outline-btn mg-xs text-center"
          onClick={() => setSelected("Option One")}
          disabled={stopWatch === 0}
        >
          Option One
        </button>
        <button
          className="pd-xs play-btn outline-btn mg-xs text-center"
          onClick={() => setSelected("Option two")}
          disabled={stopWatch === 0}
        >
          Option two
        </button>
        <button
          className="pd-xs play-btn outline-btn mg-xs text-center"
          onClick={() => setSelected("Option three")}
          disabled={stopWatch === 0}
        >
          Option three
        </button>
        <button
          className="pd-xs play-btn outline-btn mg-xs text-center"
          onClick={() => setSelected("Option four")}
          disabled={stopWatch === 0}
        >
          Option four
        </button>
      </div>
      <button
        className="bg-prim-li play-btn outline-btn btn-md mg-s"
        onClick={() => console.log(selected)}
      >
        Next
      </button>
    </div>
  );
};
