import { Linkedin } from "lucide-react";

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  url?: string;
}

type TeamMemberCardProps = {
  member: TeamMember;
};

const TeamMemberCard = ({ member }: TeamMemberCardProps) => (
  <div className="group mx-auto flex w-full max-w-[200px] flex-col items-center text-center lg:max-w-[240px]">
    <div className="relative aspect-square w-full overflow-hidden rounded-[32px] lg:rounded-[40px]">
      <img
        src={member.image}
        alt={member.name}
        className="size-full scale-100 object-cover object-top grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
      />
      {member.url && (
        <div
          onClick={() => {
            window.open(member.url, "_blank");
          }}
          className="absolute bottom-3 right-3 grid size-8 cursor-pointer place-items-center rounded-lg bg-navi-light text-white lg:bottom-4 lg:right-4 lg:size-10 lg:rounded-xl"
        >
          <Linkedin
            size={18}
            fill="white"
            strokeWidth={0}
            className="lg:size-5"
          />
        </div>
      )}
    </div>
    <h4 className="mt-4 font-eiko text-xl leading-tight text-[#0e1927] lg:mt-6 lg:text-2xl">
      {member.name}
    </h4>
    <p className="mt-1 whitespace-pre-line text-xs font-bold text-navi-light lg:text-base">
      {member.position}
    </p>
  </div>
);

export default TeamMemberCard;
