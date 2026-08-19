import bgOurTeam from "@/assets/imgs/bg_our_team.png";
import { team } from "@/constants";
import SectionBadge from "@/components/SectionBadge";
import TeamMemberCard from "@/components/TeamMemberCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TeamSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-4 py-[120px]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgOurTeam})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 px-4">
        <div className="text-center">
          <SectionBadge text="OUR TEAM" />
          <h2 className="mt-8 font-eiko text-5xl text-[#0e1927]">
            Meet Our Team
          </h2>
        </div>

        <div className="mt-20 hidden flex-col gap-20 lg:flex">
          <div className="mx-auto grid max-w-5xl grid-cols-4 gap-12">
            {team.slice(0, 4).map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-3 gap-12">
            {team.slice(4, 7).map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-4 gap-12">
            {team.slice(7, 11).map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        <div className="mt-12 block lg:hidden">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {team.map((member) => (
                <CarouselItem
                  key={member.name}
                  className="basis-[65%] pl-4 first:pl-0 sm:basis-[45%] md:basis-[33%]"
                >
                  <TeamMemberCard member={member} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex items-center justify-center gap-4 px-4">
              <CarouselPrevious className="static size-12 cursor-pointer border border-navi-dark bg-transparent text-navi-dark hover:bg-white" />
              <CarouselNext className="static size-12 cursor-pointer border border-navi-light bg-navi-light text-white! hover:bg-navi-base" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
