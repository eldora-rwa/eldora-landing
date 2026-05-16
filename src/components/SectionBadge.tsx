const SectionBadge = ({
  text,
  invertColor,
}: {
  text: string;
  invertColor?: boolean;
}) => (
  <div
    className={`inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 ${invertColor ? "bg-navi-light" : "bg-slate-200"}`}
  >
    <span
      className={`size-[11px] rounded-full ${invertColor ? "bg-white" : "bg-navi-light"}`}
    />
    <span
      className={`text-lg font-extrabold md:text-xl ${invertColor ? "text-white" : "text-navi-light"}`}
    >
      {text}
    </span>
  </div>
);

export default SectionBadge;
