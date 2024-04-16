interface IInfoContainerProps {
  infoText: string;
  infoValue: string;
}

export default function InfoContainer({
  infoText,
  infoValue,
}: IInfoContainerProps) {
  return (
    <div className="flex w-full justify-between items-center border border-white border-opacity-20 p-[13px] md:flex-col gap-[6px]">
      <p className="text-xs font-bold leading-5 text-white opacity-40">
        {infoText}
      </p>
      <p className="font-antonio text-white text-xl md:2xl">{infoValue}</p>
    </div>
  );
}
