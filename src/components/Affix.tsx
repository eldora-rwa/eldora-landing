import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import legalPDF from "@/assets/pdfs/legal.pdf";
import policyPDF from "@/assets/pdfs/policy.pdf";
import termsPDF from "@/assets/pdfs/terms.pdf";

const Affix = () => {
  const [display, setDisplay] = useState<boolean>(false);

  useEffect(() => {
    const displayed = localStorage.getItem("displayed-affix");

    if (!displayed || displayed === "false") {
      setDisplay(true);
    }
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 left-4 backdrop-blur-md p-4 text-white
     bg-black/50 border border-gray-700 rounded-xl z-50 lg:w-[420px] ml-auto
     ${display ? "flex" : "hidden"} flex-col items-end gap-2`}
    >
      <p className="text-sm">
        <span>
          Eldora is a neutral aggregator for Real-World Asset (RWA) projects.
          Nothing on this website constitutes investment, financial, or legal
          advice. Eldora does not issue or guarantee any assets listed on the
          platform and does not custody user funds. Users must complete their
          own due diligence and comply with all applicable regulations. Use of
          this website constitutes acceptance of our
        </span>
        <span
          onClick={() => window.open(termsPDF, "_blank")}
          className="font-bold text-accent hover:underline cursor-pointer"
        >
          {" "}
          Terms of Use
        </span>
        <span>,</span>
        <span
          onClick={() => window.open(policyPDF, "_blank")}
          className="font-bold text-accent hover:underline cursor-pointer"
        >
          {" "}
          Privacy Policy
        </span>
        <span> and</span>
        <span
          onClick={() => window.open(legalPDF, "_blank")}
          className="font-bold text-accent hover:underline cursor-pointer"
        >
          {" "}
          Risk Disclosure
        </span>
      </p>

      <Button
        onClick={() => {
          setDisplay(false);
          localStorage.setItem("displayed-affix", "true");
        }}
        variant={"secondary"}
        className="cursor-pointer"
      >
        OK
      </Button>
    </div>
  );
};

export default Affix;
