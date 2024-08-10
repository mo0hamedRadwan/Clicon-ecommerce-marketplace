type NumOfItemsPropsType = {
  number: number;
};

export default function NumOfItems({ number = 0 }: NumOfItemsPropsType) {
  return (
    <>
      {number > 0 && (
        <span className="absolute -top-2 -right-2 w-6 h-6 flex-center bg-white rounded-full text-sm text-black">
          {number}
        </span>
      )}
    </>
  );
}
