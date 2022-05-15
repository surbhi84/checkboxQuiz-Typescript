import { HighscoreCard } from "components";

export const Highscore = () => {
  return (
    <div className="flex-center flex-col mh-xl">
      <div className="flex-row spc-btwn w-30 w-50r bg-prim-li solid-btn ph-1 border-prim">
        <p className="heading-text">Username</p>
        <p className="heading-text">Highscore</p>
      </div>
      {dummyHighscores.map((highscoreObj) => (
        <HighscoreCard
          username={highscoreObj.username}
          highscore={highscoreObj.highscore}
        />
      ))}
    </div>
  );
};

const dummyHighscores = [
  { username: "Ashley Baile", highscore: 50 },
  { username: "Prerit Gupta", highscore: 50 },
  { username: "Ron  Weasly", highscore: 40 },
  { username: "David Shaw", highscore: 30 },
];
