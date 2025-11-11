import QuizSelectionButton from '../QuizSelectionButton/QuizSelectionButton';
import quizData from '@data/data.json';

type StartProps = {
  selectQuiz: (number: number) => void;
};

const Start = ({ selectQuiz }: StartProps) => {
  return (
    <div className="flex flex-col md:flex-row px-10">
      <div className="flex-1">
        <h1 className="dark:text-white text-blue-900 text-5xl font-light mb-7">
          Welcome to the <span className="font-medium">Frontend Quiz!</span>
        </h1>
        <p className="dark:text-blue-300 text-gray-500">
          <i>Pick a subject to get started.</i>
        </p>
      </div>
      <div className="flex flex-col gap-5 flex-1">
        {quizData.quizzes.map((quiz, index) => (
          <QuizSelectionButton
            key={quiz.title}
            text={quiz.title}
            icon={quiz.icon}
            onClick={() => selectQuiz(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Start;
