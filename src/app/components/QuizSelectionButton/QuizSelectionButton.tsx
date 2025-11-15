'use client';
import Image from 'next/image';
interface quizSelectionButtonProps {
  text: string;
  icon: string;
  iconBackgroundColor: string;
  onClick: () => void;
}

const quizSelectionButton = ({
  text,
  icon,
  iconBackgroundColor,
  onClick,
}: quizSelectionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="hover:cursor-pointer hover:dark:!bg-blue-950 hover:bg-gray-50 dark:text-white dark:bg-blue-850 lg:text-2xl text-xl flex items-center bg-white w-full px-5 py-5 rounded-xl gap-5"
    >
      <Image
        className={`${iconBackgroundColor} rounded-lg p-2`}
        src={icon}
        width={50}
        height={50}
        alt=""
      />
      {text}
    </button>
  );
};

export default quizSelectionButton;
