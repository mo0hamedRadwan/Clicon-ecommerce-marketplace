type NumOfItemsPropsType = {
  number: number;
};

export default function NumOfItems({ number = 0 }: NumOfItemsPropsType) {
  return (
    <>
      {number > 0 && (
        <span className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 h-4 text-sm sm:w-6 sm:h-6 sm:text-xs flex-center bg-white rounded-full text-black">
          {number}
        </span>
      )}
    </>
  );
}
