import QuizInfo from '../QuizInfo/QuizInfo';
import LightDarkSwitch from '../LightDarkSwitch/LightDarkSwitch';
interface headerProps {
  quizInfo: {
    title: string;
    icon: string;
    index: number;
  } | null;
  selectedQuiz: number;
}

const iconBackgroundColor = [
  'bg-orange-50',
  'bg-green-100',
  'bg-blue-50',
  'bg-purple-100',
];
const Header = ({ quizInfo, selectedQuiz }: headerProps) => {
  return (
    <div className="flex justify-between lg:py-20 p-5">
      <QuizInfo
        iconBackgroundColor={iconBackgroundColor[selectedQuiz]}
        quizData={quizInfo}
      />
      <LightDarkSwitch />
    </div>
  );
};

export default Header;
