import { useState } from "react";

const questions = [
  // =========================
  // CHAMPIONS LEAGUE - 20
  // =========================

  {
    category: "Champions League",
    question: "Which club has won the most UEFA Champions League titles?",
    answers: ["Barcelona", "Real Madrid", "AC Milan", "Liverpool"],
    correct: "Real Madrid",
  },
  {
    category: "Champions League",
    question: "Which club won the 2024 Champions League?",
    answers: ["Real Madrid", "Manchester City", "Borussia Dortmund", "Bayern Munich"],
    correct: "Real Madrid",
  },
  {
    category: "Champions League",
    question: "Who scored the winning goal in the 1999 Champions League final?",
    answers: ["Ronaldo", "Ole Gunnar Solskjaer", "Zidane", "Beckham"],
    correct: "Ole Gunnar Solskjaer",
  },
  {
    category: "Champions League",
    question: "Which English club won the 2012 Champions League?",
    answers: ["Manchester United", "Chelsea", "Liverpool", "Arsenal"],
    correct: "Chelsea",
  },
  {
    category: "Champions League",
    question: "Which club won the 2005 Champions League final after coming back from 3-0 down?",
    answers: ["Liverpool", "Milan", "Barcelona", "Arsenal"],
    correct: "Liverpool",
  },
  {
    category: "Champions League",
    question: "Who scored the famous winning goal for Real Madrid in the 2002 final?",
    answers: ["Raul", "Zinedine Zidane", "Ronaldo", "Figo"],
    correct: "Zinedine Zidane",
  },
  {
    category: "Champions League",
    question: "Which club did Barcelona beat in the 2011 Champions League final?",
    answers: ["Chelsea", "Manchester United", "Bayern Munich", "Real Madrid"],
    correct: "Manchester United",
  },
  {
    category: "Champions League",
    question: "Which Italian club won the Champions League in 2010?",
    answers: ["Juventus", "Inter Milan", "AC Milan", "Roma"],
    correct: "Inter Milan",
  },
  {
    category: "Champions League",
    question: "Which club won the 2020 Champions League?",
    answers: ["PSG", "Bayern Munich", "Liverpool", "Manchester City"],
    correct: "Bayern Munich",
  },
  {
    category: "Champions League",
    question: "Who is famous for scoring a bicycle kick against Juventus in the 2018 Champions League?",
    answers: ["Messi", "Ronaldo", "Bale", "Neymar"],
    correct: "Ronaldo",
  },
  {
    category: "Champions League",
    question: "Which club won the 2019 Champions League?",
    answers: ["Liverpool", "Tottenham", "Barcelona", "Ajax"],
    correct: "Liverpool",
  },
  {
    category: "Champions League",
    question: "Which club did Liverpool beat in the 2019 final?",
    answers: ["Tottenham", "Manchester City", "Barcelona", "Ajax"],
    correct: "Tottenham",
  },
  {
    category: "Champions League",
    question: "Which club won the 2023 Champions League?",
    answers: ["Manchester City", "Inter Milan", "Real Madrid", "Bayern Munich"],
    correct: "Manchester City",
  },
  {
    category: "Champions League",
    question: "Which player is known as 'Mr. Champions League' and holds the competition scoring record?",
    answers: ["Messi", "Cristiano Ronaldo", "Lewandowski", "Benzema"],
    correct: "Cristiano Ronaldo",
  },
  {
    category: "Champions League",
    question: "Which club has won the Champions League three times in a row from 2016 to 2018?",
    answers: ["Barcelona", "Real Madrid", "Bayern Munich", "Milan"],
    correct: "Real Madrid",
  },
  {
    category: "Champions League",
    question: "Which German club won the Champions League in 1997?",
    answers: ["Bayern Munich", "Borussia Dortmund", "Hamburg", "Leverkusen"],
    correct: "Borussia Dortmund",
  },
  {
    category: "Champions League",
    question: "Which club won the 2006 Champions League?",
    answers: ["Barcelona", "Arsenal", "Milan", "Chelsea"],
    correct: "Barcelona",
  },
  {
    category: "Champions League",
    question: "Who was Barcelona's manager when they won the 2011 Champions League?",
    answers: ["Luis Enrique", "Pep Guardiola", "Frank Rijkaard", "Xavi"],
    correct: "Pep Guardiola",
  },
  {
    category: "Champions League",
    question: "Which club won the Champions League in 1993?",
    answers: ["Marseille", "Milan", "Ajax", "Barcelona"],
    correct: "Marseille",
  },
  {
    category: "Champions League",
    question: "Which club won the Champions League in 2013?",
    answers: ["Dortmund", "Bayern Munich", "Barcelona", "Real Madrid"],
    correct: "Bayern Munich",
  },

  // =========================
  // WORLD CUP - 20
  // =========================

  {
    category: "World Cup",
    question: "Which country has won the most FIFA World Cups?",
    answers: ["Germany", "Brazil", "Argentina", "Italy"],
    correct: "Brazil",
  },
  {
    category: "World Cup",
    question: "Who won the 2022 FIFA World Cup?",
    answers: ["France", "Argentina", "Brazil", "Croatia"],
    correct: "Argentina",
  },
  {
    category: "World Cup",
    question: "Who won the 2018 FIFA World Cup?",
    answers: ["France", "Croatia", "Germany", "Brazil"],
    correct: "France",
  },
  {
    category: "World Cup",
    question: "Who won the 2014 FIFA World Cup?",
    answers: ["Argentina", "Germany", "Brazil", "Netherlands"],
    correct: "Germany",
  },
  {
    category: "World Cup",
    question: "Which country hosted the 2022 World Cup?",
    answers: ["Russia", "Qatar", "UAE", "Saudi Arabia"],
    correct: "Qatar",
  },
  {
    category: "World Cup",
    question: "Who scored the winning goal in the 2014 World Cup final?",
    answers: ["Thomas Muller", "Mario Gotze", "Miroslav Klose", "Toni Kroos"],
    correct: "Mario Gotze",
  },
  {
    category: "World Cup",
    question: "Which player scored a hat-trick in the 2022 World Cup final?",
    answers: ["Messi", "Mbappe", "Giroud", "Di Maria"],
    correct: "Mbappe",
  },
  {
    category: "World Cup",
    question: "Which country won the first World Cup in 1930?",
    answers: ["Brazil", "Uruguay", "Argentina", "Italy"],
    correct: "Uruguay",
  },
  {
    category: "World Cup",
    question: "Which country won the 2006 World Cup?",
    answers: ["France", "Italy", "Germany", "Brazil"],
    correct: "Italy",
  },
  {
    category: "World Cup",
    question: "Which country won the 2010 World Cup?",
    answers: ["Spain", "Netherlands", "Germany", "Brazil"],
    correct: "Spain",
  },
  {
    category: "World Cup",
    question: "Who scored Spain's winning goal in the 2010 World Cup final?",
    answers: ["Xavi", "Iniesta", "Villa", "Torres"],
    correct: "Iniesta",
  },
  {
    category: "World Cup",
    question: "Who won the Golden Ball at the 2022 World Cup?",
    answers: ["Mbappe", "Messi", "Modric", "Neymar"],
    correct: "Messi",
  },
  {
    category: "World Cup",
    question: "Which country finished runner-up at the 2022 World Cup?",
    answers: ["Croatia", "France", "Brazil", "Morocco"],
    correct: "France",
  },
  {
    category: "World Cup",
    question: "Which African country became the first to reach a World Cup semi-final?",
    answers: ["Egypt", "Morocco", "Ghana", "Cameroon"],
    correct: "Morocco",
  },
  {
    category: "World Cup",
    question: "Which player is the all-time top scorer in World Cup history?",
    answers: ["Pele", "Ronaldo", "Miroslav Klose", "Messi"],
    correct: "Miroslav Klose",
  },
  {
    category: "World Cup",
    question: "Which country won the 1998 World Cup?",
    answers: ["France", "Brazil", "Germany", "Italy"],
    correct: "France",
  },
  {
    category: "World Cup",
    question: "Who won the 1986 World Cup?",
    answers: ["Argentina", "Germany", "Brazil", "Italy"],
    correct: "Argentina",
  },
  {
    category: "World Cup",
    question: "Which legendary Argentine player starred at the 1986 World Cup?",
    answers: ["Messi", "Maradona", "Batistuta", "Riquelme"],
    correct: "Maradona",
  },
  {
    category: "World Cup",
    question: "Which country won the 2002 World Cup?",
    answers: ["Germany", "Brazil", "Italy", "Argentina"],
    correct: "Brazil",
  },
  {
    category: "World Cup",
    question: "Which two countries hosted the 2002 World Cup?",
    answers: [
      "Japan and South Korea",
      "China and Japan",
      "South Korea and China",
      "Japan and Australia",
    ],
    correct: "Japan and South Korea",
  },

  // =========================
  // EGYPTIAN PREMIER LEAGUE - 20
  // =========================

  {
    category: "Egyptian League",
    question: "Which club has won the most Egyptian Premier League titles?",
    answers: ["Zamalek", "Al Ahly", "Ismaily", "Pyramids"],
    correct: "Al Ahly",
  },
  {
    category: "Egyptian League",
    question: "Which club is nicknamed 'The Red Devils' in Egypt?",
    answers: ["Zamalek", "Al Ahly", "Ismaily", "Al Masry"],
    correct: "Al Ahly",
  },
  {
    category: "Egyptian League",
    question: "Which club is known as 'The White Knights'?",
    answers: ["Al Ahly", "Zamalek", "Pyramids", "Ismaily"],
    correct: "Zamalek",
  },
  {
    category: "Egyptian League",
    question: "Which Egyptian club is based in Ismailia?",
    answers: ["Ismaily", "Al Masry", "Zamalek", "Future"],
    correct: "Ismaily",
  },
  {
    category: "Egyptian League",
    question: "Which club plays its home matches at Cairo International Stadium?",
    answers: ["Al Ahly", "Al Masry", "Ismaily", "All of these"],
    correct: "All of these",
  },
  {
    category: "Egyptian League",
    question: "Which club is based in Port Said?",
    answers: ["Al Masry", "Ismaily", "Zamalek", "ENPPI"],
    correct: "Al Masry",
  },
  {
    category: "Egyptian League",
    question: "Which Egyptian club is traditionally associated with Alexandria?",
    answers: ["Al Ittihad Alexandria", "Zamalek", "Al Ahly", "Pyramids"],
    correct: "Al Ittihad Alexandria",
  },
  {
    category: "Egyptian League",
    question: "What color is strongly associated with Al Ahly?",
    answers: ["Blue", "Red", "Yellow", "Green"],
    correct: "Red",
  },
  {
    category: "Egyptian League",
    question: "What color is strongly associated with Zamalek?",
    answers: ["White", "Red", "Blue", "Black"],
    correct: "White",
  },
  {
    category: "Egyptian League",
    question: "Which club won the Egyptian league title in the 2001-02 season?",
    answers: ["Zamalek", "Al Ahly", "Ismaily", "Al Masry"],
    correct: "Ismaily",
  },
  {
    category: "Egyptian League",
    question: "Which Egyptian club is based in Suez?",
    answers: ["Petrojet", "Al Ahly", "Zamalek", "Al Masry"],
    correct: "Petrojet",
  },
  {
    category: "Egyptian League",
    question: "Which club is known as the 'Dervishes'?",
    answers: ["Ismaily", "Zamalek", "Al Ahly", "Al Masry"],
    correct: "Ismaily",
  },
  {
    category: "Egyptian League",
    question: "Which Cairo club traditionally wears red shirts?",
    answers: ["Al Ahly", "Zamalek", "ENPPI", "El Gouna"],
    correct: "Al Ahly",
  },
  {
    category: "Egyptian League",
    question: "Which Cairo club traditionally wears white shirts?",
    answers: ["Al Ahly", "Zamalek", "Pyramids", "National Bank"],
    correct: "Zamalek",
  },
  {
    category: "Egyptian League",
    question: "Which club is based in Damietta?",
    answers: ["Damietta FC", "Al Ahly", "Ismaily", "Zamalek"],
    correct: "Damietta FC",
  },
  {
    category: "Egyptian League",
    question: "Which Egyptian club is based in Giza?",
    answers: ["Zamalek", "Al Masry", "Ismaily", "Al Ittihad"],
    correct: "Zamalek",
  },
  {
    category: "Egyptian League",
    question: "Which club is one of the traditional giants of Egyptian football?",
    answers: ["Al Ahly", "Zamalek", "Both", "Neither"],
    correct: "Both",
  },
  {
    category: "Egyptian League",
    question: "Which Egyptian club has a rivalry with Al Ahly known as the Cairo Derby?",
    answers: ["Ismaily", "Zamalek", "Al Masry", "Pyramids"],
    correct: "Zamalek",
  },
  {
    category: "Egyptian League",
    question: "Which Egyptian club is commonly called the 'Green Eagle'?",
    answers: ["Al Masry", "Al Ahly", "Zamalek", "Ismaily"],
    correct: "Al Masry",
  },
  {
    category: "Egyptian League",
    question: "Which city is home to Al Masry?",
    answers: ["Cairo", "Port Said", "Alexandria", "Ismailia"],
    correct: "Port Said",
  },

  // =========================
  // PREMIER LEAGUE - 20
  // =========================

  {
    category: "Premier League",
    question: "Which club has won the most Premier League titles?",
    answers: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"],
    correct: "Manchester United",
  },
  {
    category: "Premier League",
    question: "Which club won the Premier League in the 2015-16 season?",
    answers: ["Arsenal", "Leicester City", "Chelsea", "Tottenham"],
    correct: "Leicester City",
  },
  {
    category: "Premier League",
    question: "Who is the Premier League's all-time top scorer?",
    answers: ["Harry Kane", "Alan Shearer", "Wayne Rooney", "Sergio Aguero"],
    correct: "Alan Shearer",
  },
  {
    category: "Premier League",
    question: "Which club completed an unbeaten Premier League season in 2003-04?",
    answers: ["Chelsea", "Arsenal", "Manchester United", "Liverpool"],
    correct: "Arsenal",
  },
  {
    category: "Premier League",
    question: "Which club is known as the 'Red Devils'?",
    answers: ["Liverpool", "Manchester United", "Arsenal", "Leicester"],
    correct: "Manchester United",
  },
  {
    category: "Premier League",
    question: "Which club plays at Anfield?",
    answers: ["Liverpool", "Everton", "Manchester City", "Chelsea"],
    correct: "Liverpool",
  },
  {
    category: "Premier League",
    question: "Which club plays at Stamford Bridge?",
    answers: ["Arsenal", "Chelsea", "Tottenham", "West Ham"],
    correct: "Chelsea",
  },
  {
    category: "Premier League",
    question: "Which club plays at the Emirates Stadium?",
    answers: ["Arsenal", "Chelsea", "Tottenham", "Liverpool"],
    correct: "Arsenal",
  },
  {
    category: "Premier League",
    question: "Which club plays at Old Trafford?",
    answers: ["Manchester City", "Manchester United", "Liverpool", "Everton"],
    correct: "Manchester United",
  },
  {
    category: "Premier League",
    question: "Which club won the first Premier League title in 1992-93?",
    answers: ["Blackburn Rovers", "Manchester United", "Arsenal", "Liverpool"],
    correct: "Manchester United",
  },
  {
    category: "Premier League",
    question: "Who scored 36 Premier League goals in the 2022-23 season?",
    answers: ["Mohamed Salah", "Erling Haaland", "Harry Kane", "Son Heung-min"],
    correct: "Erling Haaland",
  },
  {
    category: "Premier League",
    question: "Which club won the Premier League in 2015-16?",
    answers: ["Leicester City", "Chelsea", "Arsenal", "Manchester City"],
    correct: "Leicester City",
  },
  {
    category: "Premier League",
    question: "Which club is based in Liverpool and wears blue?",
    answers: ["Everton", "Liverpool", "Manchester City", "Chelsea"],
    correct: "Everton",
  },
  {
    category: "Premier League",
    question: "Which club is known as the 'Citizens'?",
    answers: ["Manchester City", "Manchester United", "Arsenal", "Chelsea"],
    correct: "Manchester City",
  },
  {
    category: "Premier League",
    question: "Who is Liverpool's famous Egyptian forward?",
    answers: ["Mohamed Elneny", "Mohamed Salah", "Omar Marmoush", "Trezeguet"],
    correct: "Mohamed Salah",
  },
  {
    category: "Premier League",
    question: "Which club won the 2020-21 Premier League title?",
    answers: ["Liverpool", "Manchester City", "Manchester United", "Chelsea"],
    correct: "Manchester City",
  },
  {
    category: "Premier League",
    question: "Which club won the 2019-20 Premier League title?",
    answers: ["Liverpool", "Manchester City", "Chelsea", "Leicester City"],
    correct: "Liverpool",
  },
  {
    category: "Premier League",
    question: "Which club won the 2003-04 Premier League title unbeaten?",
    answers: ["Arsenal", "Chelsea", "Manchester United", "Liverpool"],
    correct: "Arsenal",
  },
  {
    category: "Premier League",
    question: "Which London club plays at Tottenham Hotspur Stadium?",
    answers: ["West Ham", "Tottenham Hotspur", "Chelsea", "Arsenal"],
    correct: "Tottenham Hotspur",
  },
  {
    category: "Premier League",
    question: "Which club is famous for the 'You'll Never Walk Alone' anthem?",
    answers: ["Liverpool", "Arsenal", "Chelsea", "Manchester United"],
    correct: "Liverpool",
  },

  // =========================
  // LA LIGA - 20
  // =========================

  {
    category: "La Liga",
    question: "Which club has won the most La Liga titles?",
    answers: ["Barcelona", "Real Madrid", "Atletico Madrid", "Valencia"],
    correct: "Real Madrid",
  },
  {
    category: "La Liga",
    question: "Which club is known as Los Blancos?",
    answers: ["Barcelona", "Real Madrid", "Atletico Madrid", "Sevilla"],
    correct: "Real Madrid",
  },
  {
    category: "La Liga",
    question: "Which club is known as Blaugrana?",
    answers: ["Barcelona", "Real Madrid", "Valencia", "Atletico Madrid"],
    correct: "Barcelona",
  },
  {
    category: "La Liga",
    question: "Which stadium is the traditional home of Real Madrid?",
    answers: ["Camp Nou", "Santiago Bernabeu", "Metropolitano", "Mestalla"],
    correct: "Santiago Bernabeu",
  },
  {
    category: "La Liga",
    question: "Which stadium is associated with Barcelona?",
    answers: ["Camp Nou", "Bernabeu", "Mestalla", "Ramon Sanchez-Pizjuan"],
    correct: "Camp Nou",
  },
  {
    category: "La Liga",
    question: "Which player holds the record for most La Liga goals?",
    answers: ["Cristiano Ronaldo", "Lionel Messi", "Benzema", "Raul"],
    correct: "Lionel Messi",
  },
  {
    category: "La Liga",
    question: "Which club won La Liga in 2020-21?",
    answers: ["Real Madrid", "Barcelona", "Atletico Madrid", "Sevilla"],
    correct: "Atletico Madrid",
  },
  {
    category: "La Liga",
    question: "Which club won La Liga in 2022-23?",
    answers: ["Real Madrid", "Barcelona", "Atletico Madrid", "Girona"],
    correct: "Barcelona",
  },
  {
    category: "La Liga",
    question: "Who is Barcelona's historic Argentine superstar?",
    answers: ["Maradona", "Messi", "Aguero", "Di Maria"],
    correct: "Messi",
  },
  {
    category: "La Liga",
    question: "Which club plays in Seville and wears red and white?",
    answers: ["Sevilla", "Real Betis", "Valencia", "Villarreal"],
    correct: "Sevilla",
  },
  {
    category: "La Liga",
    question: "Which club is known as Los Colchoneros?",
    answers: ["Real Madrid", "Atletico Madrid", "Barcelona", "Sevilla"],
    correct: "Atletico Madrid",
  },
  {
    category: "La Liga",
    question: "Which club plays at Mestalla?",
    answers: ["Valencia", "Barcelona", "Sevilla", "Villarreal"],
    correct: "Valencia",
  },
  {
    category: "La Liga",
    question: "Who won the Ballon d'Or multiple times while playing for Barcelona?",
    answers: ["Messi", "Casillas", "Ramos", "Xavi"],
    correct: "Messi",
  },
  {
    category: "La Liga",
    question: "Which former Real Madrid player is famous for the number 7 shirt?",
    answers: ["Cristiano Ronaldo", "Xavi", "Iniesta", "Busquets"],
    correct: "Cristiano Ronaldo",
  },
  {
    category: "La Liga",
    question: "Which Spanish club is based in Villarreal?",
    answers: ["Villarreal CF", "Valencia", "Sevilla", "Getafe"],
    correct: "Villarreal CF",
  },
  {
    category: "La Liga",
    question: "Which club is nicknamed the Yellow Submarine?",
    answers: ["Villarreal", "Valencia", "Barcelona", "Atletico Madrid"],
    correct: "Villarreal",
  },
  {
    category: "La Liga",
    question: "Which two clubs contest El Clasico?",
    answers: [
      "Real Madrid and Barcelona",
      "Barcelona and Atletico Madrid",
      "Real Madrid and Sevilla",
      "Valencia and Barcelona",
    ],
    correct: "Real Madrid and Barcelona",
  },
  {
    category: "La Liga",
    question: "Which club is from Bilbao and has a famous Basque identity?",
    answers: ["Athletic Club", "Real Sociedad", "Valencia", "Sevilla"],
    correct: "Athletic Club",
  },
  {
    category: "La Liga",
    question: "Which Spanish club is associated with the red-and-white striped shirt?",
    answers: ["Atletico Madrid", "Barcelona", "Real Madrid", "Villarreal"],
    correct: "Atletico Madrid",
  },
  {
    category: "La Liga",
    question: "Which club did Xavi manage after retiring as a player?",
    answers: ["Barcelona", "Real Madrid", "Valencia", "Sevilla"],
    correct: "Barcelona",
  },
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function createGameQuestions() {
  // Shuffle all 100 questions
  const shuffled = shuffle(questions);

  // First 10 = Player 1
  const player1 = shuffled.slice(0, 10);

  // Next 10 = Player 2
  const player2 = shuffled.slice(10, 20);

  return {
    player1,
    player2,
  };
}

function App() {
  const [gameQuestions, setGameQuestions] = useState(createGameQuestions());

  const [player, setPlayer] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [scores, setScores] = useState({
    1: 0,
    2: 0,
  });

  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const currentQuestions =
    player === 1
      ? gameQuestions.player1
      : gameQuestions.player2;

  const currentQuestion = currentQuestions[questionIndex];

  const answerQuestion = (answer) => {
    if (answered) return;

    setSelected(answer);
    setAnswered(true);

    if (answer === currentQuestion.correct) {
      setScores((old) => ({
        ...old,
        [player]: old[player] + 1,
      }));
    }
  };

  const nextQuestion = () => {
    if (questionIndex < 9) {
      setQuestionIndex((old) => old + 1);
      setSelected(null);
      setAnswered(false);
      return;
    }

    // Player 1 finished
    if (player === 1) {
      setPlayer(2);
      setQuestionIndex(0);
      setSelected(null);
      setAnswered(false);
      return;
    }

    // Player 2 finished
    setGameFinished(true);
  };

  const newGame = () => {
    setGameQuestions(createGameQuestions());
    setPlayer(1);
    setQuestionIndex(0);
    setScores({
      1: 0,
      2: 0,
    });
    setSelected(null);
    setAnswered(false);
    setGameFinished(false);
  };

  // =========================
  // FINAL SCREEN
  // =========================

  if (gameFinished) {
    let winner = "Draw!";

    if (scores[1] > scores[2]) {
      winner = "Player 1 Wins! 🏆";
    }

    if (scores[2] > scores[1]) {
      winner = "Player 2 Wins! 🏆";
    }

    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-6">
        <div className="w-full max-w-xl rounded-3xl bg-white p-8 text-center shadow-2xl">
          <div className="mb-4 text-7xl">🏆</div>

          <h1 className="mb-8 text-4xl font-black text-slate-900">
            {winner}
          </h1>

          <div className="mb-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-blue-100 p-6">
              <div className="font-bold text-blue-700">
                Player 1
              </div>

              <div className="mt-2 text-5xl font-black text-blue-600">
                {scores[1]}
              </div>
            </div>

            <div className="rounded-2xl bg-red-100 p-6">
              <div className="font-bold text-red-700">
                Player 2
              </div>

              <div className="mt-2 text-5xl font-black text-red-600">
                {scores[2]}
              </div>
            </div>
          </div>

          <button
            onClick={newGame}
            className="w-full rounded-2xl bg-blue-600 px-6 py-4 text-lg font-black text-white transition hover:bg-blue-700"
          >
            New Game 🔄
          </button>
        </div>
      </div>
    );
  }

  // =========================
  // QUIZ
  // =========================

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-4 text-white md:p-8">

      <div className="mx-auto max-w-4xl">

        {/* HEADER */}

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black md:text-4xl">
              ⚽ Football Quiz
            </h1>

            <p className="mt-1 text-slate-400">
              Player {player}'s turn
            </p>
          </div>

          <div className="flex gap-3">
            <div className="rounded-2xl bg-blue-600 px-5 py-3">
              <span className="text-sm">
                Player 1
              </span>

              <div className="text-2xl font-black">
                {scores[1]}
              </div>
            </div>

            <div className="rounded-2xl bg-red-600 px-5 py-3">
              <span className="text-sm">
                Player 2
              </span>

              <div className="text-2xl font-black">
                {scores[2]}
              </div>
            </div>
          </div>
        </div>

        {/* PROGRESS */}

        <div className="mb-6">
          <div className="mb-2 flex justify-between text-sm text-slate-400">
            <span>
              Question {questionIndex + 1} / 10
            </span>

            <span>
              {currentQuestion.category}
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className={`h-full transition-all duration-500 ${
                player === 1
                  ? "bg-blue-500"
                  : "bg-red-500"
              }`}
              style={{
                width: `${((questionIndex + 1) / 10) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* QUESTION */}

        <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl md:p-10">

          <div className="mb-6 flex items-center justify-between">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold">
              {currentQuestion.category}
            </span>

            <span className="font-bold text-slate-400">
              {questionIndex + 1}/10
            </span>
          </div>

          <h2 className="mb-8 text-center text-2xl font-black md:text-3xl">
            {currentQuestion.question}
          </h2>

          {/* ANSWERS */}

          <div className="grid gap-4 md:grid-cols-2">
            {currentQuestion.answers.map((answer) => {
              const isSelected = selected === answer;
              const isCorrect =
                answer === currentQuestion.correct;

              let style =
                "border-slate-200 bg-slate-50 hover:border-blue-400 hover:bg-blue-50";

              if (answered) {
                if (isCorrect) {
                  style =
                    "border-green-500 bg-green-100 text-green-800";
                } else if (isSelected) {
                  style =
                    "border-red-500 bg-red-100 text-red-800";
                } else {
                  style =
                    "border-slate-200 bg-slate-50 opacity-50";
                }
              }

              return (
                <button
                  key={answer}
                  onClick={() => answerQuestion(answer)}
                  className={`rounded-2xl border-2 p-5 text-left text-lg font-bold transition active:scale-[0.98] ${style}`}
                >
                  {answer}

                  {answered && isCorrect && (
                    <span className="float-right">
                      ✅
                    </span>
                  )}

                  {answered &&
                    isSelected &&
                    !isCorrect && (
                      <span className="float-right">
                        ❌
                      </span>
                    )}
                </button>
              );
            })}
          </div>

          {/* NEXT */}

          {answered && (
            <button
              onClick={nextQuestion}
              className={`mt-8 w-full rounded-2xl px-6 py-4 text-lg font-black text-white transition ${
                player === 1
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {questionIndex === 9
                ? player === 1
                  ? "Player 2's Turn →"
                  : "Show Results 🏆"
                : "Next Question →"}
            </button>
          )}
        </div>

        {/* INFO */}

        <div className="mt-5 text-center text-sm text-slate-500">
          100 questions • 10 questions per player • No repeats
        </div>

      </div>
    </div>
  );
}

export default App;
