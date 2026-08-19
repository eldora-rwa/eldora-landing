import discord from "@/assets/icons/discord.svg";
import linkedin from "@/assets/icons/linkedin.png";
import substack from "@/assets/icons/substack.png";
import telegram from "@/assets/icons/telegram.svg";
import x from "@/assets/icons/x.svg";
import youtube from "@/assets/icons/youtube.svg";

type SocialListProps = {
  className?: string;
};

const socialItems = [
  { icon: x, link: "https://x.com/eldoraglobal" },
  { icon: discord, link: "https://discord.gg/YhbyU5g64Y" },
  { icon: telegram, link: "https://t.me/Eldoracommunity" },
  { icon: youtube, link: "https://www.youtube.com/@eldoraglobal" },
  { icon: substack, link: "https://substack.com/@eldoraglobal" },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/company/eldora-rwa/",
  },
];

const SocialList = ({ className }: SocialListProps) => {
  return (
    <div
      className={`grid w-fit grid-cols-3 justify-start gap-3 ${className || ""}`}
    >
      {socialItems.map((item) => (
        <div
          key={item.link}
          onClick={() => window.open(item.link, "_blank")}
          className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full
                   bg-navi-base shadow-lg transition-all duration-300 hover:scale-110 hover:bg-navi-mid"
        >
          <img
            src={item.icon}
            alt={item.link}
            className="size-6 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default SocialList;
