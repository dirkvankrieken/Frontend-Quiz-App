const SelectionButton = ({ text, icon }) => {
  return (
    <button className="block flex items-center bg-white w-full px-5 py-2 my-5">
      <img src={icon} alt="" />
      {text}
    </button>
  );
};

export default SelectionButton;
