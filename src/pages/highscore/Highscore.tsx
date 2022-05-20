import { getHighscore } from "apiCalls";
import { HighscoresModel } from "backend/interfaces";
import { HighscoreCard } from "components";
import { useEffect, useState } from "react";

export const Highscore = () => {
  const [highscores, setHighscores] = useState<Array<HighscoresModel>>();

  useEffect(() => {
    (async function () {
      const response = await getHighscore();
      console.log(response.data);
      setHighscores(response.data);
    })();
  }, []);

  return (
    <div className="flex-center flex-col mv-xl">
      <div className="flex-row spc-btwn w-30 w-50r bg-prim-li solid-btn ph-1 border-prim">
        <p className="heading-text">Username</p>
        <p className="heading-text">Highscore</p>
      </div>

      {highscores
        ?.sort((a, b) => b.score - a.score)
        .map((highScore) => (
          <HighscoreCard
            key={highScore.id}
            username={highScore.username}
            highscore={highScore.score}
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
