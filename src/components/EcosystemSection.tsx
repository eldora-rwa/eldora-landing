import countryImg from "@/assets/imgs/country.png";
import ecoSystemImg from "@/assets/imgs/ecosystem.png";
import ecoSystemImgMobile from "@/assets/imgs/ecosystem_mobile.png";
import networksImg from "@/assets/imgs/networks.png";
import networksMobileImg from "@/assets/imgs/networks_mobile.png";
import PrimaryButton from "@/components/PrimaryButton";

const EcosystemSection = () => {
  return (
    <section
      id="ecosystem"
      className="rounded-t-4xl bg-navi-dark px-4 py-[120px]"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-[60px]">
        <h2 className="text-center font-eiko text-3xl text-white md:text-5xl">
          Integrated Ecosystem
        </h2>

        <img src={ecoSystemImg} alt="" className="hidden lg:block" />
        <img src={ecoSystemImgMobile} alt="" className="lg:hidden" />

        <div className="flex w-full max-w-4xl flex-col items-center gap-8 lg:gap-10">
          <div className="flex items-center justify-center">
            <img
              src={countryImg}
              alt="85+ countries"
              className="h-auto w-full max-w-[520px] object-contain lg:max-w-[620px]"
            />
          </div>

          <p className="text-center text-xl font-semibold text-white">
            Live on 5 networks
          </p>

          <img
            src={networksImg}
            alt="Networks"
            className="hidden h-auto w-full max-w-5xl object-contain lg:block"
          />
          <img
            src={networksMobileImg}
            alt="Networks"
            className="h-auto w-full max-w-md object-contain lg:hidden"
          />
        </div>

        <PrimaryButton
          withEffect
          onClick={() => {
            window.location.href = "mailto:tracy@eldora.do";
          }}
          className="flex items-center gap-2 px-6 py-2"
        >
          Become a partner
        </PrimaryButton>
      </div>
    </section>
  );
};

export default EcosystemSection;
