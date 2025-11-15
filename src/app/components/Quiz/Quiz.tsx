import OptionSelectionButton from '../OptionSelectionButton/OptionSelectionButton';
import NothingSelected from '../NothingSelected/NothingSelected';
import QuizScore from '../QuizScore/QuizScore';
import quizData from '@data/data.json';
import { Progress } from '@/app/components/ui/progress';
import { useState } from 'react';

interface quizProps {
  iconBackgroundColor: string;
  selectedQuiz: number;
  selectQuiz: (id: number) => void;
}

const Quiz = ({ iconBackgroundColor, selectedQuiz, selectQuiz }: quizProps) => {
  const [selected, setSelected] = useState([false, false, false, false]);
  const [question, nextQuestion] = useState(0);
  const [submitButtonColor, setSubmitButtonColor] = useState('bg-[#D394FA]');
  const [submitted, setSubmitted] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(4);
  const [score, setScore] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  function selectOption(index: number) {
    if (!submitted) {
      setSelected(selected.map((x, i) => (i == index ? true : false)));
      setShowWarning(false);
    }
    setSubmitButtonColor('hover:bg-[#D394FA] bg-purple-600');
  }
  function checkAnswer(newCorrectAnswer: number) {
    if (newCorrectAnswer == selected.indexOf(true)) {
      setScore(score + 1);
    }
  }
  function submitClicked() {
    const newCorrectAnswer = quizData.quizzes[selectedQuiz].questions[
      question
    ].options.indexOf(
      quizData.quizzes[selectedQuiz].questions[question].answer
    );
    setCorrectAnswer(newCorrectAnswer);
    if (selected.includes(true)) {
      if (!submitted) {
        setSubmitted(true);
        checkAnswer(newCorrectAnswer);
      } else if (
        question + 1 ==
        quizData.quizzes[selectedQuiz].questions.length
      ) {
        nextQuestion(question + 1);
      } else {
        nextQuestion(question + 1);
        setSelected([false, false, false, false]);
        setSubmitted(false);
        setSubmitButtonColor('bg-[#D394FA]');
        setCorrectAnswer(4);
      }
    } else {
      setShowWarning(true);
    }
  }

  if (question == quizData.quizzes[selectedQuiz].questions.length) {
    return (
      <QuizScore
        iconBackgroundColor={iconBackgroundColor}
        title={quizData.quizzes[selectedQuiz].title}
        quizLength={quizData.quizzes[selectedQuiz].questions.length}
        score={score}
        selectQuiz={selectQuiz}
        icon={quizData.quizzes[selectedQuiz].icon}
      />
    );
  }
  return (
    <main className="lg:flex-row lg:gap-25 flex flex-col gap-10 p-5">
      <div className="flex-1">
        <span className="italic text-blue-300">
          Question {question + 1} of{' '}
          {quizData.quizzes[selectedQuiz].questions.length}
        </span>
        <p className="dark:text-white md:text-4xl mt-5 text-blue-900 text-xl mb-7">
          {quizData.quizzes[selectedQuiz].questions[question].question}
        </p>
        <Progress
          value={
            (question / quizData.quizzes[selectedQuiz].questions.length) * 100
          }
        />
      </div>
      <div className="flex flex-col gap-5 flex-1">
        {quizData.quizzes[selectedQuiz].questions[question].options.map(
          (option, index) => (
            <OptionSelectionButton
              key={option}
              text={option}
              number={index}
              selected={selected[index]}
              submitted={submitted}
              correct={submitted && correctAnswer === index}
              answer={correctAnswer}
              onClick={() => selectOption(index)}
            />
          )
        )}
        <button
          onClick={submitClicked}
          className={`hover:cursor-pointer lg:text-xl text-white ${submitButtonColor} lg:py-5 py-3 rounded-xl`}
        >
          {!submitted ? 'Submit answer' : 'Next Question'}
        </button>
        {showWarning && <NothingSelected />}
      </div>
    </main>
  );
};

export default Quiz;
