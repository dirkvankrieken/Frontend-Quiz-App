import Image from 'next/image';

export default function NothingSelected() {
  return (
    <div className="flex items-center">
      <Image src="assets/images/icon-error.svg" width="50" height="50" alt="" />
      Please select an answer
    </div>
  );
}
