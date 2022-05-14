export const HighscoreCard = ({
  username,
  highscore,
}: {
  username: string;
  highscore: number;
}) => {
  return (
    <div className="flex-row spc-btwn w-30 w-50r border-prim ph-1 mg-xs">
      <p>{username}</p>
      <p>{highscore}pts</p>
    </div>
  );
};
