import { ChevronRightIcon } from "@heroicons/react/outline";

const NextArrow = ({ className, onClick, style }) => {
  return (
    <div className="absolute top-24 -right-14 cursor-pointer" onClick={onClick}>
      <ChevronRightIcon className="h-10 text-green-400 block hover:bg-white rounded-full" />
    </div>
  );
};

export default NextArrow;
