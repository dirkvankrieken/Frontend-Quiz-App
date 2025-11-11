import Image from 'next/image';

type quizInfoProps = {
  iconBackgroundColor: string;
  quizData: {
    title: string;
    icon: string;
    index: number;
  } | null;
};

const QuizInfo = ({ iconBackgroundColor, quizData }: quizInfoProps) => {
  if (quizData) {
    return (
      <header className="flex gap-5 items-center lg:max-h-4">
        <Image
          className={`${iconBackgroundColor} rounded-lg p-2`}
          src={quizData.icon}
          width={50}
          height={50}
          alt=""
        />
        <div className="text-3xl">{quizData.title}</div>
      </header>
    );
  } else {
    return <div></div>;
  }
};

export default QuizInfo;
