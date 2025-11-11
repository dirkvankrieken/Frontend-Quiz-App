'use client';
import Image from 'next/image';
interface quizSelectionButtonProps {
  text: string;
  icon: string;
  onClick: () => void;
}

const quizSelectionButton = ({
  text,
  icon,
  onClick,
}: quizSelectionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="dark:text-white dark:bg-blue-850 flex items-center bg-white w-full px-5 py-3 rounded-xl gap-5"
    >
      <div className="bg-white rounded-lg p-2">
        <Image src={icon} width={50} height={50} alt="" />
      </div>
      {text}
    </button>
  );
};

export default quizSelectionButton;
