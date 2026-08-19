import { motion } from "motion/react";
import { liquidityAccessList } from "@/constants";
import SectionBadge from "@/components/SectionBadge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
} as const;

const LiquidityAccessSection = () => {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <SectionBadge text="YOUR MONEY, YOUR RULES" />
          <h3 className="mt-10 font-eiko text-4xl lg:text-5xl">
            Your Money Doesn’t <br className="lg:hidden" />
            Sleep. Neither Does Eldora
          </h3>
          <p className="mt-6 lg:text-xl">
            Trade at midnight. Exit on a Sunday. Earn yield while you sleep.
            <br className="hidden md:block" /> No business hours. No broker
            required.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {liquidityAccessList.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="flex items-center gap-6 border-b border-slate-300 pb-6"
            >
              <img src={item.icon} alt="" className="h-30 w-30 object-contain" />
              <div>
                <h4 className="font-eiko text-[32px] leading-[1.2] text-[#182740]">
                  {item.title}
                </h4>
                <p className="mt-2 whitespace-pre-line text-base leading-7 text-[#475569]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LiquidityAccessSection;
