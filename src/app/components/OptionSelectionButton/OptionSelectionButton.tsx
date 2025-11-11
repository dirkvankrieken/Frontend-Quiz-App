'use client';
import Image from 'next/image';

interface optionSelectionButtonProps {
  text: string;
  number: number;
  selected: boolean;
  submitted: boolean;
  correct: boolean;
  answer: number;
  onClick: () => void;
}

const OptionSelectionButton = ({
  text,
  number,
  selected,
  submitted,
  correct,
  answer,
  onClick,
}: optionSelectionButtonProps) => {
  const optionLetters = ['A', 'B', 'C', 'D'];
  let buttonBorder;
  if (selected && !submitted) {
    buttonBorder = 'border-purple-500';
  } else if (submitted && selected && correct) {
    buttonBorder = 'border-green-500';
  } else if (submitted && selected) {
    buttonBorder = 'border-red-500';
  } else {
    buttonBorder = 'dark:border-blue-850 border-white';
  }
  return (
    <button
      onClick={onClick}
      className={`${buttonBorder} dark:text-white dark:bg-blue-850 bg-white flex justify-between items-center w-full px-5 py-3 rounded-xl border-2 text-left`}
    >
      <div className="flex gap-5 items-center">
        <div className="bg-white text-center text-black rounded-lg w-10 h-10 p-2">
          {optionLetters[number]}
        </div>
        {text}
      </div>
      {submitted && number === answer ? (
        <Image
          src="assets/images/icon-correct.svg"
          width={40}
          height={40}
          alt=""
        />
      ) : selected && submitted ? (
        <Image
          src="assets/images/icon-error.svg"
          width={40}
          height={40}
          alt=""
        />
      ) : (
        <div></div>
      )}
    </button>
  );
};

export default OptionSelectionButton;
