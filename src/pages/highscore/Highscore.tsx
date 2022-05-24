import { getHighscore } from "apiCalls";
import { HighscoresModel } from "backend/interfaces";
import { HighscoreCard, Loader } from "components";
import { useEffect, useState } from "react";

export const Highscore = () => {
  const [highscores, setHighscores] = useState<Array<HighscoresModel>>([]);

  useEffect(() => {
    (async function () {
      const response = await getHighscore();
      setHighscores(response.data);
    })();
  }, []);

  return (
    <>
      {highscores.length === 0 ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};
