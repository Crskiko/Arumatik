import ArrowDownIcon from "../assets/arrow-down-icon.svg";

function Dropdown() {
  return (
    <div className="w-[420px] m-12">
      <div className="flex items-center justify-between px-6 py-3 rounded-xl bg-beige">
        <p className="text-base">Medium Duty</p>
        <img src={ArrowDownIcon} alt="arrow-icon" className="rotate-180" />
      </div>

      <ul className="border-2 border-beige rounded-b-xl">
        <li className="text-sm px-6 py-3 transition-all duration-300 hover:bg-beige">One Way Series</li>
        <li className="text-sm px-6 py-3">One Way Series</li>
        <li className="text-sm px-6 py-3">One Way Series</li>
      </ul>
    </div>
  );
}

export default Dropdown;
