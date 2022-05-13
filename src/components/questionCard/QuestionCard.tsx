export const QuestionCard = () => {
  return (
    <div className="flex-col mg-s">
      <p className="marg-un heading-text  ">
        Q1-I am a question that is very long indeed
      </p>
      <div className="flex-col flex-center mg-xs">
        <button
          className="pd-xs play-btn outline-btn mg-xs text-center"
          disabled={true}
        >
          Option One
        </button>
        <button
          className="pd-xs play-btn outline-btn mg-xs text-center"
          disabled={true}
        >
          Option two
        </button>
        <button
          className="pd-xs play-btn outline-btn mg-xs text-center"
          disabled={true}
        >
          Option three
        </button>
        <button
          className="pd-xs play-btn outline-btn mg-xs text-center"
          disabled={true}
        >
          Option four
        </button>
      </div>
    </div>
  );
};
