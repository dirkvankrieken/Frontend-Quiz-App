import Image from 'next/image';

export default function NothingSelected() {
  return (
    <div className="flex text-red-500 items-center justify-center">
      <Image src="assets/images/icon-error.svg" width="50" height="50" alt="" />
      Please select an answer
    </div>
  );
}
