import React, { useState } from 'react';
const Quiz = () => {
  const [questions, setQuestions] = useState([
    // Vos questions ici
    {
      text: " Au cours du dernier mois , à quel point avez-vous été dérangé par : Des souvenirs répétés, pénibles et involontaires de l'expérience stressante ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 3 // Indice de la réponse correcte
    },
    {
      text: " Au cours du dernier mois , à quel point avez-vous été dérangé par : Des rêves répétés et pénibles de l'expérience stressante ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: " Au cours du dernier mois , à quel point avez-vous été dérangé par : Se sentir ou agir soudainement comme si vous viviez à nouveau l’expérience stressante ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: " Au cours du dernier mois , à quel point avez-vous été dérangé par : Se sentir mal quand quelque chose vous rappelle l’événement ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: " Au cours du dernier mois , à quel point avez-vous été dérangé par : Avoir de fortes réactions physiques lorsque quelque chose vous rappelle l’événement (accélération cardiaque, difficulté respiratoire, sudation) ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: "Au cours du dernier mois , à quel point avez-vous été dérangé par : Essayer d’éviter les souvenirs, pensées, et sentiments liés à l’événement ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: "Au cours du dernier mois , à quel point avez-vous été dérangé par : Essayer d’éviter les personnes et les choses qui vous rappellent l’expérience stressante (lieux, personnes, activités, objets) ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: "Au cours du dernier mois , à quel point avez-vous été dérangé par : Des difficultés à vous rappeler des parties importantes de l’événement ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: "Au cours du dernier mois , à quel point avez-vous été dérangé par : Des croyances négatives sur vous-même, les autres, le monde (des croyances comme : je suis mauvais, j’ai quelque chose qui cloche, je ne peux avoir confiance en personne, le monde est dangereux) ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: "Au cours du dernier mois , à quel point avez-vous été dérangé par : Vous blâmer ou blâmer quelqu’un d’autre pour l’événement ou ce qui s’est produit ensuite ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: "Au cours du dernier mois , à quel point avez-vous été dérangé par : Avoir des sentiments négatifs intenses tels que peur, horreur, colère, culpabilité, ou honte ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: "Au cours du dernier mois , à quel point avez-vous été dérangé par : Perdre de l’intérêt pour des activités que vous aimiez auparavant ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: "Au cours du dernier mois , à quel point avez-vous été dérangé par : Vous sentir distant ou coupé des autres ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: "Au cours du dernier mois , à quel point avez-vous été dérangé par : Avoir du mal à éprouver des sentiments positifs (par exemple être  incapable de ressentir de la joie ou de l’amour envers vos proches) ? ",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: "Au cours du dernier mois , à quel point avez-vous été dérangé par : Comportement irritable, explosions de colère, ou agir agressivement ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: "Au cours du dernier mois , à quel point avez-vous été dérangé par : Prendre des risques inconsidérés ou encore avoir des conduites qui pourraient vous mettre en danger ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: " Au cours du dernier mois , à quel point avez-vous été dérangé par : Être en état de « super-alerte », hyper vigilant ou sur vos gardes ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: "Au cours du dernier mois , à quel point avez-vous été dérangé par : Sursauter facilement ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: "Au cours du dernier mois , à quel point avez-vous été dérangé par : Avoir du mal à vous concentrer ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    {
      text: "Au cours du dernier mois , à quel point avez-vous été dérangé par : Avoir du mal à trouver le sommeil ou à rester endormi ?",
      options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Extrêmement"],
      correctOptionIndex: 4 // Indice de la réponse correcte
    },
    // Ajoutez d'autres questions de la même manière
  ]);

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [totalScore, setTotalScore] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [clickedButtonIndex, setClickedButtonIndex] = useState(Array(questions.length).fill(-1));

  const handleAnswerSelect = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
    const newClickedButtonIndex = [...clickedButtonIndex];
    newClickedButtonIndex[currentQuestionIndex] = optionIndex;
    setClickedButtonIndex(newClickedButtonIndex);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      score += answer;
    });
    setTotalScore(score);
  };

  let message = null;
  if (totalScore !== null) {
    if (totalScore < 31) {
      message = "Félicitations ! Vous ne présentez aucun symptôme de stress post-traumatique. Pour en savoir plus sur le stress post-traumatique et le trauma, veuillez cliquer sur le bouton ci-dessous.";
    } else if (totalScore >= 31 && totalScore <= 33) {
      message = "Votre score indique qu'il y a un risque de stress post-traumatique probable.";
    } else {
      message = "Il est probable que vous présentiez des symptômes de stress post-traumatique. Nous vous recommandons de consulter un professionnel de la santé.";
    }
  }

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null));
    setTotalScore(null);
    setCurrentQuestionIndex(0);
    setClickedButtonIndex(Array(questions.length).fill(-1));
  };

  const handleLearnMore = () => {
    window.location.href = "/comprendre";
  };

  const handleConsultPsy = () => {
    // Ajoutez la logique pour consulter un professionnel de la santé ici
    console.log("Consultation d'un professionnel de la santé");
    window.location.href = "/Classes";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-200"> <br />
      <div className="w-full max-w-3xl  rounded-lg shadow-lg p-8 relative">
        <div className="mb-8 ">
          {totalScore !== null ? (
            <div className="flex flex-col items-center justify-center mb-8  ">
              <p className="text-3xl font-bold text-center mb-4" data-aos="fade-up-right" data-aos-duration="1000">Résultat du quiz</p>
              <p className="text-xl font-semibold text-teal-700" >Votre score total : {totalScore} / {questions.length * 4}</p>
              <p className="text-lg text-center mt-4">{message}</p>
              <div className="flex justify-between mt-7">
                {(totalScore < 31 || (totalScore >= 31 && totalScore <= 33)) && (
                  <button onClick={handleLearnMore} className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 mx-2  rounded-full" >
                    Voir plus d'informations
                  </button>
                )}
                {(totalScore > 31 || (totalScore >= 31 && totalScore <= 33)) && (
                  <button onClick={handleConsultPsy} className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-1 px-8 mx-2 rounded-full">
                    Consulter a un psy 
                  </button>
                )}
                <button onClick={handleReset} className="bg-rose-500 hover:bg-rose-400 text-white font-bold py-1 px-4 mx-2  rounded-full">
                  Réessayer
                </button>
                </div>
              </div>
            
          ) : (
            <>
              <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-right" data-aos-duration="1000">Quiz sur le stress post-traumatique</h1>
              <div className="mb-8"data-aos="fade-left" data-aos-duration="1000">
                <h3 className="text-lg font-semibold mb-4">{currentQuestionIndex + 1}. {questions[currentQuestionIndex].text}</h3>
                <div className="flex flex-col" data-aos="fade-up-right" data-aos-duration="1000">
                  {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswerSelect(optionIndex)}
                      className={`bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-full mb-4 transition-colors duration-300 ${
                        clickedButtonIndex[currentQuestionIndex] === optionIndex ? "bg-gray-500" : ""}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0} className="bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 px-4 rounded-full  mb-4 transition-colors duration-300" >
                  Précédent
                </button>
                <button onClick={handleNextQuestion} className="bg-rose-400 hover:bg-rose-300 text-white font-semibold py-2 px-4 rounded-full  mb-4 transition-colors duration-300">
                  {currentQuestionIndex === questions.length - 1 ? "Terminer" : "Suivant"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  );
};

export default Quiz;
