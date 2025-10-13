import SelectionButton from '../SelectionButton/SelectionButton';
import quizData from '../../../../data.json';

const Start = () => {
  return (
    <div className="">
      {quizData.quizzes.map((quiz) => (
        <SelectionButton key={quiz.title} text={quiz.title} icon={quiz.icon} />
      ))}
    </div>
  );
};

export default Start;
