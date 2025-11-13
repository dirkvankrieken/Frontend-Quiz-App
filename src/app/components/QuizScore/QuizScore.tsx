import Image from 'next/image';

type quizScoreProps = {
  iconBackgroundColor: string;
  title: string;
  quizLength: number;
  score: number;
  icon: string;
  selectQuiz: (id: number) => void;
};
const QuizScore = ({
  iconBackgroundColor,
  title,
  quizLength,
  score,
  selectQuiz,
  icon,
}: quizScoreProps) => {
  return (
    <div className="flex flex-col lg:flex-row px-5 lg:gap-0 gap-10">
      <div className="flex-1 font-light lg:text-6xl text-4xl">
        Quiz completed <br />
        <span className="font-medium">You scored...</span>
      </div>
      <div className="flex-1 flex flex-col gap-8 lg:ml-20">
        <div className="flex flex-col text-center py-10 lg:gap-10 gap-5 flex-1 dark:bg-blue-850 bg-white rounded-3xl">
          <div className="flex items-center justify-center gap-5">
            <Image
              className={`${iconBackgroundColor} rounded-lg p-2`}
              src={icon}
              width={50}
              height={50}
              alt=""
            />
            <span className="text-3xl">{title}</span>
          </div>
          <span className="text-9xl">{score}</span>
          <span className="dark:text-blue-300 text-grey-500 text-2xl">
            out of {quizLength}
          </span>
        </div>
        <button
          onClick={() => selectQuiz(4)}
          className={`hover:cursor-pointer text-white lg:text-2xl text-xl bg-purple-600 w-full lg:py-6 py-4 lg:rounded-2xl rounded-xl`}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default QuizScore;
